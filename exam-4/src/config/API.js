import axios from 'axios';

const ApiLink=axios.create({
    baseURL: "http://localhost:5000/api/v1",
  
})

export default ApiLink;
