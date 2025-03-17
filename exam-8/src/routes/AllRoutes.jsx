import React from "react";
import { Route, Routes } from "react-router-dom";
import PostData from "../pages/PostData";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/post" element={<PostData/>} />
    </Routes>
  );
};

export default AllRoutes;
