'use client'
import React, { useEffect, useState } from 'react'
import { ApiLink } from '../config/Api';
import { useRouter } from 'next/navigation';

const page = () => {
    const [posts, setPosts] = useState([]);
    const router=useRouter()

    const handleClick = (id) => {
        router.push(`/blog/${id}`);
        }

    const fetchPosts = async () => {
        let res = await ApiLink.get("/posts");
        setPosts(res.data.posts);
        console.log(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6">
            {posts.map((post) => (
                <div key={post.id} className="bg-white shadow-md p-4 rounded-lg border border-gray-200 mb-4" onClick={() => handleClick(post.id)}>
                    <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default page;
