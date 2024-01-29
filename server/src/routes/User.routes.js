const {Router}=require("express");
const { registerController, loginController, verifyToken } = require("../controllers/UserController");
const UserRouter=Router()

UserRouter.post("/register",registerController)
UserRouter.post("/login",loginController)
UserRouter.get("/verify-token",verifyToken)


module.exports=UserRouter