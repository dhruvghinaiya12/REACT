import React from "react";

const PostCard = ({ id, title, body, postedAt, OnDelete }) => {
  const formatDate1 = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <p className="text-sm text-gray-500">Posted at: {formatDate1(postedAt)}</p>
      <button
        onClick={() => OnDelete(id)}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default PostCard;
