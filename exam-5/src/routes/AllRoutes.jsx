import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


const AllRoutes = () => {
  return (
    
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  )
}

export default AllRoutes
