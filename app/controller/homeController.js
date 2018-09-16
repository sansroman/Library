'use strict';
const fs =   require('fs');
const path =   require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  constructor(ctx){
    super(ctx)
  }
  async admin(){
    await this.ctx.render('index.html');
  }
}
module.exports = HomeController;