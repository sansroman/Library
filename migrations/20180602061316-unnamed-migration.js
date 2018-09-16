'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const {
      STRING,
      INTEGER,
      DATE
    } = Sequelize;
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
      account: {
        type: STRING(50),
        allowNull: false,
        unique: true
      },
      password: {
        type: STRING(100),
        allowNull: false,
      },
      avatar: {
        type: STRING(200),
        allowNull: true,
      },
      nickname: {
        type: STRING(20),
        allowNull: false,
        defaultValue: 'undefined',
      },
      integral: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      readingTime: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.createTable('Category', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: STRING(50),
        allowNull: false,
        defaultValue: '未命名分类',
      },
      type: {
        type: STRING(50),
        allowNull: false,
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
      cover: {
        type: STRING(200),
        allowNull: true
      },
      name: {
        type: STRING(20),
        allowNull: false
      },
      company: {
        type: STRING(200),
        allowNull: false
      },
      author: {
        type: STRING(50),
        allowNull: false
      },
      blurb: {
        type: STRING(200),
      },
      pdate: {
        type: STRING(30)
      },
      position: {
        type: STRING(100),
        allowNull: true
      },
      cid: {
        type: INTEGER,
        references: {
          model: 'Category',
          key: 'id'
        }
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
      bid: {
        type: INTEGER,
        references: {
          model: 'Book',
          key: 'id'
        }
      },
      title: {
        type: STRING(100),
        allowNull: false
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
    await queryInterface.createTable('Community', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      aid: {
        type: INTEGER,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      title: {
        type: STRING(200),
        allowNull: false,
      },
      content: {
        type: STRING(20000),
        allowNull: false,
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('CommunityComment', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      aid: {
        type: INTEGER,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      community_id: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'Community',
          key: 'id'
        },
        comment: '书籍ID'
      },
      content: {
        type: STRING(2000),
        allowNull: false,
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
      aid: {
        type: INTEGER,
        references: {
          model: 'User',
          key: 'id'
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
      user_id: {
        type: INTEGER,
        references: {
          model: 'User',
          key: 'id'
        }
  
      },
      book_id: {
        type: INTEGER,
        references: {
          model: 'Book',
          key: 'id'
        }
  
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('RecentBook', {
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
      bid: {
        type: INTEGER,
        references: {
          model: 'Book',
          key: 'id'
        }
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('UnlikedComment', {
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
          model: 'Comment',
          key: 'id'
        }
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('LikedComment', {
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
          model: 'Comment',
          key: 'id'
        }
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('UnlikedCommunity', {
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
          model: 'Community',
          key: 'id'
        }
      },
      created_at: DATE,
      updated_at: DATE,
    })
    await queryInterface.createTable('LikedCommunity', {
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
          model: 'Community',
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
    await queryInterface.dropTable('UnlikedComment')
    await queryInterface.dropTable('LikedComment')
    await queryInterface.dropTable('UnlikedCommunity')
    await queryInterface.dropTable('LikedCommunity')
    await queryInterface.dropTable('CommunityComment')
    await queryInterface.dropTable('Community')
    await queryInterface.dropTable('BookShelfs');
    await queryInterface.dropTable('RecentBook');
    await queryInterface.dropTable('Comment');
    await queryInterface.dropTable('Chapter');
    await queryInterface.dropTable('Book');
    await queryInterface.dropTable('User');
    await queryInterface.dropTable('Category')

  }
};