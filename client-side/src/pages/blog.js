// src/app/blog/page.js

import Layout from "@/components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">TechBlog: Latest Articles</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the TechBlog articles section! Here, you'll find the latest
          blog posts, in-depth analyses, and reviews on cutting-edge technology
          trends. Stay tuned for more content as we explore the ever-evolving
          world of tech.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you are looking for insights on new gadgets, or tech industry
          news, our blog aims to provide valuable information and engaging
          content to satisfy your tech curiosity.
        </p>
      </div>
    </Layout>
  );
}
