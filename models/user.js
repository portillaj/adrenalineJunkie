module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    last_name: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [7]
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [4]
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true
    }
  });
  return User;
};