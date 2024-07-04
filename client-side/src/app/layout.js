//  /client-side/src/layout.js
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Layout({ children, title = "TechBlog" }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
