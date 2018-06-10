// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const CategoryModel = app.model.define('Category', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: STRING(50),
            allowNull: false,
            defaultValue: '未命名分类',            
        },
        type: {
            type: STRING(50),
            allowNull: false,
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
    });
    return CategoryModel;
};