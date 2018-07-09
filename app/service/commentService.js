'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
    constructor(ctx) {
        super(ctx)
        this.CommentModel = this.ctx.Comment;
    }
    async getAllComment() {
        const result = await this.CommentModel.findAll({
            limit,
            offset
          });
          return result;
    }
    async createComment() {

    }
    async delComment() {
        const result = await this.CommentModel.destroy({
            where: {
                id: bid
            }
        });
        return {
            error: true,
            data: result
        }
    }
    async modifyComment() {

    }
    async getCommentByID(cid) {
        const result = await this.CommentModel.findOne({
            where:{
                id:cid
            }
          });
          return result;
    }
    async likeComment() {

    }
    async unlikeComment() {

    }

}

module.exports = CommentService;