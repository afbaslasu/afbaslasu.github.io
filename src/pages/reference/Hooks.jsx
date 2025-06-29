// src/pages/reference/Hooks.jsx
import React, { useEffect } from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import Sidebar from "../../components/layout/Sidebar";
import RightNav from "../../components/layout/RightNav";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const sections = [
  { title: "Component", path: "/reference/component" },
  { title: "Hooks", path: "/reference/hooks" },
  { title: "Context", path: "/reference/context" },
];

const onPageLinks = [
  { id: "intro", label: "What are Hooks?" },
  { id: "why-hooks", label: "Why Hooks?" },
  { id: "basic-hooks", label: "Basic Hooks" },
  { id: "custom-hooks", label: "Custom Hooks" },
];

export default function HooksReferencePage() {
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
      sidebar={<Sidebar title="Reference" sections={sections} />}
      rightnav={<RightNav headings={onPageLinks} />}
    >
      <div className="prose dark:prose-invert max-w-4xl space-y-8">
        <h1
          id="intro"
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          What are <span className="text-indigo-600">Hooks</span>?
        </h1>
        <p>
          <span className="font-semibold text-indigo-600">Hooks</span> let you
          use state and other React features without writing a class. They
          simplify your component logic and make your code more reusable.
        </p>

        <h2
          id="why-hooks"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Why Hooks?
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Hooks eliminate the need for classes.</li>
          <li>They let you reuse stateful logic across components.</li>
          <li>Hooks simplify component composition.</li>
        </ul>

        <h2
          id="basic-hooks"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Basic Hooks
        </h2>
        <p>
          React provides several built-in hooks like <code>useState</code>,{" "}
          <code>useEffect</code>, and <code>useContext</code>.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
}`}</code>
        </pre>

        <h2
          id="custom-hooks"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Custom Hooks
        </h2>
        <p>
          You can build your own hooks to share reusable logic between
          components.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}`}</code>
        </pre>

        <div className="mt-12 flex justify-end items-center gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Next:</span>
          <NavLink
            to="/reference/context"
            className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline"
          >
            Context <FaArrowRight className="ml-1" />
          </NavLink>
        </div>
      </div>
    </DocsLayout>
  );
}
