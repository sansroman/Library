// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const CommunityModel = app.model.define('Community', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type:STRING(200),
            allowNull:false
        },
        content: {
            type: STRING(20000),
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
    CommunityModel.associate = function() {
        CommunityModel.belongsTo(app.model.User, { foreignKey: 'aid',onDelete: 'cascade',as:'author' });
        CommunityModel.belongsToMany(app.model.User, { through:'LikedCommunity',foreignKey: 'cid' ,onDelete: 'cascade',as:'likedUser'});
        CommunityModel.belongsToMany(app.model.User, { through:'UnlikedCommunity',foreignKey: 'cid',onDelete: 'cascade',as:'unlikedUser'});
        CommunityModel.hasMany(app.model.CommunityComment);
    };
    return CommunityModel;
};