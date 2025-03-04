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
    <div>
      <h1>title: {title}</h1>
      <p> body: {body}</p>
      <p>Posted at: {formatDate1(postedAt)}</p>
      <button onClick={() => OnDelete(id)}>Delete</button>
    </div>
  );
};

export default PostCard;
