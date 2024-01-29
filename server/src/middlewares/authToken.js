const jwt=require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config/env");
const authToken=(req,res,next)=>{
  const token = req.cookies.token;

  if(!token){
 res.status(401).json({message:"Unauthorized: No token provided"})
  }else{
  
jwt.verify(token,TOKEN_SECRET,(err,decoded)=>{
            
                req.user=decoded

                if(err){
                  console.log("🚀 ~ file: authToken.js:15 ~ jwt.verify ~ err:", err)
                  
                  return  res.status(401).json({message:"Unauthorized"})
                }
        })

  }

next()
}

module.exports=authToken