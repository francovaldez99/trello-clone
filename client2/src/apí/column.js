import axios from "./axios";

export const createColumn=(BoardId,data)=>axios.post(`/column/new-column/${BoardId}`,data)

export const fetchupdateColName=(idColumn,data)=>axios.put(`/column/update-column-name/${idColumn}`,data)

export const fetchDeleteCol=(idColumn)=>axios.delete(`/column/delete-column/${idColumn}`)