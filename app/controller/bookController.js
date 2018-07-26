'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
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

module.exports = BookController;
