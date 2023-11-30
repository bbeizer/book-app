module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      hashed_password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    User.associate = (models) => {
      User.hasMany(models.UserBook, {
        foreignKey: 'user_id'
      });
    };
  
    return User;
  };
  