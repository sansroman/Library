'use strict';
const path = require('path')
module.exports = appInfo => {
const config = exports = {
  sequelize: {
    dialect: 'mysql',
    database: 'library',
    host: 'localhost',
    port: '3306',
    username: 'library',
    password: '123456',
    timezone: '+08:00'
  },
  security: {
    csrf: {
      enable: false,
    },

  },

  view : {
    mapping: {
      '.nj': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks'
  },
  cors: {
    origin: 'http://localhostne:8081',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  },
  session: {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  }
  
};

  config.keys = appInfo.name + '_1523509508086_5913';

// add your config here
  config.middleware = [];
  config.static = {
    prefix: '/'
  }
  return config;
};