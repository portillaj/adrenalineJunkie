module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
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
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
    },
    dob: {
    	type: DataTypes.INTEGER,
        allowNull: false,
    	len: [1]
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
    }
  });
  return User;
};