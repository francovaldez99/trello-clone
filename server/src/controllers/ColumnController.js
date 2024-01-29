const Board = require("../models/Board.model");
const Column = require("../models/Column.model")
const Card = require("../models/Card.model")


const newColumn=async(req,res)=>{
    try {
        const {BoardId}=req.params;
        const {columnName,orderColumn  }=req.body;
     
        
       const newColumn=await Column.create({
        BoardId,
        columnName,
        orderColumn

       })
       const findCol = await Column.findByPk(newColumn.dataValues.id,{
        include: [
          {
            model: Card,
          },
        ]
       })
       console.log("🚀 ~ newColumn ~ newColumn:", newColumn)


    res.status(200).json(findCol)
    } catch (error) {
        console.log("🚀 ~ newColumn ~ error:", error)
        
        res.status(500).json({message:error.message})
    }
}

module.exports={
newColumn
}