// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const ChapterModel = app.model.define('Chapter', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type:STRING(100),
            allowNull:false
        },
        index:{
            type:INTEGER,
            allowNull:false
        },
        content:{
            type:STRING(10000),
            allowNull:false
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
    ChapterModel.associate = function() {
        ChapterModel.belongsTo(app.model.Book, { foreignKey: 'bid' });
    };
    return ChapterModel;
};