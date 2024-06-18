// src/pages/_app.js

import React from "react";
import Layout from "../app/layout";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
