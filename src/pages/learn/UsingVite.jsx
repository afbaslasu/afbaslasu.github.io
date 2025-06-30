// src/pages/learn/UsingVite.jsx
import React from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import Sidebar from "../../components/layout/Sidebar";
import RightNav from "../../components/layout/RightNav";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const headings = [
  { id: "vite-intro", label: "Why Use Vite?" },
  { id: "setup-vite", label: "Setting Up Vite in React 19" },
  { id: "vite-benefits", label: "Vite Benefits" },
  { id: "vite-tailwind", label: "Adding Tailwind CSS" },
];

export default function UsingVite() {
  return (
    <DocsLayout leftNav={<Sidebar />} rightNav={<RightNav links={headings} />}>
      <div className="prose dark:prose-invert max-w-4xl">
        <h1 id="vite-intro" className="mb-4">
          Using Vite with React
        </h1>
        <p className="mb-6">
          <span className="text-indigo-600 font-semibold">Vite</span> is a
          next-generation frontend tool that provides lightning-fast development
          and optimized builds. It works seamlessly with{" "}
          <span className="text-indigo-600 font-semibold">React 19</span> and
          modern libraries like{" "}
          <span className="text-indigo-600 font-semibold">Tailwind CSS</span>.
        </p>

        <h2 id="setup-vite" className="mb-2">
          Setting Up Vite in React 19
        </h2>
        <p className="mb-4">
          You can create a new Vite + React project by running:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>npm create vite@latest my-app -- --template react</code>
        </pre>
        <p className="mb-6">Then install dependencies and start development:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>{`cd my-app
npm install
npm run dev`}</code>
        </pre>

        <h2 id="vite-benefits" className="mb-2">
          Vite Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
          <li>⚡ Fast cold starts and hot module replacement</li>
          <li>📦 Native ES Module support</li>
          <li>🧪 Optimized build pipeline with Rollup</li>
          <li>🔌 Easy integration with plugins and frameworks</li>
        </ul>

        <h2 id="vite-tailwind" className="mb-2">
          Adding Tailwind CSS
        </h2>
        <p className="mb-4">Install Tailwind and dependencies:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</code>
        </pre>

        <p className="mb-4">
          Configure <code>tailwind.config.js</code> content:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>{`content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],`}</code>
        </pre>

        <p className="mb-6">
          Then import Tailwind in your <code>index.css</code>:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
        </pre>

        <div className="mt-10 flex justify-end">
          <Link
            to="/learn/describing-the-ui"
            className="inline-flex items-center gap-2 text-indigo-600 hover:underline text-lg"
          >
            Next: Describing the UI <FaArrowRight />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
