const {DataTypes}=require("sequelize");
const {sequelize} = require("../config/dbConfig")

const Card= sequelize.define("Card",{
 id:{
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey:true,
  allowNull:false
},
CardName:{
  type:DataTypes.STRING,
  allowNull:false,  
},
orderCard:{
    type:DataTypes.INTEGER,
    allowNull:false,
}
})

module.exports=Card