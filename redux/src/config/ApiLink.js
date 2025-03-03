import axios from "axios"

const APiLink=axios.create({
    baseURL:"http://localhost:3000"
})

export default APiLink;