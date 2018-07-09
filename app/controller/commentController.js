'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.session = ctx.session;
        this.commentService = ctx.service.commentService;        
    }
    async getAllComment() {
        const {limit,offset} = this.ctx.query;
        const response = await this.CommentService.getAllComment(limit,offset);
        this.ctx.body = response;
    }
    async createComment() {

    }
    async delComment() {
        const {cid} = this.ctx.params;
        const response = await this.CommentService.delComment(cid);
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
    async likeComment() {
        const {cid} = this.ctx.params;
        const response = await this.commentService.likeComment(cid);
        this.ctx.body = response;
    }
    async unlikeComment() {
        const {cid} = this.ctx.params;
        const response = await this.commentService.unlikeComment(cid);
        this.ctx.body = response;
    }

}

module.exports = CommentController;