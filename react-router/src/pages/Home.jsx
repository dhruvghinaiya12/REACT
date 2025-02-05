import React from 'react'
import blogImg from "../images/blogging-464042_1280.jpg"

const Home = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-6">
            Welcome to the Blog World
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Explore amazing blogs on various topics including technology, lifestyle, health, and more!
          </p>
          <img
            src={blogImg}
            alt="Blog Image"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-pink-400 mb-4">
            What is this blog about?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            This blog is a space where you can read and share articles on various subjects. Whether you're
            interested in technology, health, entertainment, or lifestyle, we've got something for everyone. 
            Join the conversation, get inspired, and stay informed!
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Stay tuned for the latest posts and updates. Happy reading!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
