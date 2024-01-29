const {Router}=require("express");
const { newColController } = require("../controllers/CardController");

const cardRouter=Router()

cardRouter.post("/new-card/:idCol",newColController)


module.exports=cardRouter
