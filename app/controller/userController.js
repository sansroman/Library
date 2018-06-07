'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.UserModel = ctx.model.UserModel;
    this.UserService = ctx.service.userService;
    this.ResponseCode = ctx.response.ResponseCode;
    this.ServerResponse = ctx.response.ServerResponse;

  }
  async login() {

  }
  async logout() {
  
  }
  async register() {

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

module.exports = UserController;