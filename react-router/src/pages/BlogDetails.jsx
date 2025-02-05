import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const fetchBlogDetails = async () => {
    let res = await axios.get(`https://dummyjson.com/posts/${id}`);
    setBlog(res.data);
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  return (
    <div className="bg-gray-800 text-white min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg space-y-6">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg mb-6">{blog.body}</p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tags:</h3>
            <p className="text-lg text-gray-400">{blog.tags?.join(", ")}</p>

            <h3 className="text-xl font-semibold">Reactions:</h3>
            <p className="text-lg text-gray-400">
              {blog.reactions?.likes} Likes, {blog.reactions?.dislikes} Dislikes
            </p>

            <h3 className="text-xl font-semibold">Views:</h3>
            <p className="text-lg text-gray-400">{blog.views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
