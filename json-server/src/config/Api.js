import axios from "axios";


const ApiLink=axios.create({
    baseURL: "http://localhost:5000",
  
})

export default ApiLink;
