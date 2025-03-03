import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_post, get_posts } from "./redux/Action";

const App = () => {
  const [data, setdata] = useState({
    title: "",
    body: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create_post(data));
    setdata({ title: "", body: "" });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_posts());
  }, [dispatch]);

  const posts = useSelector((store) => store.postData.post);
  console.log("Fetched Posts:", posts);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleInput}
        />
        <input
          type="text"
          name="body"
          value={data.body}
          onChange={handleInput}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {posts.map((post) => (
        <div key={post.id}>
          <h1>title: {post.title}</h1>
          <p> body: {post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
