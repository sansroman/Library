'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.session = ctx.session;
        this.BookModel = ctx.model.BookModel;
        this.BookService = ctx.service.bookservice;
        this.ResponseCode = ctx.response.ResponseCode;
        this.ServerResponse = ctx.response.ServerResponse;
    }

    async recommend() {

    }

    async getBook() {

    }

    async getBookList() {

    }

    async updateBook() {

    }

    async getBookDetail() {

    }
}

module.exports = UserController;