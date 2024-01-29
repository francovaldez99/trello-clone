const {Strategy}=require("passport-local")
const User=require("../../models/User.model")
const bcrypt = require("bcrypt")

const LocalStrategy= new Strategy(async(username,password,done)=>{

    try {
        const findUser=await User.findOne({where:{email:username}});
        
        if(!findUser){
            done("usuario no encontrado",false)
        }
        const isMatch= await bcrypt.compare(password,findUser.dataValues.password)


        if(!isMatch){
            done("contraseña incorrecta",false)
        }else{
            done(null,findUser.dataValues)
        }
    } catch (error) {
        done(error,false)
    }

});

module.exports=LocalStrategy;
