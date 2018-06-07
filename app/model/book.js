// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const BookModel = app.model.define('Book', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type:{
            type:STRING(20),
            allowNull:true
        },
        name:{
            type:STRING(20),
            allowNull:false
        },
        PublishingCompany:{
            type:STRING(200),
            allowNull:false
        },
        PublishingPerson:{
            type:STRING(50),
            allowNull:false
        },
        views:{
            type:INTEGER,
            allowNull:false,
            defaultValue:0
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
    BookModel.associate = function() {
        BookModel.belongsToMany(app.model.ShelfModel,{through:'bookShelfs',as:'BookShelfs'});
        BookModel.hasMany(app.model.ChapterModel,{foreignKey:'bid',targetKey:'id',as:'Chapter'});
    };
    return BookModel;
};