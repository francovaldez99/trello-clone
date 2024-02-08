const Board=require("../models/Board.model")
const Card = require("../models/Card.model");
const CardDetail = require("../models/CardDetail.model");
const Column = require("../models/Column.model")


const newCardController=async(req,res)=>{
try {
    const {idCol}=req.params;
    const {CardName,orderCard}=req.body;
    const CardDetailNew=await  CardDetail.create({
    })
    const newCard=await Card.create({
        CardName,
        orderCard,
        ColumnId:idCol,
        CardDetailId:CardDetailNew.id

    });


    res.status(200).json(newCard)



} catch (error) {
console.log("🚀 ~ newColController ~ error:", error)

        
        res.status(500).json({message:error.message,...error})
}
}

const updateCoverCardController =async(req,res)=>{
    try {
        const {CardId}=req.params;
        const {coverCard}=req.body;
        const findCard= await Card.findByPk(CardId)
            findCard.coverCard = coverCard;
            await findCard.save()
            console.log("🚀 ~ updateCoverCardController ~ findCard:", findCard)
            res.status(200).json(findCard.dataValues)

    } catch (error) {
        console.log("🚀 ~ updateCoverCardController ~ error:", error)
        res.status(500).json({message:error.message,...error})

        
    }
            
}

const updateCardNameController=async(req,res)=>{

    try {
        const {CardId}=req.params;
        const {CardName}=req.body;
        const findCard= await Card.findByPk(CardId);
        findCard.CardName=CardName;
        await findCard.save()
        console.log(findCard);
        res.status(200).json(findCard.dataValues)
    } catch (error) {
        res.status(500).json({message:error.message,...error})
        
    }
}
const deleteCardController=async(req,res)=>{
try {
    const {CardId}=req.params;
    const findCard= await Card.findByPk(CardId);
    
    CardDetail.destroy({
        where:{
         id:findCard.dataValues.CardDetailId   
        }
    })
    Card.destroy({
        where:{
            id:CardId
        }
    })

    res.status(200).json({CardId})
} catch (error) {
    res.status(500).json({message:error.message,...error})
    
}
}
module.exports={
    newCardController,
    updateCoverCardController,
    updateCardNameController,
    deleteCardController
}