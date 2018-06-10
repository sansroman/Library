'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.categoryController = ctx.controller.categoryController;
  }
  async createCategory(){
    this.ctx.validate({
        category: { type: 'string',required:false},
        type: { type: 'string'},
      });
      const {
        category='未命名分类' ,
        type,
      } = this.ctx.request.body;
      const response = await this.categoryController.createCategory(category,type);
      if (response.error) this.ctx.status = 409;
      this.ctx.body = response;
  }
  async deleteCategory(){

  }
  async modifyCategory(){

  }
  async getAllCategory(){

  }
  async getSubCategory(){

  }
}

module.exports = CategoryController;