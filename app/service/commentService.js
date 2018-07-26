'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
    constructor(ctx) {
        super(ctx)
        this.CommentModel = ctx.model.Comment;
        this.BookModel = ctx.model.Book;
        this.UserModel = ctx.model.User;
        this.LikedCommentModel = ctx.model.LikedComment;
        this.UnlikedCommentModel = ctx.model.UnlikedComment;

    }
    async getAllComment(bid, uid, limit, offset) {
        const result = await this.CommentModel.findAndCountAll({
            limit,
            offset,
            where: {
                bid
            },
            include: [{
                model: this.UserModel,
                attributes: ['id', 'nickname', 'avatar', 'role'],
                as: 'commentAuthor'
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
        });
        let temp = result.rows.map((element) => {
            let tmp = element.get({plain: true })
            let likedUserList = tmp.likedUser.map((ele) => {
                return ele.id;
            })
            let unlikedUserList = tmp.unlikedUser.map((ele) => {
                return ele.id;
            })
            
            tmp.likedUser = {
                count: likedUserList.length,
                status: likedUserList.indexOf(uid) == -1?false:true
            }
            tmp.unlikedUser = {
                count: unlikedUserList.length,
                status: unlikedUserList.indexOf(uid) == -1?false:true
            }
            return tmp;
        })
        return {
            count: result.rows.length,
            rows: temp
        };
    }
    async createComment(bid, uid, content) {
        const result = await this.CommentModel.create({
            aid: uid,
            content,
            bid
        }, {
            include: [{
                model: this.BookModel
            }, {
                model: this.UserModel,as:'commentAuthor'
            }]
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
            where: {
                id: cid
            }
        });
        return result;
    }
    async likedComment(cid, uid) {
        let result = await this.LikedCommentModel.findOrCreate({
            where: {
                cid,
                uid
            }
        })
        let status = result[result.length - 1] ? true : false;
        if (!result[result.length - 1]) {
            result = await this.LikedCommentModel.destroy({
                where: {
                    cid,
                    uid
                }
            })
        }
        return status;
    }
    async unlikedComment(cid, uid) {
        let result = await this.UnlikedCommentModel.findOrCreate({
            where: {
                cid,
                uid
            }
        })
        let status = result[result.length - 1] ? true : false;
        if (!result[result.length - 1]) {
            result = await this.UnlikedCommentModel.destroy({
                where: {
                    cid,
                    uid
                }
            })
        }
        return status;
    }

}

module.exports = CommentService;