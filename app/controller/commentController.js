'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.session = ctx.session;
    }
    async getAllComment() {

    }
    async craeteComment() {

    }
    async delComment() {

    }
    async modifyComment() {

    }
    async getCommentByID() {

    }
    async likeComment() {

    }
    async unlikeComment() {

    }

}

module.exports = CommentController;