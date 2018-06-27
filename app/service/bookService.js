'use strict';

const Service = require('egg').Service;

class BookService extends Service {
    constructor(ctx) {
        super(ctx)
        this.bookModel = ctx.model.Book;
    }

    async getBookList(limit,offset) {
        const result = await this.bookModel.findAll({
            attributes:['id','pdate','name','type'],
            limit,
            offset
          });
        return result;
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
    async addBook(booklist) {
        console.log(booklist);
        const result = this.bookModel.bulkCreate(booklist);
        return result;
    }
    async modifyBook() {

    }
    async delBook(bid) {
        const result = await this.bookModel.destroy({
            where:{id:bid}
          });
          return {
            error:true,
            data:result
          }
    }
    async geChapterByID() {

    }
    async delChapter() {

    }
    async modifyChapter() {

    }

}

module.exports = BookService;