// src/pages/learn/ThinkingInReact.jsx
import React from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import RightNav from "../../components/layout/RightNav";
import Sidebar from "../../components/layout/Sidebar";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const headings = [
  { id: "intro", label: "Introduction" },
  { id: "steps", label: "Step-by-Step Process" },
  { id: "benefits", label: "Benefits of Thinking in React" },
  { id: "break-ui", label: "1. Break the UI into a Component Hierarchy" },
  { id: "static-version", label: "2. Build a Static Version in React" },
  {
    id: "identify-state",
    label: "3. Identify the Minimal Representation of UI State",
  },
  { id: "state-owner", label: "4. Identify Where Your State Should Live" },
  { id: "inverse-data", label: "5. Add Inverse Data Flow" },
];

export default function ThinkingInReact() {
  return (
    <DocsLayout leftNav={<Sidebar />} rightNav={<RightNav links={headings} />}>
      <div className="prose dark:prose-invert max-w-4xl">
        <h1 id="intro" className="text-3xl font-extrabold text-indigo-600 mb-4">
          Thinking in React
        </h1>
        <p className="mb-6">
          This guide is designed to help you think about building user
          interfaces using React. Instead of jumping directly into code, we
          break down the process of designing a UI into 5 practical steps. These
          steps will help you translate a design into reusable, stateful
          components.
        </p>
        <p className="mb-6">
          React encourages a modular way of thinking about UI. Rather than
          constructing pages with large templates, we break the UI down into
          small reusable
          <span className="text-indigo-600 font-medium"> components</span>.
        </p>

        <h2
          id="steps"
          className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 mt-10"
        >
          Step-by-Step Process
        </h2>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Break the UI into a component hierarchy.</li>
          <li>Build a static version in React.</li>
          <li>
            Identify the minimal (but complete) representation of UI state.
          </li>
          <li>Identify where your state should live.</li>
          <li>Add inverse data flow.</li>
        </ol>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <code className="text-sm">
            {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
          </code>
        </div>

        <h2
          id="benefits"
          className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 mt-10"
        >
          Benefits of Thinking in React
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-10 text-gray-700 dark:text-gray-300">
          <li>Encourages clean code and separation of concerns.</li>
          <li>Enhances reusability of UI elements.</li>
          <li>Makes it easier to maintain and test components.</li>
          <li>Promotes predictable and declarative UI logic.</li>
        </ul>

        <h2 id="break-ui" className="mb-2 font-medium">
          1. Break the UI into a Component Hierarchy
        </h2>
        <p className="mb-4">
          Imagine you’re building a product table. Start by drawing boxes around
          every component and naming them. This helps to isolate parts of the UI
          and decide which component should be responsible for each part.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
          <li>
            <span className="text-indigo-600 font-medium">
              FilterableProductTable
            </span>{" "}
            (orange): contains the entire example
          </li>
          <li>
            <span className="text-indigo-600 font-medium">SearchBar</span>{" "}
            (blue): receives all user input
          </li>
          <li>
            <span className="text-indigo-600 font-medium">ProductTable</span>{" "}
            (green): displays and filters the data collection
          </li>
          <li>
            <span className="text-indigo-600 font-medium">
              ProductCategoryRow
            </span>{" "}
            (turquoise): displays a heading for each category
          </li>
          <li>
            <span className="text-indigo-600 font-medium">ProductRow</span>{" "}
            (red): displays a row for each product
          </li>
        </ul>

        <h2 id="static-version" className="mb-2 font-medium">
          2. Build a Static Version in React
        </h2>
        <p className="mb-6">
          Use props to pass data down from parent to child. Don’t use state yet.
          This phase is purely for structure and layout.
        </p>

        <h2 id="identify-state" className="mb-2 font-medium">
          3. Identify the Minimal Representation of UI State
        </h2>
        <p className="mb-6">
          The key is to avoid duplication. Compute values when possible instead
          of storing them in state. List out all dynamic parts of the UI and
          identify the minimal state needed to represent them.
        </p>

        <h2 id="state-owner" className="mb-2 font-medium">
          4. Identify Where Your State Should Live
        </h2>
        <p className="mb-6">
          Find the common ancestor component that needs to share this state.
          This ensures the flow of data is predictable and easily traceable.
        </p>

        <h2 id="inverse-data" className="mb-2 font-medium">
          5. Add Inverse Data Flow
        </h2>
        <p className="mb-6">
          Use callback functions to send data from child to parent. This
          completes the circle, enabling full communication between components.
        </p>

        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6">
          <code>{`function SearchBar({ filterText, inStockOnly, onFilterTextChange }) {
  return (
    <input
      type="text"
      value={filterText}
      onChange={(e) => onFilterTextChange(e.target.value)}
    />
  );
}`}</code>
        </pre>

        <div className="flex items-center justify-end mt-12">
          <Link
            to="/learn/installation"
            className="inline-flex items-center text-indigo-600 hover:underline text-lg font-medium"
          >
            Next: Installation <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
