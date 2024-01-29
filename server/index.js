const app =require("./src/app");
const {dbConnect,sequelize} = require("./src/config/dbConfig");
const defineAssociations = require("./src/models/Associations");

console.log(sequelize.models);
app.listen(3001,async()=>{
    console.log("runing in port 3001 ");
    defineAssociations()
    await dbConnect()
    
})