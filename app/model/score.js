// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        INTEGER,
        ENUM
    } = app.Sequelize;
    const ScoreModel = app.model.define('Score', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type:{
          type: ENUM('LOGIN', 'SIGNIN', 'CUSTOM'),
          allowNull: false,
          default: 'LOGIN'
        },
        value:{
          type: INTEGER,
          allowNull: false
        },
    }, {
        createAt: 'created_at',
        updateAt: 'updated_at',
        timestamps: true,
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });

    ScoreModel.associate = function() {
      ScoreModel.belongsTo(app.model.User, { foreignKey: 'uid',onDelete: 'cascade'});
    }

    return ScoreModel;
};
