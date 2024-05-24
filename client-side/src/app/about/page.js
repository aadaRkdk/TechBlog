// src/app/about/page.js

import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About TechBlog</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to TechBlog, your go-to source for deep dives and reviews of
          the latest in technology. Our mission is to provide clear
          explanations, in-depth analyses, and practical guides to help you
          navigate the ever-evolving tech landscape.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you're a seasoned professional or a curious newcomer, we aim
          to empower you with the knowledge you need to stay ahead in the world
          of technology. Our team of passionate tech experts is dedicated to
          delivering insightful articles, comprehensive reviews, and hands-on
          tutorials.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          At TechBlog, we believe in making technology accessible and
          understandable for everyone. Join us on our journey to explore the
          intricate details of the latest trends, dissect cutting-edge gadgets,
          and unlock their full potential.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for being a part of our community. We look forward to
          sharing our passion for technology with you.
        </p>
      </div>
    </Layout>
  );
}
