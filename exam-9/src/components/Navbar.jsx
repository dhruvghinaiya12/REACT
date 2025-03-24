import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 

const Navbar = () => {
  const navigate = useNavigate();
  const isLogin = Cookies.get("isLogin"); 

  const handleLogout = () => {
    Cookies.remove("isLogin");
    Cookies.remove("email");
    Cookies.remove("userToken");
    alert("Logged out successfully!");
    navigate("/login"); 
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          
          {!isLogin ? (
            <>
              <Link to="/signup" className="hover:text-gray-400 transition">Sign Up</Link>
              <Link to="/login" className="hover:text-gray-400 transition">Login</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="hover:text-gray-400 transition">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
