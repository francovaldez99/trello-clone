import axios from "./axios";

export const createNewCard=(ColumnId,data)=>axios.post(`/cards/new-card/${ColumnId}`,data)

export const updateCoverCard=(CardId,data)=>axios.put(`/cards/update-cover/${CardId}`,data)

export const fetchUpdateCardName=(CardId,data)=>axios.put(`/cards/update-card-name/${CardId}`,data)

export const fetchdeleteCard=(CardId)=>axios.delete(`/cards/delete-card/${CardId}`)
