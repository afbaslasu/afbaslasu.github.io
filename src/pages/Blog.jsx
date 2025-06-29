// src/pages/Blog.jsx
import React, { useState } from "react";
import CenteredLayout from "../components/layout/CenteredLayout";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Introducing React 19",
    excerpt:
      "Get an overview of what’s new and exciting in React 19, including improved performance, simplified APIs, and better developer experience.",
    date: "2025-04-15",
    slug: "introducing-react-19",
  },
  {
    title: "Using React with Vite",
    excerpt:
      "Learn how to set up a blazing fast development environment for your React apps using Vite and Tailwind CSS.",
    date: "2025-03-30",
    slug: "using-react-with-vite",
  },
  {
    title: "Designing with Components",
    excerpt:
      "Understand the component-based design philosophy that makes React powerful and intuitive.",
    date: "2025-03-10",
    slug: "designing-with-components",
  },
  {
    title: "React and TypeScript",
    excerpt:
      "Explore how TypeScript improves React development by adding type safety and improved editor support.",
    date: "2025-03-05",
    slug: "react-and-typescript",
  },
  {
    title: "React Hooks Best Practices",
    excerpt:
      "Discover patterns and anti-patterns when working with React Hooks for state and effect management.",
    date: "2025-02-25",
    slug: "react-hooks-best-practices",
  },
];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const postsPerPage = 2;

  const filteredPosts = blogPosts.filter(
    ({ title, excerpt }) =>
      title.toLowerCase().includes(search.toLowerCase()) ||
      excerpt.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <CenteredLayout>
      <section className="prose dark:prose-invert max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">React Blog</h1>

        <input
          type="text"
          placeholder="Search blog posts..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full max-w-md mb-6 px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-700"
        />

        {currentPosts.length === 0 && <p>No matching posts found.</p>}

        <div className="space-y-8">
          {currentPosts.map(({ title, excerpt, date, slug }) => (
            <article key={slug} className="border-b pb-6">
              <h2 className="text-2xl font-semibold">
                <Link to={`/blog/${slug}`} className="hover:underline">
                  {title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {new Date(date).toDateString()}
              </p>
              <p>{excerpt}</p>
              <Link
                to={`/blog/${slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2 inline-block"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`px-4 py-2 rounded border dark:border-gray-600 ${
                    page === pageNum
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}
          </div>
        )}
      </section>
    </CenteredLayout>
  );
}
