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
    // You can handle the form submission logic here, like sending data to the server
    console.log({
      title,
      description,
      content,
      image
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
            {image && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-64 h-40 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Short Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter a short description"
              required
            />
          </div>

          {/* Content */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              Blog Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-40"
              placeholder="Write your blog content here"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
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
