// src/pages/Reference.jsx
import React from "react";
import DocsLayout from "../components/layout/DocsLayout";
import RightNav from "../components/layout/RightNav";
import { NavLink, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const sections = [
  { title: "Component", path: "/reference/component" },
  { title: "Hooks", path: "/reference/hooks" },
  { title: "Context", path: "/reference/context" },
];

const onPageLinks = [
  { id: "overview", text: "Overview" },
  { id: "core-concepts", text: "Core Concepts" },
  { id: "api-design", text: "API Design Principles" },
  { id: "interactive-docs", text: "Interactive Examples" },
  { id: "best-practices", text: "Best Practices" },
];

function ReferenceSidebar() {
  return (
    <nav className="text-sm space-y-4">
      <h2 className="text-base font-semibold text-gray-900 dark:text-white">
        React API Reference
      </h2>
      <ul className="border-l border-gray-300 dark:border-gray-700 pl-4 space-y-2">
        {sections.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function ReferencePage() {
  return (
    <DocsLayout
      leftNav={<ReferenceSidebar />}
      rightNav={<RightNav headings={onPageLinks} />}
    >
      <div className="prose prose-blue dark:prose-invert max-w-4xl">
        <h1 id="overview" className="text-3xl font-bold mb-4">
          React Reference
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This guide provides{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            in-depth documentation
          </span>{" "}
          for core React APIs with interactive examples and best practices.
        </p>

        <section className="mt-10 space-y-4">
          <h2
            id="core-concepts"
            className="text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Core Concepts
          </h2>
          <p>
            React encourages you to build UI using{" "}
            <span className="font-medium text-indigo-600">composable</span> and
            <span className="font-medium text-indigo-600">
              {" "}
              reusable components
            </span>
            . These components can accept input (<code>props</code>) and manage
            internal state.
          </p>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300">
            <li>
              <strong className="text-indigo-600">Declarative:</strong> Write
              code that describes the UI at any point in time
            </li>
            <li>
              <strong className="text-indigo-600">Component-Based:</strong>{" "}
              Build encapsulated components that manage their own state
            </li>
            <li>
              <strong className="text-indigo-600">
                Unidirectional Data Flow:
              </strong>{" "}
              Data flows from parent to child
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-4">
          <h2
            id="api-design"
            className="text-2xl font-semibold text-gray-900 dark:text-white"
          >
            API Design Principles
          </h2>
          <p>
            React’s APIs are designed to be{" "}
            <span className="text-indigo-600 font-medium">composable</span>,
            <span className="text-indigo-600 font-medium"> flexible</span>, and{" "}
            <span className="text-indigo-600 font-medium">intuitive</span>:
          </p>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300">
            <li>
              <code>useState</code> – Add state to components
            </li>
            <li>
              <code>useEffect</code> – Handle side effects like data fetching
            </li>
            <li>
              <code>useContext</code> – Share global data across the component
              tree
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-4">
          <h2
            id="interactive-docs"
            className="text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Interactive Examples
          </h2>
          <p>
            Learn by exploring interactive code examples and real-world
            patterns:
          </p>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300">
            <li>
              <NavLink
                to="/reference/component"
                className="text-indigo-600 hover:underline"
              >
                Component
              </NavLink>{" "}
              – The foundation of React apps
            </li>
            <li>
              <NavLink
                to="/reference/hooks"
                className="text-indigo-600 hover:underline"
              >
                Hooks
              </NavLink>{" "}
              – Functional patterns for state and lifecycle
            </li>
            <li>
              <NavLink
                to="/reference/context"
                className="text-indigo-600 hover:underline"
              >
                Context
              </NavLink>{" "}
              – Avoid prop drilling by sharing values deeply
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-4">
          <h2
            id="best-practices"
            className="text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Best Practices
          </h2>
          <p>To ensure maintainability and performance:</p>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300">
            <li>Use functional components and hooks</li>
            <li>Co-locate state and logic with components</li>
            <li>
              Leverage memoization with <code>React.memo</code> and{" "}
              <code>useCallback</code>
            </li>
          </ul>
        </section>

        <div className="mt-12 text-right">
          <Link
            to="/reference/component"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-base"
          >
            Next: Components <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
