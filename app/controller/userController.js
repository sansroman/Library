'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.UserModel = ctx.model.UserModel;
    this.UserService = ctx.service.userService;
  }
  async login() {
    this.ctx.validate({
      userid: { type: 'number' },
      password: { type: 'string', min: 8, max: 20 },
      rememberMe: { type: 'boolean', required: false },
    });
    const {
      userid,
      password,
      rememberMe,
    } = this.ctx.request.body;
    const response = await this.userService.login(userid, password);
    if (response.error) this.ctx.status = 403;
    if (!response.error && rememberMe) this.ctx.session.maxAge = ms('30d');
    this.ctx.body = response;
  }
  async logout() {
    this.ctx.session = null;
    this.ctx.body = '退出成功';
  }
  async register() {
    this.ctx.validate({
      userid: { type: 'email' },
      password: { type: 'string', min: 8, max: 20 },
      nickname: { type: 'string', min: 1, max: 20 },
      avatar: { type: 'url', required: false },
      signature:{type: 'string', min: 0, max: 200}
    });
    const {
      userid ,
      password,
      nickname = 'guest',
      avatar = null,
    } = this.ctx.request.body;
    const response = await this.userService.register(userid , password, nickname, avatar, signature);
    if (response.error) this.ctx.status = 405;
    this.ctx.body = response;
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
  async getFollowingList() {

  }
  async followOne() {

  }
  async unfollow() {

  }
}

module.exports = UserController;