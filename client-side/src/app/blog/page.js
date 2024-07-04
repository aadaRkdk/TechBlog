// src/app/blog/page.js

"use client";
import React from "react";
import Layout from "../layout";
import BlogForm from "@/components/BlogForm";

const BlogPage = () => {
  const handleBlogSubmit = async (blog) => {
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (!response.ok) {
        throw new Error("Failed to submit blog post");
      }
      console.log("Blog post submitted successfully");
    } catch (error) {
      console.error("Error submitting blog post:", error);
    }
  };

  return (
    <Layout>
      <BlogForm onSubmit={handleBlogSubmit} />
    </Layout>
  );
};

export default BlogPage;
