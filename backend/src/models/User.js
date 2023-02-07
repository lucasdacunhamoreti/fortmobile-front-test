const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      cpf: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      timestamps: false,
      tableName: 'users'
    });
  
    return User;
  };
  
  module.exports = UserModel;