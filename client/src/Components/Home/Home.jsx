import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Post Title 1',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 1. It contains all the details you need to know about this topic.',
    },
    {
      id: 2,
      title: 'Post Title 2',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 2. It contains all the details you need to know about this topic.',
    },
    {
      id: 3,
      title: 'Post Title 3',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 3. It contains all the details you need to know about this topic.',
    },
    {
      id: 4,
      title: 'Post Title 4',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 4. It contains all the details you need to know about this topic.',
    },
    {
      id: 5,
      title: 'Post Title 5',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 5. It contains all the details you need to know about this topic.',
    },
    {
      id: 6,
      title: 'Post Title 6',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 6. It contains all the details you need to know about this topic.',
    },
    {
      id: 7,
      title: 'Post Title 7',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 7. It contains all the details you need to know about this topic.',
    },
    {
      id: 8,
      title: 'Post Title 8',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 8. It contains all the details you need to know about this topic.',
    },
    {
      id: 9,
      title: 'Post Title 9',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 9. It contains all the details you need to know about this topic.',
    },
    {
      id: 10,
      title: 'Post Title 10',
      description: 'This is a brief description of the blog post. Click to read more!',
      imgSrc: 'https://via.placeholder.com/400x250',
      content: 'This is the full content of Post Title 10. It contains all the details you need to know about this topic.',
    },
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
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

      {/* Search Section */}
      <section className="py-6 bg-gray-200">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-full md:w-1/2 p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          /> 
        </div>
      </section>

      {/* Featured Posts Section */}
      <section id="featured" className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Posts</h2>

          {/* Responsive Grid for Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={post.imgSrc}
                    alt="Post Thumbnail"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-gray-600">{post.description}</p>
                    <Link to={`/post/${post.id}`} className="mt-4 inline-block text-teal-500 font-semibold">
                      Read More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg">No posts found matching your search.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
