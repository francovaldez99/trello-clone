import {configureStore} from "@reduxjs/toolkit";
import userReducer  from "./userSlice.js";
import AllBoardsReducer from "./allBoardsSlice.js"
import CardDetailReducer from "./CardDetailSlice.js";
 const store =configureStore({
    reducer:{
        user:userReducer,
        allBoards:AllBoardsReducer,
        cardDetail:CardDetailReducer,
    }
})

export default store