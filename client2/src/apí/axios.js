import axios from "axios"
import { URL_SERVER } from "../config"

const axiosInstance=axios.create({
    baseURL:URL_SERVER,
   withCredentials: true,

    headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json'}
})

export default axiosInstance