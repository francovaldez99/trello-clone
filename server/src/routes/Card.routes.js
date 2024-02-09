const {Router}=require("express");
const { newCardController, updateCoverCardController, deleteCardController, updateCardNameController } = require("../controllers/CardController");

const cardRouter=Router()

cardRouter.post("/new-card/:idCol",newCardController)
cardRouter.put("/update-cover/:CardId",updateCoverCardController)
cardRouter.put(`/update-card-name/:CardId`,updateCardNameController)
cardRouter.delete(`/delete-card/:CardId`,deleteCardController)


module.exports=cardRouter
