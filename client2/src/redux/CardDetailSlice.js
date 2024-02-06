import { createSlice } from "@reduxjs/toolkit";
const initialState = {
CardDetail:{

}
};

const cardDetailSlice=createSlice({
    name:"cardDetail",
    initialState,
    reducers:{
        setCardDetail:(state,action)=>{
            state.CardDetail=action.payload;
        }
    }
})

export const {setCardDetail}=cardDetailSlice.actions;
export default cardDetailSlice.reducer;