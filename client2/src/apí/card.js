import axios from "./axios";

export const createNewCard=(ColumnId,data)=>axios.post(`/api/cards/new-card/${ColumnId}`,data)

export const updateCoverCard=(CardId,data)=>axios.put(`/api/cards/update-cover/${CardId}`,data)

export const fetchUpdateCardName=(CardId,data)=>axios.put(`/api/cards/update-card-name/${CardId}`,data)

export const fetchdeleteCard=(CardId)=>axios.delete(`/api/cards/delete-card/${CardId}`)
