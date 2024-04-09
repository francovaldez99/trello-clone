const jwt=require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config/env");
const User = require("../models/User.model");

const authToken=(req,res,next)=>{
  // const token = req.cookies.token;
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if(!token){
    req.user=null

 res.status(401).json({message:"Unauthorized: No token provided"})
  }else{
  
jwt.verify(token,TOKEN_SECRET,(err,decoded)=>{
            

                if(err){
            
          req.user=null
                  
                  return  res.status(401).json({message:"Unauthorized"})
                }
           
                User.findByPk(decoded.id)
                .then((result)=>{

                  if(result){

                    req.user= {
                      id: result.dataValues.id,
                      email: result.dataValues.email,
                      firstname: result.dataValues.firstname,
                      lastname: result.dataValues.lastname,
                    }
                    next()
                  }else{
                  return  res.status(401).json({message:"Unauthorized"})

                  }
                })
                .catch((error)=>{
                  // console.log(error);
          req.user=null

                  return  res.status(401).json({message:"Unauthorized"})

                })
                

        })

  }


}

module.exports=authToken