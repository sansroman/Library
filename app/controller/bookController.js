'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.bookService = ctx.service.bookService;
  }
  async getBookList() {
    let {limit = 10,offset = 0,cid} = this.ctx.query;
    limit = parseInt(limit);
    offset = parseInt(offset) * limit;
    const response = await this.bookService.getBookList(limit,offset,cid);
    this.ctx.body = response;
  }
  async getRankList() {

  }
  async getBookByID() {
    const bid = this.ctx.params.bid;
    const uid = this.session.user?this.session.user.uid:0;
    const response = await this.bookService.getBookByID(uid,bid);
    this.ctx.body = response;
    
  }
  async createChapter() {

  }
  async searchBook() {
    let {limit = 10,offset = 0,bookname} = this.ctx.query;
    limit = parseInt(limit);
    offset = parseInt(offset) * limit;
    const response = await this.bookService.searchBook(bookname,limit,offset);
    this.ctx.body = response;
  }
  async recommend() {
    const {num} = this.ctx.query;
    const response = await this.bookService.recommend(num);
    this.ctx.body = response;
  }
  async addBook() {
    const {booklist} = this.ctx.request.body;
    const response = await this.bookService.addBook(booklist);
    this.ctx.body = response;
  }
  async addChapter(){

  }
  async modifyBook() {
    const bid = this.ctx.params.bid;
    const {cover,name,author,company,blurb,pdate} = this.ctx.request.body;
    const response = await this.bookService.modifyBook(bid,cover,name,author,company,blurb,pdate);
    this.ctx.body = response;
  }
  async changeType() {
    const bid = this.ctx.params.bid;
    const {cid} = this.ctx.request.body;
    const response = await this.bookService.changeType(bid,cid);
    this.ctx.body = response;
  }
  async delBook() {
    const bid = this.ctx.params.bid;
    const response = await this.bookService.delBook(bid);
    this.ctx.body = response;
  }
  async geChapterByID() {

  }
  async delChapter() {

  }
  async modifyChapter() {

  }
}

module.exports = BookController;