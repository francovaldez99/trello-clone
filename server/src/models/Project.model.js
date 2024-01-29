const {DataTypes}=require("sequelize")
const { sequelize } = require("../config/dbConfig");


const Project=sequelize.define("Project",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
        
    },
    projectName:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})
module.exports=Project