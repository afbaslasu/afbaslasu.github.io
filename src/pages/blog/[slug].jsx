// src/pages/blog/[slug].jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import CenteredLayout from "../../components/layout/CenteredLayout";

const blogData = {
  "introducing-react-19": {
    title: "Introducing React 19",
    date: "2025-04-15",
    content: `React 19 introduces major improvements including faster rendering, better developer ergonomics, and updated APIs.

One of the major focuses is on concurrent rendering, which improves responsiveness in modern UIs. React 19 also includes automatic batching, enhanced error boundaries, and a cleaner start-up process using frameworks like Vite and Next.js.`,
  },
  "using-react-with-vite": {
    title: "Using React with Vite",
    date: "2025-03-30",
    content: `Vite is a lightning-fast build tool that pairs perfectly with React. With Vite, you can start developing your React app in seconds and enjoy hot module replacement with minimal configuration.

You can use Tailwind CSS, React Router, and other libraries seamlessly with Vite. Start with \
\`npm create vite@latest my-app -- --template react\`.`,
  },
  "designing-with-components": {
    title: "Designing with Components",
    date: "2025-03-10",
    content: `React promotes a component-based architecture that encourages reusability and separation of concerns.

Understanding how to break your UI into small components and compose them effectively is key to building scalable apps. This article walks through best practices for designing components that are maintainable and performant.`,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogData[slug];

  if (!post) {
    return (
      <CenteredLayout>
        <div className="prose dark:prose-invert text-center py-16">
          <h1>Post Not Found</h1>
          <p>The blog post you’re looking for doesn’t exist.</p>
          <Link
            to="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </CenteredLayout>
    );
  }

  return (
    <CenteredLayout>
      <article className="prose dark:prose-invert max-w-3xl mx-auto py-12">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {new Date(post.date).toDateString()}
        </p>
        <p>{post.content}</p>

        <Link
          to="/blog"
          className="block mt-12 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Blog
        </Link>
      </article>
    </CenteredLayout>
  );
}
