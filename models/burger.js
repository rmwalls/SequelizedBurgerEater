var Sequelize = require("sequelize");
// sequelize (lowercase) references the connection to the DB.
var sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("burgers", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1,50],
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  //  timestamps: false
  });
  return Burger;
};