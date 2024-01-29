const {  DataTypes } = require('sequelize');
const {sequelize} = require("../config/dbConfig")


const Board = sequelize.define('Board', {
  // Model attributes are defined here
 id:{
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey:true,
  allowNull:false
 },
 
  boardName: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  cover:{
    type:DataTypes.STRING,
    allowNull:false,

  },
  
  
  
});

// `sequelize.define` also returns the model
 // true
module.exports=Board