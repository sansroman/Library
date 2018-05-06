module.exports = app => {
  const { INTEGER, STRING, DATE, UUID, UUIDV4 } = app.Sequelize;
  const BookModel = app.model.define('book', {
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
    }
  }, {
    timestamps: false,
    tablseName: 'book',
  });



  return BookModel;
};