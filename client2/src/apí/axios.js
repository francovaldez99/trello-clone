import axios from "axios"
import { URL_SERVER } from "../config"
import store from "../redux/store"

const token =store?.getState()?.user?.token || localStorage.getItem("token");

const axiosInstance=axios.create({
    baseURL:URL_SERVER,

   headers: {
    Authorization: token ? `Bearer ${token}` : '', 
}
 
})

export default axiosInstance