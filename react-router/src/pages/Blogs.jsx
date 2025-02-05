import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    let res = await axios.get("https://dummyjson.com/posts");
    setBlogs(res.data.posts);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Blogs</h1>
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
            >
              <Link
                to={`/blogs/${blog.id}`}
                className="text-xl font-semibold text-white hover:text-gray-300"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
