import axios from "./axios";

export const   getCardDetail = (CardDetailId)=>axios.get(`api/card-detail/${CardDetailId}`);

export const updateCardDetail=(CardDetailId,data)=>axios.put(`api/card-detail/update/${CardDetailId}`,data)


