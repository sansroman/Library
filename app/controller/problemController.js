'use strict';
const fs =   require('fs');
const path =   require('path');
const Controller = require('egg').Controller;

class ProblemController extends Controller {
  constructor(ctx){
    super(ctx)
    this.session = ctx.session;
    this.problemService = ctx.service.problemService;
  }

  async addProblem(){
    const {name, email, content} = this.ctx.request.body;
    const {uid} = this.session.user||0;
    const response = await this.problemService.createProblem({uid, name, email, content});
    this.ctx.body = response;
  }

  async getAllProblem(){
    let {limit = 10,offset = 0} = this.ctx.query;
    limit = parseInt(limit);
    offset = parseInt(offset) * limit;
    const response = await this.problemService.getProblemList(limit,offset);
    this.ctx.body = response;
  }

  async getProblem(){
    const id = this.ctx.params.id;
    const response = await this.problemService.getProblemByID(id);
    this.ctx.body = response;
  }

  async deleteProblem(){
    const id = this.ctx.params.id;
    const response = await this.problemService.delProblem(id);
    this.ctx.body = response;
  }

}
module.exports = ProblemController;
