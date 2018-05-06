'use strict';
module.exports = {
  up:async function (queryInterface, Sequelize) {
    const {DOUBLE,STRING,INEGER,STRING,ARRAY} = Sequelize;
    await queryInterface.createTable('shelf',{});
    await queryInterface.createTable('book',{});    
    await queryInterface.createTable('comment',{});
    await queryInterface.createTable('category',{});
    await queryInterface.createTable('chapter',{});
    await queryInterface.createTable('system',{});
    await queryInterface.createTable('record',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid:{
        type: UUID,
        references:{
          model:'user',
          key:'id',
        },
      },
      bookid:{
        type: UUID,
        references:{
          model:'book',
          key:'id',
        },
      },
      percent:DOUBLE,
      created_at: DATE,
      updated_at: DATE
    });
    await queryInterface.createTable('trend',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid:{
        type: UUID,
        references:{
          model:'user',
          key:'id',
        },
      },
      bookid:{
        type: UUID,
        references:{
          model:'book',
          key:'id',
        },
      },
      title:{
        type:STRING(100),
        allowNull: false
      },
      context:{
        type:STRING,
        allowNull: false
      },
      created_at: DATE,
    });
    await queryInterface.createTable('user',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username:{
        type:STRING(30),
        allowNull: false
      },
      password:{
        type:STRING(30),
        allowNull: false
      },
      email:STRING(30),
      reward:{
        type:INEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tatolTime:{
        type:INEGER,
        allowNull: false,
        defaultValue: 0,
      },
      avatar:{
        type:STRING,
      },
      shelfs:{
        type:ARRAY({
          type:INEGER,
          references:{
            model:'shelf',
            key:'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          allowNull:false
        })

      },
      created_at: DATE,
      updated_at: DATE
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
