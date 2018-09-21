'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.session = ctx.session;
        this.commentService = ctx.service.commentService;        
    }
    async getAllComment() {
        let {limit = 10,offset = 0} = this.ctx.query;
        limit = parseInt(limit);
        offset = parseInt(offset) * limit;
        const {bid} = this.ctx.params;
        const uid = this.session.user?this.session.user.uid:0;
        const response = await this.commentService.getAllComment(bid,uid,limit,offset);
        this.ctx.body = response;
    }
    async createComment() {
        this.ctx.validate({
            content: { type: 'string'},
        });
        const {uid} = this.session.user;
        const {bid} = this.ctx.params;
        const {content} = this.ctx.request.body;
        const response = await this.commentService.createComment(bid,uid,content);
        this.ctx.body = response;
    }
    async delComment() {
        const {cid} = this.ctx.params;
        const response = await this.commentService.delComment(cid);
        this.ctx.body = response;
    }
    async modifyComment() {
        // const {cid} = this.ctx.params;
        // const response = await this.commentService.modifyComment(cid);
        // this.ctx.body = response;
    }
    async getCommentByID() {
        const {cid} = this.ctx.params;
        const response = await this.commentService.getCommentByID(cid);
        this.ctx.body = response;
    }
    async likedComment() {
        const {cid} = this.ctx.params;
        const {uid} = this.session.user;
        const response = await this.commentService.likedComment(cid,uid);
        this.ctx.body = response;
    }
    async unlikedComment() {
        const {cid} = this.ctx.params;
        const {uid} = this.session.user;
        const response = await this.commentService.unlikedComment(cid,uid);
        this.ctx.body = response;
    }

}

module.exports = CommentController;