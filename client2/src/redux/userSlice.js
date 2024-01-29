import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firtsname:"",
    lastname:"",
    email:"",
    isAuthenticated:false,
}
const userSlice =createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        addUser:(state,action)=>{
            const {firtsname,lastname,email}=action.payload
            state.firtsname=firtsname;
            state.lastname=lastname;
            state.email=email;
             
        },
        ChangeAuth:(state,action)=>{
            state.isAuthenticated=action.payload
        },
        removeUser : (state, action )=>{
            state.firtsname="";
            state.lastname="";
            state.email="";
            state.isAuthenticated=""
        }
    }
})


export const { addUser, ChangeAuth , removeUser}=userSlice.actions
export default userSlice.reducer