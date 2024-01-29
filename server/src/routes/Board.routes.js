const {Router}=require("express")
const { getAllBoards, getBoardById, updateBoard,createNewBoard } = require("../controllers/BoardController")

const BoardRouter = Router()
BoardRouter.get("/all-boards",getAllBoards)
BoardRouter.get(`/board-detail/:id`,getBoardById)
BoardRouter.put(`/update-board/:id`,updateBoard)
BoardRouter.post(`/create-board`,createNewBoard)
module.exports=BoardRouter