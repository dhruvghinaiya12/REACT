import React, { useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"; 
import ApiLink from "../config/Api";

const Data = ({InitialData={},onclose}) => {
  
  const [data, setData] = useState({
    username:InitialData?.username ? InitialData.username: "",
    email:InitialData?.email ? InitialData.email:"",
    age:InitialData?.age ? InitialData.age: "",
    });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const postdata = async () => {
    try {
      if(InitialData._id){
        await ApiLink.patch(`/api/v1/user/${InitialData._id}`, data);
        toast.success("Task updated successfully!", {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
          transition: Slide,
        });
        setTimeout(() => {
          onclose();
        }, 1500);
      }
      else{
        let res = await ApiLink.post("/api/v1/user", data);
        console.log(res.data);
        toast.success("Task added successfully!", {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
          transition: Slide,
        });
      }
    
    } catch (error) {
      console.error("Error in postdata:", error);    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postdata();
   
    setData({ username: "", email: "", age: "" });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">User Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter your name"
              value={data.username}
              onChange={handleInput}
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleInput}
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              placeholder="Enter your age"
              value={data.age}
              onChange={handleInput}
              
            />
          </div>
          <input type="submit" className="btn btn-primary w-100"  value={InitialData._id? "update" : "submit"}/>      
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Data;
