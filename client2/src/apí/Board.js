import axios from "./axios";

export const createBoard=(data)=>axios.post("/boards/create-board",data)

export const getAllBoard=()=>axios.get("/boards/all-boards")

export const getBoardbyId=(id)=>axios.get(`/boards/board-detail/${id}`)

export const updateBoard=(id,data)=>axios.put(`/boards/update-board/${id}`,data)

