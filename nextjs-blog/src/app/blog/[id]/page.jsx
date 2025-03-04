"use client";
import BlogCard from "@/app/components/BlogCard";
import { ApiLink } from "@/app/config/Api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const fetchPost = async () => {
    let res = await ApiLink.get(`/posts/${id}`);
    setPost(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div>
      <BlogCard {...post} />
    </div>
  );
};

export default page;
