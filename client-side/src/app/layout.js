import React from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metadata } from "./metadata";  // Import metadata from the new file
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
