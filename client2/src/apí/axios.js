import axios from "axios"
import { URL_SERVER } from "../config"

const axiosInstance=axios.create({
    baseURL:"https://trello-clone-server-cnaq.onrender.com",
   withCredentials: true
})

export default axiosInstance