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
    STRING,
    INTEGER,
    DATE
  } = Sequelize;
    await queryInterface.createTable('Problem', {
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
    await queryInterface.dropTable('Problem')
  }
};
