import {configureStore} from "@reduxjs/toolkit";
import userReducer  from "./userSlice.js";
import AllBoardsReducer from "./allBoardsSlice.js"
 const store =configureStore({
    reducer:{
        user:userReducer,
        allBoards:AllBoardsReducer
    }
})

export default store