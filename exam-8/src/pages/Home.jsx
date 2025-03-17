import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/post/api";

const Home = () => {
  const dispatch = useDispatch();
  const { Blogs, isLoading, error } = useSelector((state) => state.blog);
  const isLogin = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    if (isLogin) {
      dispatch(getBlogs());
    }
  }, [isLogin, dispatch]);

  return (
    <div className="p-6">
      {isLoading && <p className="text-center text-white">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      
      {!isLogin ? (
        <p className="text-center text-gray-400">Please login to see the blogs.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-900 p-5 rounded-lg shadow-lg border border-gray-700">
              <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
              <p className="text-gray-400 mt-2">{blog.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
