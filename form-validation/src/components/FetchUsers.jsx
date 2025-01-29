import React, { useEffect, useState } from 'react'
import ApiLink from '../config/API'
import Usercard from './Usercard'

const FetchUsers = () => {
    const [data,setdata]=useState([])

    const fetchdata=async()=>{
        let res=await ApiLink.get("/user")
        setdata(res.data)
    }

    const handleDelete=async(_id)=>{
        await ApiLink.delete(`/user/${_id}`)
        fetchdata()
    }

    useEffect(()=>{
        fetchdata()
    },[handleDelete])
    
  return (
    <div>
    <div>
        <h2>UserLists</h2>
        
        {data.map((user)=>(
       <Usercard key={user._id} {...user}  ondelete={handleDelete}  />
        ))}
    </div>
      
    </div>
  )
}

export default FetchUsers
