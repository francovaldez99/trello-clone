import axios from "./axios";

export const createNewCard=(ColumnId,data)=>axios.post(`/cards/new-card/${ColumnId}`,data)