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
        this.BookModel = ctx.model.Book;
        this.CategoryModel = ctx.model.Category;
        this.UserModel = ctx.model.User;

    }

    async getBookList(limit, offset,cid) {
        let condition = cid? {cid:parseInt(cid)}:null;
        const result = await this.BookModel.findAndCountAll({
            include:[{model:this.CategoryModel}],
            where:condition,
            limit,
            offset
        });
        return result;
    }
    async getRankList() {

    }
    async getBookByID(uid,bid) {
        const result = await this.BookModel.findOne({
            include:[{model:this.UserModel,as:'collection'}],
            where: {
                id: bid
            }
        });
        let tmp = result.get({plain: true })
        let collectionUser = tmp.collection.map((ele) => {
                return ele.id;
        })
        tmp.collection = {
            count:collectionUser.length,
            status: collectionUser.indexOf(uid) == -1?false:true
        }
        return tmp;
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
>>>>>>> 2178a86b8366851964f84a408f97e44fac6d09c4
