import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Getdata = () => {
    const [data,setdata] = useState([])

    const getdata=async()=>{
        try {
            let res=await axios.get("http://localhost:5000/api/v1/user")
            console.log(res.data)  
            setdata(res.data)
        } catch (error) {
            console.log(error);  
        }
    }

useEffect(()=>{
    getdata()
},[])

  return (
    <div>
        {data.map((user)=>(
            <div key={user._id}>
                <h2>{user.username}</h2>
            </div>
        ))}  
      
    </div>
  )
}

export default Getdata
