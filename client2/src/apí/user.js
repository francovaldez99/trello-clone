import axios from "./axios"


export const register =(user)=>axios.post("/user/register",user)
export const login = (user)=>axios.post("/user/login",user)
export const logoutserver=()=>axios.post("/user/logout")
export const verifyToken=(token)=>axios.get("/user/verify-token",{token})
