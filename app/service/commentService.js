'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
    constructor(ctx) {
        super(ctx)
        this.CommentModel = ctx.model.Comment;
        this.BookModel = ctx.model.Book;
        this.UserModel = ctx.model.User;
    }
    async getAllComment(bid,limit,offset) {
        const result = await this.CommentModel.findAndCountAll({
            limit,
            offset,
            where:{
                bid
            },
            include:[{model:this.UserModel,attributes:['nickname','avatar','role']}]
          });
          return result;
    }
    async createComment(bid,uid,content) {
        const result = await this.CommentModel.create({
            uid,
            content,
            bid
        },{
            include:[{model:this.BookModel},{model:this.UserModel}]
        })
        return result;
    }
    async delComment(bid) {
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