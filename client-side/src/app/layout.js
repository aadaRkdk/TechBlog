// src/app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechBlog",
  description: "TechBlog ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
