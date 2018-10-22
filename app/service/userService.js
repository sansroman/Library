'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx)
    this.UserModel = ctx.model.User;
    this.BookModel = ctx.model.Book;
    this.BookShelfsModel = ctx.model.BookShelfs;
    this.CategoryModel = ctx.model.Category;
    this.ChapterModel = ctx.model.Chapter;
    this.CommentModel = ctx.model.Comment;
    this.CommunityModel = ctx.model.Community;
    this.CommunityCommentModel = ctx.model.CommunityComment;
  }
  async _checkPass(account, password) {
    const user = await this.UserModel.findOne({
      include: [{
        model: this.BookModel,
        as: 'recent',
        through: {
          attributes: ['created_at', 'update_at'],
        }
      }],
      where: {
        account
      }
    });
    return (user && this.ctx.compare(password, user.get('password'))) ? user : null;
  }
  async login(account, password) {

    let user = await this._checkPass(account, password);
    if (user) {
      this.ctx.session.user = {
        uid: user.get('id'),
      }
      return {
        error: false,
        data: {
          text: '登录成功',
          user: {
            nickname: user.get('nickname'),
            avatar: user.get('avatar'),
            signature: user.get('signature'),
            integral: user.get('integral'),
            readingTime: user.get('readingTime'),
            recentBook: user.get('Books')
          },
        },
      };
    } else {
      return {
        error: true,
        data: '账号密码错误',
      };
    }
  }
  async adminLogin(account, password) {
    let user = await this._checkPass(account, password);
    const role = user ? user.get('role') : 0;
    if (user && user.get('role') > 1) {
      this.ctx.session.user = {
        uid: user.get('id'),
        isAdmin: role > 2 ? true : false,
        isLibrarian: true
      }
      return {
        error: false,
        data: {
          text: '认证成功',
          nickname: user.get('nickname'),
          role: user.get('role')
        }
      }
    } else {
      return {
        error: true,
        data: '认证失败',
      };
    }

  }
  async register(account, password, nickname, avatar, signature) {
    const pwdHash = await this.ctx.genHash(password);
    const result = await this.UserModel.findOrCreate({
      where: {
        account,
      },
      defaults: {
        account,
        password: pwdHash,
        nickname,
        avatar,
        signature
      },
    });
    if (result[result.length - 1]) {
      return {
        error: false,
        data: '创建成功',
      };
    }
    return {
      error: true,
      data: '已存在此用户',
    };
    // try {
    //   const result = await this.UserModel.bulkCreate(userList);
    //   return result;
    // } catch (error) {
    //   return {error:true,message:error};
    // }
  }
  async batchRegister(userList) {
    try {
      const result = await this.UserModel.bulkCreate(userList);
      return result;
    } catch (error) {
      return {
        error: true,
        message: error
      };
    }
  }
  async updateUserInfo(uid, nickname, avatar, signature) {
    const result = await this.UserModel.update({
      nickname,
      avatar,
      signature
    }, {
      where: {
        id: uid
      }
    });
    return result;
  }
  async getUserInfo(uid) {
    let condition = uid || this.session;
    const user = await this.UserModel.findOne({
      attributes: ['account', 'avatar', 'integral', 'nickname', 'readingTime', 'signature'],
      include: [{
        model: this.BookModel,
        through: {
          attributes: ['created_at', 'update_at'],
        },
        as: "collection"
      }],
      where: {
        id: condition
      }
    });
    return {
      error: false,
      data: user
    }
  }

  async getUserList(rid, limit, offset) {
    const condition = rid == -1 ? {
      where: {
        role: rid
      }
    } : null
    const result = await this.UserModel.findAndCountAll({
      condition,
      attributes: ['id', 'account', 'nickname', 'role', ],
      limit,
      offset
    });
    return result;
  }
  async modifyRole(uid, role) {
    const result = await this.UserModel.update({
      role
    }, {
      where: {
        id: uid
      }
    });
    return result;
  }
  async searchUser(name, limit, offset) {
    const result = await this.UserModel.findAndCountAll({
      where: {
        account: {
          [this.app.Sequelize.Op.like]: `%${name}%`
        }
      },
      attributes: ['id', 'account', 'nickname', 'role', ],
      limit,
      offset
    });
    return result;
  }
  async getRankList() {

  }

  async collectBook(uid, bid) {
    let result = await this.BookShelfsModel.findOrCreate({
      where: {
        book_id: bid,
        user_id: uid
      }
    })
    return result;
  }
  async cancelCollectBook(uid, bid) {
    let result = await this.BookShelfsModel.destroy({
      where: {
        book_id: bid,
        user_id: uid
      }
    })

    return result;
  }
  async getAllCollection(uid) {
    const result = await this.UserModel.findOne({
      include: [{
        model: this.BookModel,
        as: 'collection'
      }],
      where: {
        id: uid
      }
    })
    return result;
  }
  async getAllArticles(uid) {
    const result = await this.CommunityModel.findAndCountAll({
      include: [{
        model: this.CommunityCommentModel,
        include: [{
          model: this.UserModel,
          as: 'commentator',
          attributes: ['id', 'nickname', 'avatar', 'role'],
        }]
      }, {
        model: this.UserModel,
        as: 'likedUser',
        attributes: ['id'],
        through: {
          attributes: []
        }
      }, {
        model: this.UserModel,
        as: 'unlikedUser',
        attributes: ['id'],
        through: {
          attributes: []
        }
      }],
      where: {
        aid: uid
      },
      distinct: true
    })
    return result;
  }


  async manager(dateTime) {
    let statistics = await this.ctx.helper.getCount([this.BookModel, this.CategoryModel, this.ChapterModel, this.CommentModel, this.UserModel, this.BookShelfsModel, this.CommunityModel]);
    const tempArr = await this.ctx.helper.getCountByTimeRange([this.BookModel, this.CategoryModel, this.ChapterModel, this.CommentModel, this.UserModel, this.BookShelfsModel, this.CommunityModel], dateTime)
    for (const key in statistics) {
      if (statistics.hasOwnProperty(key)) {
        statistics[key].range = tempArr[key]
      }
    }
    return statistics
  }

}

module.exports = UserService;
