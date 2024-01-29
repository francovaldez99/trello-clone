const Board=require("../models/Board.model")
const Card = require("../models/Card.model")
const Column = require("../models/Column.model")


const newColController=async(req,res)=>{
try {
    const {idCol}=req.params;
    const {CardName,orderCard}=req.body;
    const newCol=await Card.create({
        CardName,
        orderCard,
        ColumnId:idCol

    });

    res.status(200).json(newCol)



} catch (error) {
console.log("🚀 ~ newColController ~ error:", error)

        
        res.status(500).json({message:error.message,...error})
}
}



module.exports={
    newColController
}