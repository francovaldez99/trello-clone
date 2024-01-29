const {Router}=require("express");
const { newColumn } = require("../controllers/ColumnController");

const ColumnRouter=Router();

ColumnRouter.post("/new-column/:BoardId",newColumn)
module.exports=ColumnRouter