import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firtsname:"",
    lastname:"",
    email:"",
    isAuthenticated:false,
    showToast:"",
    toastMessage:"",
    toastType:""
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
        },
        setShowToast:(state,action)=>{
            state.showToast=action.payload
        },
        setToastMessage:(state,action)=>{
            state.toastMessage=action.payload
        },
        setToastType:(state,action)=>{
            state.toastType=action.payload
        }
    }
})


export const { addUser, ChangeAuth , removeUser,setShowToast,setToastMessage,setToastType}=userSlice.actions
export default userSlice.reducer