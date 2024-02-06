const {Router}=require("express");
const { newColController, updateCoverCardController } = require("../controllers/CardController");

const cardRouter=Router()

cardRouter.post("/new-card/:idCol",newColController)
cardRouter.put("/update-cover/:CardId",updateCoverCardController)

module.exports=cardRouter
