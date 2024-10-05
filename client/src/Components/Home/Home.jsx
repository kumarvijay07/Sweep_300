import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Blog</h1>
          <p className="mt-4 text-lg md:text-xl">Sharing insights, stories, and everything in between</p>
          <a
            href="#featured"
            className="mt-8 inline-block bg-teal-500 hover:bg-teal-700 text-white py-2 px-6 rounded-lg text-lg"
          >
            Explore Posts
          </a>
        </div>
      </header>

      {/* Featured Posts Section */}
      <section id="featured" className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Post Thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Post Title 1</h3>
                <p className="mt-2 text-gray-600">This is a brief description of the blog post. Click to read more!</p>
                <a href="/post/1" className="mt-4 inline-block text-teal-500 font-semibold">
                  Read More
                </a>
              </div>
            </div>

            {/* Repeat Post Card for more posts */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Post Thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Post Title 2</h3>
                <p className="mt-2 text-gray-600">This is a brief description of the blog post. Click to read more!</p>
                <a href="/post/2" className="mt-4 inline-block text-teal-500 font-semibold">
                  Read More
                </a>
              </div>
            </div>

            {/* Another Post Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Post Thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Post Title 3</h3>
                <p className="mt-2 text-gray-600">This is a brief description of the blog post. Click to read more!</p>
                <a href="/post/3" className="mt-4 inline-block text-teal-500 font-semibold">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
          <p>
            Made with ❤️ by <a href="https://yourportfolio.com" className="text-teal-500">Satya Suranjeet Jena</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
