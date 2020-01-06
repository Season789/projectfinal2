/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    IdUser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    AmountDue: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DateDue: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'user'
  });
};
