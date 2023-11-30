module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      }
    });
  
    Book.associate = (models) => {
      Book.hasMany(models.UserBook, {
        foreignKey: 'book_id'
      });
    };
  
    return Book;
  };
  