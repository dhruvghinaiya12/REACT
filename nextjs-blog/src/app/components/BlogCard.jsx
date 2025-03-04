import React from "react";

const BlogCard = ({ title, body, tags = [], reactions = {}, views }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{body}</p>

      <div className="mt-4 text-sm text-gray-500 space-y-2">
        <p>
          <span className="font-semibold">Likes:</span> {reactions.likes} 👍
        </p>
        <p>
          <span className="font-semibold">Dislikes:</span> {reactions.dislikes}{" "}
          👎
        </p>
        <p>
          <span className="font-semibold">Tags:</span> {tags.join(", ")}
        </p>
        <p>
          <span className="font-semibold">Views:</span> {views}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
