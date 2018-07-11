// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const UserModel = app.model.define('User', 
    {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        account: {
            type: STRING(50),
            allowNull: false,
            unique: true            
        },
        password: {
            type: STRING(50),
            allowNull: false,
        },
        avatar: {
            type: STRING(200),
            allowNull: true,
        },
        nickname: {
            type: STRING(20),
            allowNull: false,
            defaultValue: 'undefined',
        },
        signature: {
            type: STRING(100),
            allowNull: true,
            defaultValue: '这个人很懒，没有签名',
        },
        integral:{
            type:INTEGER,
            allowNull: false,
            defaultValue:0
        },
        readingTime:{
            type:INTEGER,
            allowNull: false,
            defaultValue:0
        },
        role: { //
            type: INTEGER,
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
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    UserModel.associate = function() {
        UserModel.hasMany(app.model.Comment,{foreignKey:'aid',as:'author'});
        UserModel.belongsToMany(app.model.Comment,{through:'LikedComment',foreignKey:'uid',onDelete: 'cascade' ,as:'likedUser'});
        UserModel.belongsToMany(app.model.Comment,{through:'UnlikedComment',foreignKey:'uid',as:'unlikedUsers'});        
        UserModel.belongsToMany(app.model.Book,{through:app.model.BookShelfs,foreignKey:'uid',targetKey:'id',as:'collection',onDelete: 'cascade'});
        UserModel.belongsToMany(app.model.Book,{through:app.model.RecentBook,foreignKey:'uid',onDelete: 'cascade'});
    
    };
    return UserModel;
};