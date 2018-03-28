module.exports = app => {
  const { INTEGER, STRING, DATE, UUID, UUIDV4 } = app.Sequelize;
  const UserModel = app.model.define('user', {
    id: {
      type: INTEGER(20),
      allowNull: false,
      primaryKey: true,
    },
    bookName: {
      type: STRING(50),
      allowNull: false,
      unique: true,
    },
    category: {
      type: STRING(50),
      allowNull: false,
    },
    borrower: {
      type: UUID,
      allowNull: true,
    },
    borrowTime: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    revertTime: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  }, {
    timestamps: false,
    tablseName: 'user',
  });

  UserModel.beforeBulkUpdate(user => {
    user.attributes.updateTime = new Date();
    return user;
  });


  return UserModel;
};