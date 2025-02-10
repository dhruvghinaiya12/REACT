import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const FetchPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    FetchPosts();
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-bold mb-4 text-black text-center">Latest Posts</h2>

      {posts.map(ele => (
        <div
          key={ele.id}
          className="p-4 bg-[#162447] rounded-lg shadow-md mb-4"
        >
          <h3 className="text-lg font-semibold">Title: {ele.title}</h3>
          <p className="mt-2">Description: {ele.body}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
