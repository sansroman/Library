'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.categoryService = ctx.service.categoryService;
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
      const response = await this.categoryService.createCategory(category,type);
      if (response.error) this.ctx.status = 409;
      this.ctx.body = response;
  }
  async deleteCategory(){
      const cid = this.ctx.params.cid;
      const response = await this.categoryService.deleteCategory(cid);
      this.ctx.body = response;
  }
  async getCategoryAndType(){
    const response = await this.categoryService.getCategoryAndType();
    this.ctx.body = response;
  }
  async getAllCategory(){
    const response = await this.categoryService.getAllCategory();
    this.ctx.body = response;

  }
  async getSubCategory(){
    const category = this.ctx.query.category;
    const response = await this.categoryService.getSubCategory(category);
    this.ctx.body = response;
  }

}

module.exports = CategoryController;