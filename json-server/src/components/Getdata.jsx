import React, { useEffect, useState } from 'react'
import UserDataCard from './UserDataCard'
import { Slide, toast } from "react-toastify";
import ApiLink from '../config/Api';


const Getdata = () => {
    const [data,setdata] = useState([])

    const getdata=async()=>{
        try {
            let res=await ApiLink.get("/api/v1/user")
            console.log(res.data)  
            setdata(res.data)
        } catch (error) {
            console.log(error);  
        }
    }

    const DeleteUserData=async(_id)=>{
        try {
            await ApiLink.delete(`/api/v1/user/${_id}`)
            toast.error("Task deleted!", {
                position: "top-center",
                autoClose: 1000,
                theme: "dark",
                transition: Slide,
              });

        } catch (error) {
            console.log(error);
            
        }
    }

useEffect(()=>{
    getdata()
},[DeleteUserData])


  return (
    <div className="container mt-4">
    <h2 className="mb-4">User List</h2>
    <div className="row">
      {data.map((user) => (
        <UserDataCard
          key={user._id}
          {...user}
          ondelete={DeleteUserData}
        />
      ))}
    </div>
  </div>
  
  )
}

export default Getdata
