import React, { useState } from 'react';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., sending data to the server)
    console.log({
      title,
      description,
      content,
      image
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Create a New Blog Post</h2>

        <form onSubmit={handleSubmit}>
          {/* Blog Title */}
          <div className="mb-5">
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="mb-5">
            <label htmlFor="image" className="block text-lg font-semibold text-gray-700 mb-2">
              Upload Blog Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
            {image && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-full h-52 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          {/* Short Description */}
          <div className="mb-5">
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">
              Short Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Brief description of the blog post"
              required
            />
          </div>

          {/* Blog Content */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-lg font-semibold text-gray-700 mb-2">
              Blog Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-56"
              placeholder="Write your blog content here..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-teal-700 transition duration-300"
            >
              Upload Blog Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
