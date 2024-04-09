const Board=require("../models/Board.model")
const Card = require("../models/Card.model")
const Column = require("../models/Column.model")



const createNewBoard=async(req,res)=>{
  try {
    const {boardName,cover}=req.body;

    if (!req.user || !req.user.id) {
      throw new Error('Unauthorized');
    }
    const UserId=req.user.id;
 await Board.create({
      boardName,
      cover,
      UserId
    })

 const allBoards=await  Board.findAll({
        where:{UserId:req.user.id},
     
    })
    

    res.status(200).json(allBoards)
  } catch (error) {
    console.log("🚀 ~ getAllBoards ~ error:", error)
    req.user=null
  
    res.status(500).json({message:error.message})
  }
}



const getAllBoards=async(req,res)=>{
try {
  if (!req.user || !req.user.id) {
    throw new Error('Unauthorized');
  }
 
    const allBoards=await Board.findAll({
        where:{ UserId:req.user.id },
     
    })
    

  if(!allBoards){
    throw new Error('Unauthorized');

  }
    res.status(200).json(allBoards)

} 
catch (error) {
  console.log("🚀 ~ getAllBoards ~ error:", error)
  req.user=null
  
    res.status(500).json({message:error.message})
    return
}

}

const getBoardById=async(req,res)=>{
try {
    const {id}=req.params
    const findBoard = await Board.findByPk(id,{ include: [
        {
          model: Column,
           
          include: [
            {
              model: Card,
            },
          ],
        },
      ]
        
    })
    if(!findBoard){
      throw new Error('Unauthorized');

    }
    res.status(200).json(findBoard)
} catch (error) {
  req.user=null

    console.log("🚀 ~ file: BoardController.js:30 ~ getBoardById ~ error:", error)
    res.status(500).json({message:error.message})
    
}
}

const updateBoard=async(req,res)=>{
try {
  const {id}=req.params;
  const {data}=req.body;


for (let index = 0; index < data.Columns.length; index++) {

  const updateColumns=async()=>{
    try {
      const findCol = await Column.findByPk(data.Columns[index].id)
      

    
        findCol.orderColumn=index;
        await findCol.save()
      
        
      
    } catch (error) {
      console.log("🚀 ~ updateColumns ~ error:", error)
      
    }
  }
  updateColumns()
  for (let j = 0; j <  data.Columns[index].Cards.length; j++) {
    const updateCard =async()=>{
      try {
        const findCard =await Card.findByPk(data.Columns[index].Cards[j].id)
        
      
            findCard.ColumnId=data.Columns[index].id
      
            findCard.orderCard=data.Columns[index].Cards[j].orderCard

            await findCard.save()
    

        
     
      } catch (error) {
        
        console.log("🚀 ~ updateCard ~ error:", error)
        
      }
    }
    updateCard()
    
  }

}


  res.status(200).send("updated column")
} catch (error) {
  console.log("🚀 ~ updateBoard ~ error:", error)
  req.user=null
  
  res.status(500).json({message:error.message})
}
}

module.exports={
    getAllBoards,
    getBoardById,
    updateBoard,
    createNewBoard
}