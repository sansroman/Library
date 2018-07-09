'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
  constructor(ctx) {
    super(ctx);
    this.CategoryModel = ctx.model.Category;
  }
  async createCategory(category, type) {
    const result = await this.CategoryModel.findOrCreate({
      where: {
        category,
        type
      }
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
  async deleteCategory(cid) {
    const result = await this.CategoryModel.destroy({
      where: {
        id: cid
      }
    });
    return {
      error: true,
      data: result
    }
  }

  async getAllCategory() {
    const result = await this.CategoryModel.findAll({
      group: 'category',
      attributes: ['category']
    });
    return result;
  }
  async getCategoryAndType() {
    const result = await this.CategoryModel.findAll({
      group: 'category',
      attributes: ['category', [this.app.Sequelize.fn('GROUP_CONCAT', this.app.Sequelize.col('type')), 'type'],
        [this.app.Sequelize.fn('GROUP_CONCAT', this.app.Sequelize.col('id')), 'id']
      ],

    });
    return result.map((element) => {
      let uid =   element.get('id').split(',');
      let type =  element.get('type').split(',');
      let temp = [];

      for(let i=0;i<uid.length;i++){
        temp.push({
          id: uid[i],
          type: type[i]
        });
      }
      return  {
        category: element.get('category'),
        type: temp
      }
    })
  }

  async getSubCategory(category) {
    return await this.CategoryModel.findAll({
      where: {
        category
      },
      attributes: ['id', 'type']
    });
  }


}

module.exports = CategoryService;