'use strict';

const Service = require('egg').Service;

class CommunityService extends Service {
    constructor(ctx) {
        super(ctx)
        this.CommunityModel = ctx.model.Community;
        this.UserModel = ctx.model.User;

    }

    async createArticle(uid, title, content) {
        const result = await this.CommunityModel.create({
            aid: uid,
            title,
            content
        })
        return result;
    }

}

module.exports = CommunityService;