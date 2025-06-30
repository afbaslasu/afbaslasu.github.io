// src/pages/learn/QuickStart.jsx
import React from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import Sidebar from "../../components/layout/Sidebar";
import RightNav from "../../components/layout/RightNav";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const headings = [
  { id: "setup", label: "Setting Up Your Environment" },
  { id: "create-app", label: "Creating a New React App" },
  { id: "folder-structure", label: "Understanding Folder Structure" },
  { id: "start-dev", label: "Running the Development Server" },
];

export default function QuickStart() {
  return (
    <DocsLayout leftNav={<Sidebar />} rightNav={<RightNav links={headings} />}>
      <div className="prose dark:prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-6" id="setup">
          Quick Start Guide
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The fastest way to get started with React is to use a tool like Vite.
          This guide walks you through setting up a modern development
          environment with Vite, React 19, and Tailwind CSS.
        </p>

        <h2 className="mt-10 text-2xl font-semibold mb-2" id="create-app">
          Setting Up Your Environment
        </h2>
        <p>
          Make sure you have{" "}
          <span className="text-indigo-600 font-medium">Node.js</span>{" "}
          installed. Then, run the following command to create a new app:
        </p>
        <pre>
          <code className="language-bash">
            npm create vite@latest my-app --template react
          </code>
        </pre>

        <h2 className="mt-10 text-2xl font-semibold mb-2" id="folder-structure">
          Understanding Folder Structure
        </h2>
        <p>A typical Vite + React project includes the following folders:</p>
        <ul className="list-disc pl-5">
          <li>
            <span className="font-medium text-indigo-600">src/</span>: your
            application code
          </li>
          <li>
            <span className="font-medium text-indigo-600">public/</span>: static
            assets
          </li>
          <li>
            <span className="font-medium text-indigo-600">vite.config.js</span>:
            configuration
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold mb-2" id="start-dev">
          Running the Development Server
        </h2>
        <p>
          Once your project is created, install the dependencies and start the
          development server:
        </p>
        <pre>
          <code className="language-bash">
            cd my-app npm install npm run dev
          </code>
        </pre>
        <h1 id="getting-started" className="mt-10 text-2xl font-semibold mb-2">
          Quick Start
        </h1>

        <p>
          Ready to dive into{" "}
          <span className="text-indigo-600 font-semibold">React 19</span>? This
          guide will get you up and running in no time.
        </p>

        <h2 id="creating-app" className="text-2xl font-semibold mt-10 mb-2">
          Create Your React App
        </h2>
        <p>
          We'll use <span className="text-pink-600 font-semibold">Vite</span>{" "}
          for lightning-fast development setup.
        </p>
        <pre>
          <code className="language-bash">
            npm create vite@latest my-app -- --template react cd my-app npm
            install npm run dev
          </code>
        </pre>

        <h2 id="tailwind-setup" className="text-2xl font-semibold mt-10 mb-2">
          Setting Up Tailwind CSS
        </h2>
        <p>To add Tailwind, follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <code>npm install -D tailwindcss postcss autoprefixer</code>
          </li>
          <li>
            <code>npx tailwindcss init -p</code>
          </li>
          <li>
            Update your <code>tailwind.config.js</code> to enable content
            scanning:
          </li>
        </ol>
        <pre>
          <code className="language-js">
            content: [ "./index.html", "./src/**/*.(js, ts, jsx, tsx)" ],
          </code>
        </pre>
        <p>
          Then, update your <code>src/index.css</code>:
        </p>
        <pre>
          <code className="language-css">
            @tailwind base; @tailwind components; @tailwind utilities;
          </code>
        </pre>

        <h2 id="next-steps" className="text-2xl font-semibold mt-10 mb-2">
          Next Steps
        </h2>
        <p>
          Now that you've started a project, head over to learn the mindset
          behind building React apps.
        </p>

        <div className="mt-16 flex justify-end">
          <Link
            to="/learn/thinking-in-react"
            className="inline-flex items-center gap-2 px-5 py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
          >
            Next: Thinking in React <FaArrowRight />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
