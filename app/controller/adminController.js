'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.userService = ctx.service.userService;
  }
  async login() {
    this.ctx.validate({
      account: { type: 'string'},
      password: { type: 'string', min: 8, max: 20 },
      rememberMe: { type: 'boolean', required: false },
    });
    const {
      account,
      password,
      rememberMe,
    } = this.ctx.request.body;
    const response = await this.userService.adminLogin(account, password);
    if (response.error) this.ctx.status = 403;
    if (!response.error && rememberMe) this.ctx.session.maxAge = ms('30d');
    this.ctx.body = response;
  }
  async logout() {
    this.ctx.session = null;
    this.ctx.body = '退出成功';
  }
  async getUserList(){
    let {limit = 10,offset = 0,bookname} = this.ctx.query;
    limit = parseInt(limit);
    offset = parseInt(offset<0?0:offset) * limit; 
    const {rid} = this.ctx.params;
    const response = await this.userService.getUserList(rid,limit,offset);
    this.ctx.body = response;
  }
  async searchUser(){
    const {name} = this.ctx.query;
    const response = await this.userService.searchUser(name);
    this.ctx.body = response;
  }
  async modifyRole(){
    const {uid} = this.ctx.params;
    const {role} = this.ctx.request.body;
    const response = await this.userService.modifyRole(uid,role); 
    
    this.ctx.body = response;
  }
  async register() {
    const {userList} = this.ctx.request.body;
    const response = await this.userService.batchRegister(userList);
    if (response.error) this.ctx.status = 409;
    this.ctx.body = response;
  }

}

module.exports = AdminController;