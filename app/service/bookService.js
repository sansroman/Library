<<<<<<< HEAD
'use strict';

const Service = require('egg').Service;
const {
    ROLE_ADMAIN,
    ROLE_CUSTOMER
} = require('../config/role');

class BookService extends Service {
    constructor(ctx) {
        spuer(ctx)
        this.session = ctx.session;
        this.BookModel = ctx.model.BookModel;
        this.ResponseCode = ctx.response.ResponseCode;
        this.ServerResponse = ctx.response.ServerResponse;
        this.encryption = ctx.encryption;
    }
    async getRecommend() {}
    async getBookList() {}
    async addBook() {}
    async searchUser() {}
    async updateBook() {}
    async deleteBook() {}
    async getCategory() {}
    async addCategory() {}
    async getBookDetail() {}

}

module.exports = UserServiceService;
=======
'use strict';

const Service = require('egg').Service;

class BookService extends Service {
    constructor(ctx) {
        super(ctx)
    }

    async getBookList() {

    }
    async getRankList() {

    }
    async getBookByID() {

    }
    async createChapter() {

    }
    async seachBook() {

    }
    async bookRecommend() {

    }
    async addBook() {

    }
    async modifyBook() {

    }
    async delBook() {

    }
    async geChapterByID() {

    }
    async delChapter() {

    }
    async modifyChapter() {

    }

}

module.exports = BookService;
>>>>>>> 2178a86b8366851964f84a408f97e44fac6d09c4
