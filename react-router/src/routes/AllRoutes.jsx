import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Blogs from '../pages/Blogs';
import About from '../pages/About';
import BlogDetails from '../pages/BlogDetails';

const AllRoutes = () => {
  return (
    
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
  )
}

export default AllRoutes
