const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Seller = sequelize.define("Seller", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IDCard:{
      type: DataTypes.INTEGER,
      allowNull: false,

  }
});

module.exports = Seller;
