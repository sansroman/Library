'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.bookService = ctx.service.bookService;
  }
  async getBookList() {
    const {limit = 10,offset = 0} = this.ctx.query;
    const response = await this.bookService.getBookList(limit,offset);
    this.ctx.body = response;
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
    const {booklist} = this.ctx.request.body;
    const response = this.bookService.addBook(booklist);
    this.ctx.body = response;
  }
  async addChapter(){

  }
  async modifyBook() {
    const bid = this.ctx.params.bid;
    const response = this.bookService.delBook(bid);
    this.ctx.body = response;
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