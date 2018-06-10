'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx)
    this.UserModel = ctx.model.User;
    this.BookModel = ctx.model.Book;
  }
  async login(account, password) {
    const user = await this.UserModel.findOne({
      include: [{
        model: this.BookModel,
        through: {
          attributes: ['created_at', 'update_at'],
        }
      }],
      where: {
        account
      }
    });
    if (user && this.ctx.compare(password, user.get('password'))) {
      const role = user.get('role');
      this.ctx.session.user = {
        uid: user.get('id'),
      };
      return {
        error: false,
        data: {
          text: '登录成功',
          user: {
            nickname: user.get('nickname'),
            avatar: user.get('avatar'),
            signature:user.get('signature'),
            integral:user.get('integral'),
            readingTime:user.get('readingTime'),
            recentBook: user.get('Books')
          },
        },
      };
    }
    return {
      error: true,
      data: '账号密码错误',
    };
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
  }
  async resetPassword() {

  }
  async updateUserInfo() {

  }
  async getUserInfo(account) {
    let condition = account ? {
      account
    } : {
      id: this.ctx.session.uid
    };
    const user = await this.UserModel.findOne({
      attributes: ['account', 'avatar', 'nickname', 'readingTime', 'signature'],
      include: [{
        model: this.BookModel,
        through: {
          attributes: ['created_at', 'update_at'],
        }
      }],
      where: {
        account
      }
    });
    console.log(user.get('Books'));
    return {
      error: false,
      data: user
    }
  }
  async getRankList() {

  }
  async getShelfList() {

  }
  async createShelf() {

  }
  async modifyShelf() {

  }
  async delShelf() {

  }
  async getShelfByID() {

  }
  async collectBook() {

  }
  async cancelCollectBook() {

  }
  async getAllCollection() {

  }
  async collectComment() {

  }
  async delCollectComment() {

  }
  async getFollowerList() {

  }
  async getFollowerList() {

  }
  async followOne() {

  }
  async unfollow() {

  }

}

module.exports = UserService;