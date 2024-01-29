import axios from "./axios";

export const createColumn=(BoardId,data)=>axios.post(`/column/new-column/${BoardId}`,data)