// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const CommunityCommentModel = app.model.define('CommunityComment', {
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
    CommunityCommentModel.associate = function() {
        CommunityCommentModel.belongsTo(app.model.User, { foreignKey: 'aid',onDelete: 'cascade',as:'author' });
        CommunityCommentModel.belongsToMany(app.model.User, { through:'LikedCommunityComment',foreignKey: 'ccid' ,onDelete: 'cascade',as:'likedUser'});
        CommunityCommentModel.belongsToMany(app.model.User, { through:'UnlikedCommunityComment',foreignKey: 'ccid',onDelete: 'cascade',as:'unlikedUser'});
        CommunityCommentModel.belongsTo(app.model.Community, { foreignKey: 'community_id',onDelete: 'cascade' }); 
              
    };
    return CommunityCommentModel;
};