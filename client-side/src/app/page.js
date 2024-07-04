// src/app/page.js

"use client";
import React, { useEffect, useState } from "react";
import Layout from "./layout";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div>Error: {error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Blog</h1>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="border p-4 rounded-lg">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-gray-700">{blog.content}</p>
              <a
                href={`/blog/${blog._id}`}
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
