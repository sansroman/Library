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
    const {
      username,
      password
    } = this.ctx.request.body;
    const response = await this.userService.login(username, password);
    if (response.isSuccess()) {
      this.session.currentUser = response.getData();
    }
    this.ctx.body = response;
  }

  async logout() {
    this.ctx.session = null;
    this.ctx.body = this.ServerResponse.createBySuccess();
  }

  async register() {
    const user = this.ctx.request.body;
    const response = await this.UserService.register(user);
    this.ctx.body = response;
  }

  async getQuestion() {
    const {
      username
    } = this.ctx.params;
    const response = await this.UserService.selectQuestion(username);
    this.ctx.body = response;
  }

  async resetPassword() {
    let response;
    const {
      passwordOld,
      passwordNew
    } = this.ctx.request.body;
    const user = this.session.currentUser;
    if (!user) response = this.ServerResponse.createByErrorMsg('用户未登录');
    else response = await this.UserService.resetPassword(user, passwordOld, passwordNew);
    this.ctx.body = response;
  }

  async forgetCheckAnswer() {
    const {
      username,
      question,
      answer
    } = this.ctx.request.body;
    const response = await this.UserService.checkAnswer(username, question, answer);
    this.ctx.body = response;
  }

  async forgetResetPassword() {
    const {
      username,
      paswordNew,
      forgetToken
    } = this.ctx.request.body;
    const response = await this.UserService.forgetRestPassword(username, paswordNew, forgetToken);
    this.ctx.body = response;
  }

  async updateUserInfo() {
    const userInfo = this.ctx.request.body;
    const user = this.session.currentUser;
    const response = await this.UserService.updateUserInfo(userInfo, user);
    this.session.currentUser = response.getData();
    this.ctx.body = response;
  }

  async getUserInfo() {
    let response;
    const user = this.session.currentUser;
    if (!user) response = this.ServerResponse.createByErrorCodeMsg(this.ResponseCode.NEED_LOGIN, '需要强制登录status=10');
    else response = await this.UserService.getUserInfo(user.id);
    this.ctx.body = response;
  }

  async checkValid() {
    const {
      value,
      type
    } = this.ctx.params;
    const response = await this.UserService.checkValid(type, value);
    this.ctx.body = response;
  }

  async getBookshelf() {
    let response;
    const user = this.session.currentUser;
    if (!user) response = this.ServerResponse.createByErrorCodeMsg(this.ResponseCode.NEED_LOGIN, '需要强制登录status=10');
    else response = await this.UserService.getBookshelf(user.id);
    this.ctx.body = response;
  }

  async addBookshelf() {
    let response;
    const user = this.session.currentUser;
    const {bookid} = this.ctx.params;
    if (!user) response = this.ServerResponse.createByErrorCodeMsg(this.ResponseCode.NEED_LOGIN, '需要强制登录status=10');
    else response = await this.UserService.addBookshelf(user.id,bookid);
    this.ctx.body = response;
  }

  async delBookshelf() {
    let response;
    const user = this.session.currentUser;
    const {bookid} = this.ctx.params;
    if (!user) response = this.ServerResponse.createByErrorCodeMsg(this.ResponseCode.NEED_LOGIN, '需要强制登录status=10');
    else response = await this.UserService.delBookshelf(user.id,bookid);
    this.ctx.body = response;
  }

  async getUserList() {
    const {type,limit} = this.ctx.params;
    const response = await this.UserService.getUserList(type,limit);
    this.ctx.body = response;
  }


  async ManagerUser() {
    const {userid} = this.ctx.params;
    // 暂时只有role
    const {role}  = this.ctx.request.body;
    const response = await this.userService.managerUser(userid,role);
    this.ctx.body = response;
  }

  async searchUser() {
    const {username} = this.ctx.params;
    const response = await this.UserService.searchUser(username);
    this.ctx.body = response;
  }

  async getCategory(){
    const response = await this.UserService.getCategory();
    this.ctx.body = response;
  }

  async deleteUser(){
    const {userid} = this.ctx.params;
    const response = await this.UserService.deleteUser(userid);
    this.ctx.body = response;
  }
}

module.exports = UserController;