import axios from "./axios"


export const register =(user)=>axios.post("/api/user/register",user)
export const login = (user)=>axios.post("/api/user/login",user)
export const verifyToken=(token)=>axios.get("/api/user/verify-token",{token})
