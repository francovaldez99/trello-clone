const {Router}=require("express");
const { registerController, loginController, verifyToken } = require("../controllers/UserController");
const UserRouter=Router()

UserRouter.post("/register",registerController)
UserRouter.post("/login",loginController)
UserRouter.get("/verify-token",verifyToken)
UserRouter.post('/logout', (req, res) => {

    
    try {
        req.user = null;
        res.json({ message: 'Logout successful' });
        
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
  });

module.exports=UserRouter