const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const products = sequelize.define("Porduct", {
    idshop:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nameproduct: {
        type: DataTypes.STRING,
         allowNull: false,
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    detail:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull:false,
    }
 
});

module.exports = products;
