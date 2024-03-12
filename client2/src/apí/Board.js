import axios from "./axios";

export const createBoard=(data)=>axios.post("/api/boards/create-board",data)

export const getAllBoard=()=>axios.get("/api/boards/all-boards")

export const getBoardbyId=(id)=>axios.get(`/api/boards/board-detail/${id}`)

export const updateBoard=(id,data)=>axios.put(`/api/boards/update-board/${id}`,data)

