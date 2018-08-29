'use strict';

const Service = require('egg').Service;

class CommunityService extends Service {
    constructor(ctx) {
        super(ctx)
        this.CommunityModel = ctx.model.Community;
        this.UserModel = ctx.model.User;
        this.CommunityCommentModel = ctx.model.CommunityComment;
        this.LikedCommunityModel = ctx.model.LikedCommunity;
        this.UnlikedCommunityModel = ctx.model.UnlikedCommunity;


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
            }, {
                model: this.UserModel,
                as: 'likedUser',
                attributes: ['id'],
                through: {
                    attributes: []
                }
            }, {
                model: this.UserModel,
                as: 'unlikedUser',
                attributes: ['id'],
                through: {
                    attributes: []
                }
            }]
        })
        return result;
    }
    async getArticle(cid) {
        const result = await this.CommunityModel.findOne({
            include:[{
                model: this.UserModel,
                attributes: ['id', 'nickname', 'avatar', 'role'],
                as: 'author'
            },
            {
                model:this.CommunityCommentModel
            }, {
                model: this.UserModel,
                as: 'likedUser',
                attributes: ['id'],
                through: {
                    attributes: []
                }
            }, {
                model: this.UserModel,
                as: 'unlikedUser',
                attributes: ['id'],
                through: {
                    attributes: []
                }
            }],
            where:{
                id:cid
            }
        })
        return result;
    }
    
    async addCommentToArticle(uid,community_id,content){
        const result = await this.CommunityCommentModel.create({
            aid: uid,
            community_id,
            content
        })
        return result;
    }

    async likedCommunity(cid, uid) {
        console.log(this.ctx.model)
        let result = await this.LikedCommunityModel.findOrCreate({
            where: {
                cid,
                uid
            }
        })
        let status = result[result.length - 1] ? true : false;
        if (!result[result.length - 1]) {
            result = await this.LikedCommunityModel.destroy({
                where: {
                    cid,
                    uid
                }
            })
        }
        return status;
    }
    async unlikedCommunity(cid, uid) {
        let result = await this.UnlikedCommunityModel.findOrCreate({
            where: {
                cid,
                uid
            }
        })
        let status = result[result.length - 1] ? true : false;
        if (!result[result.length - 1]) {
            result = await this.UnlikedCommunityModel.destroy({
                where: {
                    cid,
                    uid
                }
            })
        }
        return status;
    }

}

module.exports = CommunityService;