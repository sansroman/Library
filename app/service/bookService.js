'use strict';

const Service = require('egg').Service;

class BookService extends Service {
    constructor(ctx) {
        super(ctx)
        this.BookModel = ctx.model.Book;
        this.CategoryModel = ctx.model.Category;
    }

    async getBookList(limit, offset,type) {
        let condition = type == undefined ? null:{where:{type}};
        const result = await this.BookModel.findAndCountAll({
            attributes: ['id', 'updated_at', 'name'],
            include:[{model:this.CategoryModel}],
            limit,
            offset,
            condition
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
    async searchBook(bookname,limit,offset) {
        const result = await this.BookModel.findAll({
            where:{name:{[this.app.Sequelize.Op.like]:`%${bookname}%`}},
            attributes: ['id', 'updated_at', 'name'],
            include:[{model:this.CategoryModel,attributes:['category','type']}],
            limit,
            offset
        });
        return result;
    }
    async recommend(num) {
        const result = await this.BookModel.findAll({
            order:['views'],
            include:[{model:this.CategoryModel,attributes:['category','type']}],            
            limit:parseInt(num)
        });
        return result;
    }
    async addBook(booklist) {
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
    async changeType(bid,cid){
        const result = await this.BookModel.update({
            cid
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