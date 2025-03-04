import axios from "axios";


export const ApiLink=axios.create({
    baseURL:"https://dummyjson.com"
})