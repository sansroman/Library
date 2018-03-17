'use strict';

const Service = require('egg').Service;
const { ROLE_ADMAIN, ROLE_CUSTOMER } = require('../config/role');

class UserServiceService extends Service {
    constructor(ctx) {
        spuer(ctx)
        this.session = ctx.session;
        this.UserModel = ctx.model.UserModel;
        this.ResponseCode = ctx.response.ResponseCode;
        this.ServerResponse = ctx.response.ServerResponse;
        this.encryption = ctx.encryption;
        console.log(ROLE_ADMAIN);
    }
    /**
     * 
     * 
     * @param {String} field 
     * @param {String} value 
     * @returns  {Promise.<boolean>}
     * @memberof UserServiceService
     */
    async _checkExistColByField(field, value) {
        const data = await this.UserModel.findOne({
            attributes: [field],
            where: {
                [field]: value
            },
        });
        return !!data;
    }

    async login(username, password) {
        // 用户名存在报错
        const validResponse = await this.checkValid(USERNAME, username);
        if (validResponse.isSuccess()) return validResponse;

        // 检查密码是否正确
        const user = await this.UserModel.findOne({
            attributes: ['id', 'username', 'email', 'phone', 'role'],
            where: {
                username,
                password: this.encryption(password),
            },
        });

        if (!user) return this.ServerResponse.createByErrorMsg('密码错误');

        const userInfo = user.toJSON()
        let redirectTo
        if (userInfo.role === ROLE_ADMAIN) redirectTo = '/'
        else redirectTo = ''

        return this.ServerResponse.createBySuccessMsgAndData('登录成功', { ...userInfo,redirectTo});
    }

    async checkVaild(value, type) {
        if (type.trim()) {
            if (USERNAME === type) {
                return await this._checkExistColByField(USERNAME, value) ?
                    this.ServerResponse.createByErrorMsg('用户名已存在') :
                    this.ServerResponse.createBySuccessMsg('用户名不存在');
            }
            if (EMAIL === type) {
                return await this._checkExistColByField(EMAIL, value) ?
                    this.ServerResponse.createByErrorMsg('邮箱已存在') :
                    this.ServerResponse.createBySuccessMsg('邮箱不存在');
            }
            return this.ServerResponse.createByErrorMsg('参数错误');
        }

    }
    
    
    async register(user){}
    
    async selctQuestion(username){}

    async resetPassword(user,oldPassword,newPassword){}
    
    async checkAnswer(username,question,answer){}

    async forgetRestPassword(username,newPassword,token){}

    async updateUserInfo(userInfo,user){}

    async getUserInfo(userId){}

    async checkAdminRole(user){}

}

module.exports = UserServiceService;