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
        const {options} = this.ctx.params;
        const response = await this.BookService.getRecommend(options);
        this.ctx.body = response;
    }

    async getBookList() {
        const {type,limit} = this.ctx.params;
        const response = await this.BookService.getBookList(type,order,limit);
        this.ctx.body = response;
    }

    async addBook() {
        const {bookname,category} = this.ctx.params;
        const response = await this.BookService.addBook(type,order,limit);
        this.ctx.body = response;
    }

    async searchBook() {
        const {bookname} = this.ctx.params;
        const response = await this.BookService.searchUser(bookname);
        this.ctx.body = response;
    }

    async updateBook() {
        const {bookid,category} = this.ctx.params;
        // 目前只能更改category
        const response = await this.BookService.updateBook(userid,category);
        this.ctx.body = response;

    }

    async deleteBook() {
        const {bookid} = this.ctx.params;
        const response = await this.BookService.deleteBook(bookid);
        this.ctx.body = response;
    }

    async getCategory() {
        const response = await this.BookService.getCategory();
        this.ctx.body = response;
    }

    async addCategory() {
        const {label,value} = this.ctx.request.body;
        const response = await this.BookService.addCategory();
        this.ctx.body = response;
    }

    async getBookDetail() {
        const {bookid} = this.ctx.params;
        const response = await this.BookService.getBookDetail(bookid);
        this.ctx.body = response;
    }
}

module.exports = UserController;