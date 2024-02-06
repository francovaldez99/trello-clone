import axios from "./axios";

export const   getCardDetail = (CardDetailId)=>axios.get(`/card-detail/${CardDetailId}`);

export const updateCardDetail=(CardDetailId,data)=>axios.put(`/card-detail/update/${CardDetailId}`,data)


