'use strict';

const Service = require('egg').Service;

class BookService extends Service {
    constructor(ctx) {
        super(ctx)
        this.BookModel = ctx.model.Book;
        this.CategoryModel = ctx.model.Category;
        this.UserModel = ctx.model.User;
        this.ChapterModel = ctx.model.Chapter;

    }

    async getBookList(limit, offset, cid) {
        let condition = cid ? {
            cid: parseInt(cid)
        } : null;
        const result = await this.BookModel.findAndCountAll({
            include: [{
                model: this.CategoryModel
            }],
            where: condition,
            limit,
            offset
        });
        return result;
    }
    async getRankList() {

    }
    async getBookByID(uid, bid) {
        const result = await this.BookModel.findOne({
            include: [{
                model: this.UserModel,
                as: 'collection'
            }],
            where: {
                id: bid
            }
        });
        let tmp = result.get({
            plain: true
        })
        let collectionUser = tmp.collection.map((ele) => {
            return ele.id;
        })
        tmp.collection = {
            count: collectionUser.length,
            status: collectionUser.indexOf(uid) == -1 ? false : true
        }
        return tmp;
    }

    async searchBook(bookname, limit, offset) {
        const result = await this.BookModel.findAll({
            where: {
                name: {
                    [this.app.Sequelize.Op.like]: `%${bookname}%`
                }
            },
            attributes: ['id', 'updated_at', 'name'],
            include: [{
                model: this.CategoryModel,
                attributes: ['category', 'type']
            }],
            limit,
            offset
        });
        return result;
    }
    async recommend(num) {
        const result = await this.BookModel.findAll({
            order: ['views'],
            include: [{
                model: this.CategoryModel,
                attributes: ['category', 'type']
            }],
            limit: parseInt(num)
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
    async changeType(bid, cid) {
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
    async createChapter(bid, title, index, content) {
        const result = await this.ChapterModel.findOrCreate({
            where: {
                bid,
                index
            },
            defaults: {
                title,
                content
            },
        });

        if (result[result.length - 1]) {
            return {
                error: false,
                data: '创建成功',
            };
        }
        return {
            error: true,
            data: '已存在此章节',
        };
    }
    async getAllChapter(bid, limit, offset) {
        const result = await this.ChapterModel.findAndCountAll({
            attributes:['id','index','title'],
            where: {
                bid
            },
            limit,
            offset
        });
        return result;
    }
    async delChapter(bid, index) {
        const result = await this.ChapterModel.destroy({
            where: {
                bid,
                index: {
                    [this.app.Sequelize.Op.gte]: index
                }
            }
        })
    }
    async geChapterByID(chapterID) {
        const result = await this.ChapterModel.findOne({where:{id:chapterID}});
        return result;
    }
    async modifyChapter(chapterID, title, content) {
        const result = await this.ChapterModel.update({
            title,
            content
        }, {
            where: {
                id: chapterID
            }
        });
        return result;
    }

}

module.exports = BookService;