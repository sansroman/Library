'use strict';

const Service = require('egg').Service;

class BookService extends Service {
    constructor(ctx) {
        super(ctx)
        this.BookModel = ctx.model.Book;
        this.CategoryModel = ctx.model.Category;
    }

    async getBookList(limit, offset) {
        const result = await this.BookModel.findAndCountAll({
            attributes: ['id', 'updated_at', 'name'],
            include:[{model:this.CategoryModel,attributes:['category','type']}],
            limit,
            offset
        });
        return result;
    }
    async getRankList() {

    }
    async getBookByID(bid) {
        const result = await this.BookModel.findOne({
            where: {
                id: bid
            }
        });
        return result;
    }
    async createChapter() {

    }
    async seachBook() {

    }
    async bookRecommend() {

    }
    async addBook(booklist) {
        console.log(booklist);
        const result = this.BookModel.bulkCreate(booklist);
        return result;
    }
    async modifyBook(bid, cover, name, author, company, blurb, pdate) {
        const result = await this.BookModel.update({
            cover,
            name,
            author,
            company,
            blurb,
            pdate
        }, {
            where: {
                id: bid
            }
        });
        return result;
    }
    async delBook(bid) {
        const result = await this.BookModel.destroy({
            where: {
                id: bid
            }
        });
        return {
            error: true,
            data: result
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