const express =require("express")
const indexRouter = require("./routes/index.routes")
const morgan = require("morgan")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
 const app = express()
const cors=require("cors")
const { CLIENT_URL } = require("./config/env")
 //middlewares
console.log(CLIENT_URL);
app.use(morgan("dev"))
app.use((req, res, next) => {
  console.log("Request Origin:", req.headers.origin);
  next();
})
app.use(cookieParser())
 app.use(cors({
    credentials:true,
    origin:CLIENT_URL,

    

   }))
 app.use(bodyParser.urlencoded({extended:false}))
 app.use(express.json())
 app.use(indexRouter)
module.exports=app

