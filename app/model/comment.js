// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const CommentModel = app.model.define('Comment', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: STRING(2000),
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
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    CommentModel.associate = function() {
        CommentModel.belongsTo(app.model.User, { foreignKey: 'aid',onDelete: 'cascade',as:'author' });
        CommentModel.belongsToMany(app.model.User, { through:'LikedComment',foreignKey: 'cid' ,onDelete: 'cascade',as:'likedUser'});
        CommentModel.belongsToMany(app.model.User, { through:'UnlikedComment',foreignKey: 'cid',onDelete: 'cascade',as:'unlikedUser'});
        CommentModel.belongsTo(app.model.Book, { foreignKey: 'bid',onDelete: 'cascade' }); 
              
    };
    return CommentModel;
};