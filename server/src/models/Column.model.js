const {DataTypes}=require("sequelize");
const {sequelize} = require("../config/dbConfig")

const Column = sequelize.define("Column",{
 id:{
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey:true,
  allowNull:false
},
columnName:{
  type:DataTypes.STRING,
  allowNull:false,  
},
orderColumn:{
    type:DataTypes.INTEGER,
    allowNull:false,
}
})

module.exports=Column