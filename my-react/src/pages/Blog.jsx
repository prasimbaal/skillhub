import React, { useState } from "react";

// Mock data for demonstration purposes
const allPosts = [
  {
    id: 1,
    title: "The Importance of Lifelong Learning",
    author: "Meron Bahiru",
    date: "August 20, 2024",
    categories: ["Education", "Personal Development"],
    tags: ["Learning", "Skills", "Growth"],
    excerpt: "Lifelong learning is crucial in today’s fast-paced world. This blog post explores why it matters...",
    imageUrl: "https://via.placeholder.com/800x400",
  },
  {
    id: 2,
    title: "How to Stay Motivated in Your Studies",
    author: "Abebe Feleke",
    date: "August 18, 2024",
    categories: ["Education", "Motivation"],
    tags: ["Motivation", "Productivity"],
    excerpt: "Staying motivated can be tough. Here are some tips to keep your energy and focus high while studying.",
    imageUrl: "https://via.placeholder.com/800x400",
  },
  // Add more posts as needed...
];

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  // Get the posts for the current page
  const currentPosts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-4 pb-8 text-center bg-gradient-to-r from-purple-700 via-blue-800 to-red-700 bg-clip-text text-transparent">Blog</h1>
      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="border border-blue-400 rounded px-4 py-2 w-full max-w-md"
        />
        <select className="border border-gray-300 bg-blue-500 text-white rounded px-4 py-2 ml-4">
          <option value="">Filter by Category</option>
          <option value="Education">Education</option>
          <option value="Personal Development">Personal Development</option>
          {/* More categories... */}
        </select>
      </div>

      {/* Blog Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">{post.date} by {post.author}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <a href={`/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-900">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? "bg-blue-500" : "bg-gray-200"
          } text-white px-4 py-2 rounded`}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "bg-blue-500" : "bg-gray-200"
          } text-white px-4 py-2 rounded`}
        >
          Next
        </button>
      </div>

      {/* Author Bio (example with a single author) */}
      <div className="mt-12 p-6 border-t border-gray-300">
        <h3 className="text-xl font-semibold mb-4">About the Author</h3>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Author"
            className="rounded-full w-16 h-16 object-cover mr-4"
          />
          <div>
            <h4 className="text-lg font-semibold">Meron Bahiru</h4>
            <p className="text-gray-600">Meron is an experienced educator and writer, passionate about personal development and lifelong learning.</p>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-700 mb-6">Get the latest updates and insights directly in your inbox.</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-l px-4 py-2 w-full max-w-md"
          />
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-r">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
