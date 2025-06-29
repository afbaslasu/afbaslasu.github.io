// src/pages/reference/Component.jsx
import React, { useEffect } from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import Sidebar from "../../components/layout/Sidebar";
import RightNav from "../../components/layout/RightNav";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const sections = [
  { title: "Component", href: "/reference/component" },
  { title: "Hooks", href: "/reference/hooks" },
  { title: "Context", href: "/reference/context" },
];

const onPageLinks = [
  { id: "intro", label: "What is a Component?" },
  { id: "types", label: "Function vs Class" },
  { id: "props", label: "Using Props" },
  { id: "example", label: "Code Example" },
  { id: "advanced", label: "Advanced Pattern" },
];

export default function ComponentReferencePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(`a[href="#${id}"]`);
          if (navLink) {
            if (entry.isIntersecting) {
              navLink.classList.add("text-indigo-600", "font-semibold");
            } else {
              navLink.classList.remove("text-indigo-600", "font-semibold");
            }
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" }
    );

    onPageLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <DocsLayout
      leftNav={<Sidebar title="Reference" sections={sections} />}
      rightNav={<RightNav links={onPageLinks} />}
    >
      <div className="prose dark:prose-invert max-w-4xl space-y-10">
        <h1
          id="intro"
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          What is a <span className="text-indigo-600">Component</span>?
        </h1>
        <p>
          A <span className="font-semibold text-indigo-600">component</span> is
          a reusable piece of UI that accepts input (called{" "}
          <span className="text-indigo-600 font-medium">props</span>) and
          returns elements to render.
        </p>

        <h2
          id="types"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Function vs Class
        </h2>
        <p>
          React supports both{" "}
          <strong className="text-indigo-600">function</strong> and{" "}
          <strong className="text-indigo-600">class</strong> components.
          Function components are simpler and preferred in modern React
          development.
        </p>

        <h2
          id="props"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Using Props
        </h2>
        <p>
          <span className="font-medium text-indigo-600">Props</span> let you
          pass data into components. They are <strong>read-only</strong> and
          must not be modified.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Props are passed as attributes in JSX.</li>
          <li>They help create reusable, dynamic components.</li>
          <li>Use destructuring to access prop values inside your function.</li>
        </ul>

        <h2
          id="example"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Code Example
        </h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>;
}`}</code>
        </pre>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function App() {
  return <Welcome name="Ibadehin" />;
}`}</code>
        </pre>

        <h2
          id="advanced"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Advanced Pattern
        </h2>
        <p>
          Components can be composed, meaning you can build larger UIs from
          smaller parts. This is a powerful feature in React.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function Card({ children }) {
  return <div className="p-4 border rounded-lg shadow-md">{children}</div>;
}

function App() {
  return (
    <Card>
      <Welcome name="Ibadehin" />
    </Card>
  );
}`}</code>
        </pre>

        <div className="mt-12 flex justify-end items-center gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Next:</span>
          <NavLink
            to="/reference/hooks"
            className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline"
          >
            Hooks <FaArrowRight className="ml-1" />
          </NavLink>
        </div>
      </div>
    </DocsLayout>
  );
}
