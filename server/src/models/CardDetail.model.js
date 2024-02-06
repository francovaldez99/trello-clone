const { sequelize } = require("../config/dbConfig");
const {DataTypes} =require("sequelize");

const CardDetail =sequelize.define("CardDetail",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
        unique:true,
        
      },
      content:{
        type:DataTypes.TEXT
    }
})

module.exports=CardDetail;
