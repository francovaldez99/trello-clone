const Board = require("../models/Board.model");
const Column = require("../models/Column.model")
const Card = require("../models/Card.model");
const CardDetail = require("../models/CardDetail.model");


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


const updateColumnName =async (req,res)=>{
try {
  const {idColumn}=req.params;
  const {columnName}=req.body;
  const findCol = await Column.findByPk(idColumn);
  findCol.columnName=columnName;
  await findCol.save()
  console.log(findCol);
  res.status(200).json(findCol.dataValues)
} catch (error) {
  console.log("🚀 ~ updateColumnName ~ error:", error)
  res.status(500).json({message:error.message})
  
}
}


const deleteColumn = async (req, res) => {
  try {
    const { idColumn } = req.params;

    // Eliminar todas las tarjetas asociadas a la columna
    const allCardsToDelete = await Card.findAll({
      where: { ColumnId: idColumn }
    });

    for (const card of allCardsToDelete) {
      // Eliminar el detalle de la tarjeta asociada
      await CardDetail.destroy({ where: { id: card.CardDetailId } });
      // Eliminar la tarjeta
      await card.destroy();
    }

    // Finalmente, eliminar la columna
    await Column.destroy({ where: { id: idColumn } });

    res.status(200).json({ idColumn });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports={
newColumn,
updateColumnName,
deleteColumn
}