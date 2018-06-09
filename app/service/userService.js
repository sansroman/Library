'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    constructor(ctx) {
        super(ctx)
        this.UserModel = ctx.model.User;
    }
    async login() {
        const user = await this.UserModel.findUser(username);
        if (user && this.ctx.compare(password, user.get('password'))) {
          const role = user.get('role');
          this.ctx.session.user = {
            id: user.get('id'),
          };
          return {
            error: false,
            data: {
              text: '登录成功',
              user: {
                nickname: user.get('nickname'),
                avatar: user.get('avatar'),
                signature,
                integral,
                readingTime
              },
            },
          };
        } return {
          error: true,
          data: '账号密码错误',
        };
    }
    async register(userid , password, nickname, avatar, signature) {
        const pwdHash = await this.ctx.genHash(password);
        const result = await this.UserModel.findOrCreate({
          where: {
            username,
          },
          defaults: {
            userid,
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
    async getUserInfo() {

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