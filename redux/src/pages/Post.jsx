import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_post, delete_post, get_posts } from "../redux/Action";
import PostCard from "../components/PostCard";

const Post = () => {
  const [data, setdata] = useState({
    title: "",
    body: "",
    postedAt: "",
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create_post(data));
    setdata({ title: "", body: "", postedAt:""});
  };

  useEffect(() => {
    dispatch(get_posts());
  }, [dispatch]);

  const posts = useSelector((store) => store.postData.post);
  // console.log("Fetched Posts:", posts);

  const handleDelete = (id) => {
    dispatch(delete_post(id));
  };

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

        <input
          type="datetime-local"
          name="postedAt"
          value={data.postedAt}
          onChange={handleInput}
        />

        <button type="submit">Add Post</button>
      </form>
      {posts &&
        posts.map((post) => (
          <PostCard {...post} key={post.id} OnDelete={handleDelete} />
        ))}
    </div>
  );
};

export default Post;
