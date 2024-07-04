import React, { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit blog post");
      }
      const data = await response.json();
      console.log("Blog post created:", data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error submitting blog post:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Write a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="content" className="block font-medium">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            rows={6}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
