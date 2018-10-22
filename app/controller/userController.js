'use strict';
const LOGIN_SCORE = 1;
const LOGIN = 'LOGIN';
const SIGNIN = 'SIGNIN';
const Controller = require('egg').Controller;

class UserController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.userService = ctx.service.userService;
    this.scoreService = ctx.service.scoreService;
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
    let response = await this.userService.login(account, password);
    if (response.error) this.ctx.status = 403;
    else {
      const {uid} = this.session.user;
      if (rememberMe) this.ctx.session.maxAge = ms('30d');
      const checkToday = await this.scoreService.checkToday(uid, LOGIN)
      if(checkToday){
        this.scoreService.recordScore(uid, LOGIN, LOGIN_SCORE);
        response.data.added = true
      }
    }
    this.ctx.body = response;
  }

  async logout() {
    this.ctx.session = null;
    this.ctx.body = '退出成功';
  }
  async register() {
    this.ctx.validate({
      account: { type: 'string'},
      password: { type: 'string', min: 8, max: 20 },
      nickname: {type: 'string', min: 1, max: 20 , required: false },
      avatar: {type: 'url', required: false },
      signature:{type: 'string', min: 0, max: 200,required:false}
    });
    const {
      account ,
      password,
      nickname = 'guest',
      avatar = null,
      signature = '这个人很懒,什么都没有留下',
    } = this.ctx.request.body;
    // const {userList} = this.ctx.request.body;
    const response = await this.userService.register(account,password,nickname,avatar,signature);
    if (response.error) this.ctx.status = 409;
    this.ctx.body = response;
  }
  async resetPassword() {

  }
  async updateUserInfo() {
    this.ctx.validate({
      nickname: {type: 'string', min: 1, max: 20 , required: false },
      avatar: {type: 'url', required: false },
      signature:{type: 'string', min: 0, max: 200,required:false}
    });
    const uid = this.ctx.params.uid;
    const {
      nickname = 'guest',
      avatar = null,
      signature = '这个人很懒,什么都没有留下',
    } = this.ctx.request.body;
    const response = await this.userService.updateUserInfo(uid, nickname, avatar, signature);
    this.ctx.body = response;
  }

  async getUserInfo() {
    const uid = this.ctx.params.uid;
    const response = await this.userService.getUserInfo(uid);
    if(response.error) this.ctx.state = 404;
    this.ctx.body = response;
  }

  async getRankList() {

  }

  async collectBook() {
      const {bid} = this.ctx.request.body;
      const {uid} = this.session.user;
      const response =await this.userService.collectBook(uid,bid);
      this.ctx.body = response;

  }
  async cancelCollectBook() {
    const {bid} = this.ctx.params;
    const {uid} = this.session.user;
    const response =await this.userService.cancelCollectBook(uid,bid);
    this.ctx.body = response;
  }

  async getAllCollection() {
    const {uid} = this.session.user;
    const response =await this.userService.getAllCollection(uid);
    this.ctx.body = response;
  }

  async getAllArticles(){
    const {uid} = this.session.user;
    const response = await this.userService.getAllArticles(uid);
    this.ctx.body = response;
  }

  async signin(){
    const {uid} = this.session.user;
    const checkToday = await this.scoreService.checkToday(uid, LOGIN)
     const response = checkToday ? this.scoreService.recordScore(uid, SIGNIN,await this.scoreService.calSignScore(uid)) : {error:true};
    this.ctx.body = response;
  }

  async getScore(){
    const {uid} = this.session.user;
    console.log(this.scoreService.calSignScore(uid))
    const response = await this.scoreService.getScore(uid);
    this.ctx.body = response;
  }

}

module.exports = UserController;
