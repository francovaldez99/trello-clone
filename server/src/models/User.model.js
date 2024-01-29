const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
      unique:true,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false ,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
// true
module.exports = User;
