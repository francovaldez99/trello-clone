const {Router}=require("express");
const { newCardController, updateCoverCardController, deleteCardController, updateCardNameController } = require("../controllers/CardController");

const cardRouter=Router()

cardRouter.post("/new-card/:idCol",newCardController)
cardRouter.put("/update-cover/:CardId",updateCoverCardController)
cardRouter.put(`/update-card-name/:CardId`,updateCardNameController)
cardRouter.put(`/delete-card/:CardId`,deleteCardController)


/**export const fetchUpdateCardName=(CardId,data)=>axios.put(`/cards/update-card-name/${CardId}`,data)

export const fetchdeleteCard=(CardId)=>axios.delete(`/cards/delete-card/${CardId}`)
 */
module.exports=cardRouter
