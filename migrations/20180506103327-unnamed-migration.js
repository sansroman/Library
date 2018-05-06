'use strict';
module.exports = {
  up:async function (queryInterface, Sequelize) {
    const {DOUBLE,STRING,INTEGER,ARRAY,DATE,UUID,UUIDV4} = Sequelize;
    await queryInterface.createTable('shelf',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name:{
        type:STRING(20),
        allowNull: false
      },
      created_at: DATE,
    });
    await queryInterface.createTable('book',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      author:{
        type:STRING(20),
        allowNull: false
      },
      cover:STRING(200),
      name:{
        type:STRING(50),
        allowNull: false
      },
      profile:{
        type:STRING(500),
        allowNull: false,
        defaultValue: "暂无简介",
      },
      chapters:{
        type:ARRAY({
          type:UUID,
          references:{
            model:'chapter',
            key:'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          allowNull:false
        })

      },
      publication_at:DATE,
      created_at: DATE,
      
    });  
    await queryInterface.createTable('user',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
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
        type:INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tatolTime:{
        type:INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      avatar:{
        type:STRING,
      },
      shelfs:{
        type:ARRAY({
          type:UUID,
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
    await queryInterface.createTable('comment',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      userid:{
        type: UUID,
        references:{
          model:'user',
          key:'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE          
        },
      },
      liked:{
        type:INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      context:{
        type:STRING,
        allowNull: false
      },
      subComments:{
        type:ARRAY({
          type:UUID,
          references:{
            model:'comment',
            key:'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          allowNull:false
        })
      },
      created_at: DATE,

    });
    await queryInterface.createTable('category',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name:{
        type:STRING(50),
        allowNull: false
      },
      subCategorys:{
        type:ARRAY({
          type:UUID,
          references:{
            model:'category',
            key:'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          allowNull:false
        })
      },
    });
    await queryInterface.createTable('chapter',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title:{
        type:STRING(100),
        allowNull: false
      },
      context:{
        type:STRING,
        allowNull: false
      },
    });
    await queryInterface.createTable('system',{
      notify:{
        type:STRING,
        allowNull: false
      },
    });
    await queryInterface.createTable('record',{
      id:{
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
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
      comments:{
        type:ARRAY({
          type:UUID,
          references:{
            model:'comment',
            key:'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          allowNull:false
        })
      },
      created_at: DATE,
    });

  },

  down:async function (queryInterface, Sequelize) {
    await queryInterface.dropTable('system');
    await queryInterface.dropTable('trend');
    await queryInterface.dropTable('record');
    await queryInterface.dropTable('shelf');
    await queryInterface.dropTable('book');
    await queryInterface.dropTable('comment');
    await queryInterface.dropTable('category');
    await queryInterface.dropTable('chapter');
    await queryInterface.dropTable('user');
  }
};
