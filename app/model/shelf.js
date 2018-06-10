// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const ShelfModel = app.model.define('Shelf', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: STRING(50),
            allowNull: false,
            defaultValue: '未命名书架',            
        },
        avatar: {
            type: STRING(200),
            allowNull: true,
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
    ShelfModel.associate = function() {
        ShelfModel.belongsTo(app.model.User, { foreignKey: 'uid' });
        ShelfModel.belongsToMany(app.model.Book,{through:app.model.BookShelfs,foreignKey:'sid'});
    }
    return ShelfModel;
};