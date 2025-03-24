import React, { useState } from "react";
import { signup } from "../config/firebase";
import Cookies from "js-cookie";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignup = async () => {
    try {
      let userdata = await signup(data.email, data.password);
      console.log(userdata);
      Cookies.set("email", userdata.user.email);
      Cookies.set("userToken", userdata.user.accessToken);
      alert("Signup Successful");
    } catch (error) {
      console.log(error);
      alert("Signup failed. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
    setData({ email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={handleInput}
            className="mb-4 p-3 rounded border border-gray-400 outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={data.password}
            onChange={handleInput}
            className="mb-4 p-3 rounded border border-gray-400 outline-none"
            required
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
