'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    constructor(ctx) {
        super(ctx)
        this.session = ctx.session;
        this.UserModel = ctx.model.User;
    }
    async register(email,password,avatar,name,signature){
        const data = await this.UserModel.createUser(email,password,avatar,name,signature);
        return data;
    }
    async getUserInfo(email){
        return await this.UserModel.findOnebyEmail(email);
    }
    async updateUserInfo(email,name,avatar,signature){
        return await this.UserModel.updateUserInfo(email,name,avatar,signature);
    }
    async changePwd(email,password){
        return await this.UserModel.changePwd(email,password);
    }

}

module.exports = UserService;