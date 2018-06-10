'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
    constructor(ctx) {
        super(ctx);
        this.CategoryModel = this.model.Category;
    }
    async createCategory(category,type) {
        const result = await this.CategoryModel.findOrCreate({
          where: {
            category,
            type
          },
          defaults: {
            category,
            type
          },
        });
        if (result[result.length - 1]) {
          return {
            error: false,
            data: '创建成功',
          };
        }
        return {
          error: true,
          data: '已存在此分类',
        };
    }
    async deleteCategory() {

    }
    async modifyCategory() {

    }
    async getAllCategory() {

    }
    async getSubCategory() {

    }


}

module.exports = CategoryService;