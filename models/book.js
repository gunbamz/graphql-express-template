export default (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
  });

  Book.associate = (models) => {
    // many to many with book
    Book.belongsToMany(models.Author, {
      through: {
        model: models.BookAuthor,
      },
      foreignKey: 'bookId',
    });
  };

  return Book;
};
