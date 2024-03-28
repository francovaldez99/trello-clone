import axios from "axios"
import { URL_SERVER } from "../config"


const token = localStorage.getItem("token");

const axiosInstance=axios.create({
    baseURL:URL_SERVER,

   headers: {
    Authorization: token ? `Bearer ${token}` : '', 
}
 
})

export default axiosInstance