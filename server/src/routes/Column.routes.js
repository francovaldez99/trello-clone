const {Router}=require("express");
const { newColumn ,updateColumnName, deleteColumn} = require("../controllers/ColumnController");

const ColumnRouter=Router();

ColumnRouter.post("/new-column/:BoardId",newColumn)
ColumnRouter.put("/update-column-name/:idColumn",updateColumnName)
ColumnRouter.delete("/delete-column/:idColumn",deleteColumn)
module.exports=ColumnRouter