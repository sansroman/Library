'use strict';

const Service = require('egg').Service;

class CommunityService extends Service {
    constructor(ctx) {
        super(ctx)
        this.CommunityModel = ctx.model.Community;
        this.UserModel = ctx.model.User;
        this.CommunityCommentModel = ctx.model.CommunityComment;

    }

    async createArticle(uid, title, content) {
        const result = await this.CommunityModel.create({
            aid: uid,
            title,
            content
        })
        return result;
    }
    async getAllArticle(limit, offset) {
        const result = await this.CommunityModel.findAndCountAll({
            limit,
            offset,
            include:[{
                model: this.UserModel,
                attributes: ['id', 'nickname', 'avatar', 'role'],
                as: 'author'
            },
            {
                model:this.CommunityCommentModel
            }]
        })
        return result;
    }
}

module.exports = CommunityService;