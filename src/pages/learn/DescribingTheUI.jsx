// src/pages/learn/DescribingTheUI.jsx
import React from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import Sidebar from "../../components/layout/Sidebar";
import RightNav from "../../components/layout/RightNav";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const headings = [
  { id: "describing-ui", label: "Describing the UI" },
  { id: "data-to-ui", label: "1. Mapping Data to UI" },
  { id: "jsx-structure", label: "2. Structuring with JSX" },
  { id: "styling-elements", label: "3. Styling Elements" },
  { id: "using-props", label: "4. Using Props to Describe UI" },
  { id: "conditionals", label: "5. Conditional Rendering" },
];

export default function DescribingTheUI() {
  return (
    <DocsLayout leftNav={<Sidebar />} rightNav={<RightNav links={headings} />}>
      <div className="prose dark:prose-invert max-w-4xl">
        <h1
          id="describing-ui"
          className="mb-4 text-indigo-600 font-bold text-3xl"
        >
          Describing the UI
        </h1>
        <p className="mb-6">
          In React, the UI is a function of your data. You describe what the UI
          should look like for any given state of your application using{" "}
          <span className="text-indigo-600 font-semibold">JSX</span>. React
          takes care of updating the DOM efficiently when your data changes.
        </p>

        <h2 id="data-to-ui" className="mb-2 text-indigo-600 semi-bold text-2xl">
          1. Mapping Data to UI
        </h2>
        <p className="mb-4">
          Data-driven UIs begin with representing your app's state as data, then
          mapping that data into elements.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>{`const users = ["Ada", "Grace", "Linus"];

function UserList() {
  return (
    <ul>
      {users.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}`}</code>
        </pre>

        <h2
          id="jsx-structure"
          className="mb-2 text-indigo-600 semi-bold text-2xl"
        >
          2. Structuring with JSX
        </h2>
        <p className="mb-6">
          JSX is a syntax extension for JavaScript that looks similar to HTML.
          It lets you structure your UI in a way that's easy to understand.
        </p>

        <h2
          id="styling-elements"
          className="mb-2 text-indigo-600 semi-bold text-2xl"
        >
          3. Styling Elements
        </h2>
        <p className="mb-4">
          React supports inline styles, CSS classes, and utility-first CSS
          frameworks like{" "}
          <span className="text-indigo-600 font-semibold">Tailwind CSS</span>.
          Here's an example with Tailwind:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>{`function Alert() {
  return <div className="bg-red-100 text-red-800 p-4 rounded">Error occurred!</div>;
}`}</code>
        </pre>

        <h2
          id="using-props"
          className="mb-2 text-indigo-600 semi-bold text-2xl"
        >
          4. Using Props to Describe UI
        </h2>
        <p className="mb-6">
          Props let you pass information into components, allowing for dynamic
          rendering.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>{`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}`}</code>
        </pre>

        <h2
          id="conditionals"
          className="mb-2 text-indigo-600 semi-bold text-2xl"
        >
          5. Conditional Rendering
        </h2>
        <p className="mb-6">
          React allows you to render different UIs based on conditions using
          JavaScript logic.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>{`function Status({ isLoading }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <p>Data loaded.</p>;
}`}</code>
        </pre>

        <div className="mt-10 flex justify-end">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-indigo-600 hover:underline text-lg"
          >
            Back to Learn Overview <FaArrowRight />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
