// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const UserModel = app.model.define('User', {
        id: {
            type: INTEGER(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: STRING(50),
            allowNull: false,
        },
        password: {
            type: STRING(50),
            allowNull: false,
        },
        avatar: {
            type: STRING(200),
            allowNull: true,
        },
        name: {
            type: STRING(20),
            allowNull: false,
            defaultValue: 'undefined',
        },
        signature: {
            type: STRING(100),
            allowNull: true,
            defaultValue: 'undefined',
        },
        role: { //
            type: INTEGER(5),
            allowNull: false,
            defaultValue: 1,
        },
        created_at: {
            type: DATE,
            allowNull: true,
        },
        updated_at: {
            type: DATE,
            allowNull: true,
        },

    }, {
        createAt: 'created_at',
        updateAt: 'updated_at',
        timestamps: true,
        // freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    UserModel.createUser = async function (email, password, avatar, name, signature) {
        return await this.findOrCreate({
            where: {
                email
            },
            defaults: {
                password,
                avatar,
                name,
                signature
            }
        })
    }
    UserModel.findOnebyEmail = async function (email) {
        return await this.findOne({
            where: {
                email
            }
        })
    }

    UserModel.updateUserInfo = async function (email,name,avatar,signature) {
        return await this.update({
            email,
            avatar,
            name,
            signature
        }, {

            where: {
                email
            }
        })
    }
    UserModel.changePwd = async function (email,password) {
        return await this.update({
            password
        }, {

            where: {
                email
            }
        })
    }
    UserModel.associate = function() {
        UserModel.hasMany(app.model.Shelf);
    }
    return UserModel;
};