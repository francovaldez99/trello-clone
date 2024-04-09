const {Router}=require("express");
const { registerController, loginController, verifyToken,logoutController } = require("../controllers/UserController");
const UserRouter=Router()

UserRouter.post("/register",registerController)
UserRouter.post("/login",loginController)
UserRouter.get("/verify-token",verifyToken)
UserRouter.post('/logout', logoutController);

module.exports=UserRouter