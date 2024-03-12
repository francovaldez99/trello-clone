import axios from "./axios";

export const createColumn=(BoardId,data)=>axios.post(`/api/column/new-column/${BoardId}`,data)

export const fetchupdateColName=(idColumn,data)=>axios.put(`/api/column/update-column-name/${idColumn}`,data)

export const fetchDeleteCol=(idColumn)=>axios.delete(`/api/column/delete-column/${idColumn}`)