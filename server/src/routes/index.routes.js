const app = require("../app");
const { Router } = require("express");
const BoardRouter = require("./Board.routes");
const UserRouter = require("./User.routes");
const authToken = require("../middlewares/authToken");
const ColumnRouter = require("./Column.routes");
const cardRouter = require("./Card.routes");
const CardDetailRouter = require("./CardDetail.routes");

const indexRouter=Router()

indexRouter.use("/user",UserRouter)
indexRouter.use(authToken)

indexRouter.use("/boards",BoardRouter)
indexRouter.use("/column",ColumnRouter)
indexRouter.use("/cards",cardRouter)
indexRouter.use("/card-detail",CardDetailRouter)
module.exports=indexRouter