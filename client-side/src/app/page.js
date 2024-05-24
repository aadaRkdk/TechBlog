//.src/app/page.js

import Layout from "@/components/Layout";

export default function Home() {
  return (
    <main>
      <Layout>
        <h1 className="text-4xl font-bold mb-4">
          TechBlog: Deep Dives & Reviews for Tech Enthusiasts
        </h1>
        <p className="text-lg font-semibold text-blue-500">
          Demystifying Tech: Clear explanations, deep dives, and practical
          guides
        </p>
        <p className="text-lg text-gray-700 mt-4">
          We're passionate tech experts on a mission to empower YOU! TechBlog is
          your one-stop hub for diving deep into the exciting world of
          technology. Whether you're a seasoned coder or a curious newcomer, we
          provide insightful articles, comprehensive reviews, and practical
          tutorials to help you navigate the ever-evolving tech landscape. We
          delve into the intricate details of the latest trends, dissect
          cutting-edge gadgets, and equip you with the knowledge to unlock their
          full potential.
        </p>
      </Layout>
    </main>
  );
}
