import React, { useState } from "react";
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"
const Signup = () => {

 const nav=useNavigate()
const storedUsers = JSON.parse(localStorage.getItem("userdata")) || [];

  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    storedUsers.push(userdata);
    localStorage.setItem("userdata", JSON.stringify(storedUsers));
    Cookies.set("username", userdata.name);
    setUserData(userdata.name); 
    alert("User signup successfully!");
    setUserData({ name: "", email: "", password: "" });
    nav("/login")
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-20"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Sign Up
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={userdata.name}
            onChange={handleInput}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={userdata.email}
            onChange={handleInput}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={userdata.password}
            onChange={handleInput}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
