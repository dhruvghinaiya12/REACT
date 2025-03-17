import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlogs } from "../redux/post/api";

const PostData = () => {
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({ 
    title: "", 
    body: "" 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
      dispatch(createBlogs(blog));
      setBlog({ title: "", body: "" });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter Title"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="body"
            value={blog.body}
            onChange={handleChange}
            placeholder="Enter Body"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostData;
