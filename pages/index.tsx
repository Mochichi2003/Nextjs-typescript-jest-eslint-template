import Link from "next/link";
import Layout from "../components/Layout";
import React from "react";
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-red-500 text-6xl">
      Hello Next.js Docker Eslint prettierr TypeScript Jest tailwindcss Example
      👋
    </h1>
    {/* <h2>こんにちは</h2> */}
    <a href="https://nextjs.org">Next.js!</a>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
