import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-300">
            Welcome to our blog! We provide insightful articles on a variety of topics, from technology and lifestyle to health and personal development.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center text-pink-400 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            Our mission is to share knowledge, spark creativity, and inspire our readers through well-researched articles and engaging stories. 
            We believe in the power of information and community, and we're committed to bringing you high-quality content that you can trust.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join us as we explore a wide range of topics, and stay tuned for fresh content that can help you grow, learn, and stay informed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
