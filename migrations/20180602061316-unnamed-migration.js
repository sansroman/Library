'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
     const { STRING, INTEGER, DATE } = Sequelize;
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      // return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      */
    await queryInterface.createTable('User', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: STRING(50),
        allowNull: false,
      },
      password: {
        type: STRING(50),
        allowNull: false,
      },
      avatar: {
        type: STRING(200),
        allowNull: true,
      },
      name: {
        type: STRING(20),
        allowNull: false,
        defaultValue: 'undefined',
      },
      integral:{
        type:INTEGER,
        allowNull: false,
        defaultValue:0
      },
      readingTime:{
          type:INTEGER,
          allowNull: false,
          defaultValue:0
      },
      signature: {
        type: STRING(100),
        allowNull: true,
        defaultValue: 'undefined',
      },
      role: { //
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('Book', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: STRING(20),
        allowNull: true
      },
      name: {
        type: STRING(20),
        allowNull: false
      },
      PublishingCompany: {
        type: STRING(200),
        allowNull: false
      },
      PublishingPerson: {
        type: STRING(50),
        allowNull: false
      },
      views: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('Chapter', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      bid:{
        type:INTEGER,
        references:{
          model:'Book',
          key:'id'
        }
      },
      index: {
        type: INTEGER,
        allowNull: false
      },
      content: {
        type: STRING(10000),
        allowNull: false
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('Shelf', {
      id: {
        type: INTEGER(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      uid:{
        type:INTEGER,
        references:{
          model:'User',
          key:'id'
        }
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
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('Comment', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      uid:{
        type:INTEGER,
        references:{
          model:'User',
          key:'id'
        }
      },
      bid: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'Book',
          key: 'id'
        },
        comment: '书籍ID'
      },
      content: {
        type: STRING(2000),
        allowNull: false,
      },
      liked: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('BookShelfs', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      shelfId:{
        type:INTEGER,
        references:{
          model:'Shelf',
          key:'id'
        }
      },
      bookId:{
        type:INTEGER,
        references:{
          model:'Book',
          key:'id'
        }
      },
      created_at: DATE,
      updated_at: DATE,
    })
  },

  async down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('BookShelfs');
    await queryInterface.dropTable('Comment');
    await queryInterface.dropTable('Shelf');
    await queryInterface.dropTable('Chapter');
    await queryInterface.dropTable('Book');
    await queryInterface.dropTable('User');
  }
};