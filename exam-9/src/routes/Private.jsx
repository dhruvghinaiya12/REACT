import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; 

const Private = ({ children }) => {
  const isLogin = Cookies.get("isLogin"); 

  return isLogin ? children : <Navigate to="/login" />;
};

export default Private;
