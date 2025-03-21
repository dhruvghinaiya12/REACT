import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { create_post, get_posts } from "../redux/Action";

const Post = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
    postedAt: "",
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create_post(data));
    setData({ title: "", body: "", postedAt: "" });
  };

  useEffect(() => {
    dispatch(get_posts());
  }, [dispatch]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleInput}
          placeholder="Enter title"
          className="border p-2 rounded-md w-full"
        />
        <textarea
          name="body"
          value={data.body}
          onChange={handleInput}
          placeholder="Enter body"
          className="border p-2 rounded-md w-full h-24 resize-none"
        />
        <input
          type="datetime-local"
          name="postedAt"
          value={data.postedAt}
          onChange={handleInput}
          className="border p-2 rounded-md w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Post;
