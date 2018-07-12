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
        cover:{
            type:STRING(200),
            allowNull:true
        },
        name:{
            type:STRING(20),
            allowNull:false
        },
        company:{
            type:STRING(200),
            allowNull:false
        },
        author:{
            type:STRING(50),
            allowNull:false
        },
        blurb:{
            type:STRING(200),
        },
        pdate:{
            type:STRING(30)
        },
        position:{
            type: STRING(50),
            allowNull: true
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
        BookModel.belongsToMany(app.model.User,{through:'BookShelfs',onDelete: 'cascade',as:'collection'});
        BookModel.belongsToMany(app.model.User,{through:'RecentBook',foreignKey:'bid',onDelete: 'cascade',as:'recent'});
        BookModel.hasMany(app.model.Chapter,{foreignKey:'bid',as:'Chapter',onDelete: 'cascade'});
        BookModel.belongsTo(app.model.Category, { foreignKey: 'cid' })
        
    };
    return BookModel;
}