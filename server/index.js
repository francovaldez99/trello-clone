const app =require("./src/app");
const {dbConnect,sequelize} = require("./src/config/dbConfig");
const { PORT } = require("./src/config/env");
const defineAssociations = require("./src/models/Associations");


app.listen(PORT,async()=>{
    console.log(`running in port ${PORT}`);
    defineAssociations()
    await dbConnect()
    
})