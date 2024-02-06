const {Router}=require("express");
const { getCardDetailController, updateCardDetailController } = require("../controllers/CardDetailController");


const CardDetailRouter = Router();

CardDetailRouter.get("/:CardDetailId",getCardDetailController)
CardDetailRouter.put("/update/:CardDetailId",updateCardDetailController)

module.exports=CardDetailRouter;