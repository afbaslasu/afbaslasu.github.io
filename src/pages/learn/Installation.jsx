// src/pages/learn/Installation.jsx
import React from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import Sidebar from "../../components/layout/Sidebar";
import RightNav from "../../components/layout/RightNav";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const headings = [
  { id: "intro", label: "Introduction" },
  { id: "setup-env", label: "Setting up the Environment" },
  { id: "install-react", label: "Installing React with Vite" },
  { id: "tailwind-setup", label: "Tailwind CSS Setup" },
  { id: "next-steps", label: "Next Steps" },
];

export default function Installation() {
  return (
    <DocsLayout leftNav={<Sidebar />} rightNav={<RightNav links={headings} />}>
      <div className="prose dark:prose-invert max-w-4xl">
        <h1 id="intro" className="mb-4">
          Installation
        </h1>
        <p className="mb-6">
          This guide walks you through setting up a modern React environment
          using Vite, with optional Tailwind CSS integration. By the end, you'll
          be ready to begin building your first component-driven UI.
        </p>

        <h2 id="setup-env" className="mb-2">
          Setting up the Environment
        </h2>
        <p className="mb-4">
          Ensure you have{" "}
          <span className="text-indigo-600 font-semibold">Node.js</span> and{" "}
          <span className="text-indigo-600 font-semibold">npm</span> installed.
          You can verify by running:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>node -v npm -v</code>
        </pre>

        <h2 id="install-react" className="mb-2">
          Installing React with Vite
        </h2>
        <p className="mb-4">To bootstrap a React project using Vite:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>
            npm create vite@latest my-react-app -- --template react cd
            my-react-app npm install npm run dev
          </code>
        </pre>

        <h2 id="tailwind-setup" className="mb-2">
          Tailwind CSS Setup
        </h2>
        <p className="mb-4">
          Tailwind CSS is a utility-first framework that works great with React.
          To install it:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
          <code>
            npm install -D tailwindcss postcss autoprefixer npx tailwindcss init
            -p
          </code>
        </pre>
        <p className="mb-4">
          Then update your <code>tailwind.config.js</code> file:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
          <code>{`content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"]`}</code>
        </pre>
        <p className="mb-4">
          Add the Tailwind directives to your <code>index.css</code>:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>
            @tailwind base; @tailwind components; @tailwind utilities;
          </code>
        </pre>

        <h2 id="next-steps" className="mb-2">
          Next Steps
        </h2>
        <p className="mb-6">
          You are now ready to build your first React components. Continue with
          the next section to learn how to think in React and design component
          hierarchies.
        </p>

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
