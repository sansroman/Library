'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   const {
    INTEGER,
    DATE
  } = Sequelize;
    await queryInterface.createTable('UnlikedCommunityComment', {
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
      cid: {
        type: INTEGER,
        references: {
          model: 'CommunityComment',
          key: 'id'
        }
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('LikedCommunityComment', {
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
      cid: {
        type: INTEGER,
        references: {
          model: 'CommunityComment',
          key: 'id'
        }
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('LikedCommunityComment', {
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
      cid: {
        type: INTEGER,
        references: {
          model: 'CommunityComment',
          key: 'id'
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
    await queryInterface.dropTable('UnlikedCommunityComment');
    await queryInterface.dropTable('LikedCommunityComment')
  }
};