import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Private from "./Private";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Private><Home/></Private>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>}  />
    </Routes>
  );
};

export default AllRoutes;
