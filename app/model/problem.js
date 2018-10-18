// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING
    } = app.Sequelize;
    const ProblemModel = app.model.define('Problem', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        uid: {
            type: INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        name:{
          type: STRING(50),
          allowNull: false,
          default: 'guest'
        },
        email:{
          type: STRING(50),
        },
        content: {
          type: STRING(10000),
          allowNull: false,
        }
    }, {
        createAt: 'created_at',
        updateAt: 'updated_at',
        timestamps: true,
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return ProblemModel;
};
