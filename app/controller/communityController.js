'use strict';

const Controller = require('egg').Controller;

class CommunityController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.communityService = ctx.service.communityService;
  }
  async createArticle() {
    const {title,content} = this.ctx.request.body;
    const {uid} = this.session.user;
    const response = await this.communityService.createArticle(uid,title,content);
    this.ctx.body = response;
  }
  async getAllArticle(){
    let {limit = 10,offset = 0} = this.ctx.query;
    limit = parseInt(limit);
    offset = parseInt(offset) * limit;
    const response = await this.communityService.getAllArticle(limit,offset);
    this.ctx.body = response;
  }
  

}

module.exports = CommunityController;