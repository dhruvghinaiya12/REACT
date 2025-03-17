import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { Login } from "../redux/userslice";

const Navbar = () => {
    const isLogin=useSelector((state)=>state.user.isLogin)
    const dispatch=useDispatch()
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/post" className="hover:text-gray-400 transition">Post Data</Link>
        </div>

        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={()=>dispatch(Login())} >
            {isLogin?"Logout":"Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
