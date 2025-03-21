import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { delete_post, get_posts } from "../redux/Action";

const Home = () => {

    const dispatch = useDispatch();
  const posts = useSelector((store) => store.postData.post);

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterDate, setFilterDate] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDelete = (id) => {
    dispatch(delete_post(id));
  };

  useEffect(() => {
    dispatch(get_posts());
  }, [dispatch]);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleFilter = (e) => {
    setFilterDate(e.target.value);
  };

  const filteredPosts = posts
    .filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((post) =>
      filterDate ? post.postedAt.startsWith(filterDate) : true
    )
    .sort((a, b) => {
      return sortOrder === "asc"
        ? new Date(a.postedAt) - new Date(b.postedAt)
        : new Date(b.postedAt) - new Date(a.postedAt);
    });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={handleSearch}
          className="border p-2 rounded-md w-full md:w-1/3 mb-2 md:mb-0"
        />
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Sort by Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
        <input
          type="date"
          value={filterDate}
          onChange={handleFilter}
          className="border p-2 rounded-md w-full md:w-1/3 mt-2 md:mt-0"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <PostCard {...post} key={post.id} OnDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
