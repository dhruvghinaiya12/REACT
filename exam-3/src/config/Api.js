import axios from "axios";


const ApiLink=axios.create({
    baseURL: "http://localhost:3000",
  
})

export default ApiLink;
