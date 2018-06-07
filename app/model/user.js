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
        UserModel.hasMany(app.model.CommentModel,{foreignKey:'uid',targetKey:'id',as:'comments'});
        UserModel.hasMany(app.model.ShelfModel,{foreignKey:'uid',targetKey:'id',as:'shelfs'});
    
      };
    return UserModel;
};