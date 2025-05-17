import axios from 'axios';
import Cookies from "js-cookie";
const token = Cookies.get("token");
const ApiLink=axios.create({
    baseURL: " https://task-management-system-c9kj.onrender.com/",
    headers: {
      
        Authorization:`Bearer ${token}`,
    }  
  
})

export default ApiLink;

