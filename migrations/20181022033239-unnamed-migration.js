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
    DATE,
    ENUM
  } = Sequelize;
    await queryInterface.createTable('Score', {
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
      type:{
        type:  ENUM('LOGIN', 'SIGNIN', 'CUSTOM'),
        allowNull:false,
        default: 'LOGIN'
      },
      value:{
        type: INTEGER,
        allowNull: false
      },
      created_at: DATE,
      updated_at: DATE,
    })
  },

  async down(queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('Score')
  }
};
