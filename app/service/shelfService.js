'use strict';

const Service = require('egg').Service;

class ShelfService extends Service {
    constructor(ctx) {
        super(ctx)
        this.session = ctx.session;
        this.ShelfModel = ctx.model.Shelf;
    }
    async getShelfList(id){
        return await this.ShelfModel.getShelfList(id);
    }

}

module.exports = ShelfService;

