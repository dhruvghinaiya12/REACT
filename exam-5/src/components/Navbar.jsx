import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const Navbar = () => {

  const [username, setUsername] = useState(null);

    const Username = Cookies.get("username");
   
    useEffect(()=>{
      setUsername(Username)
     },[])
  
  return (
    <nav className="bg-gradient-to-r from-[#0a0f1d] to-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#b0c7f2] text-2xl font-bold">
          <Link
            to="/"
            className="hover:text-[#dbe3ff] transition-colors duration-300"
          >
            Home
          </Link>
        </div>
        <div className="space-x-6">

         {username?( <span className="text-white hover:text-gray-400 transition-colors">{username}</span>):( <Link
            to="/signup"
            className="text-[#b0c7f2] font-medium px-4 py-2 rounded-lg hover:bg-[#162447] hover:text-white transition-all duration-300"
          >
            Signup
          </Link>)}
          <Link
            to="/login"
            className="text-[#b0c7f2] font-medium px-4 py-2 rounded-lg hover:bg-[#162447] hover:text-white transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
