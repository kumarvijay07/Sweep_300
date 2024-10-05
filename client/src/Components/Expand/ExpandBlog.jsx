// ExpandBlog.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ExpandBlog = () => {
  const { postId } = useParams();
  const posts = [
    {
      id: 1,
      title: 'Post Title 1',
      content: 'This is the full content of Post Title 1. It contains all the details you need to know about this topic.',
    },
    {
      id: 2,
      title: 'Post Title 2',
      content: 'This is the full content of Post Title 2. It contains all the details you need to know about this topic.',
    },
    {
      id: 3,
      title: 'Post Title 3',
      content: 'This is the full content of Post Title 3. It contains all the details you need to know about this topic.',
    },
  ];

  const post = posts.find(p => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 bg-gray-100">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-4 text-gray-600">{post.content}</p>
        <Link to="/" className="mt-4 inline-block text-teal-500 font-semibold">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ExpandBlog;
