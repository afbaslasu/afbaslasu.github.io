// src/pages/Learn.jsx
import React from "react";
import DocsLayout from "../components/layout/DocsLayout";
import Sidebar from "../components/layout/Sidebar";
import RightNav from "../components/layout/RightNav";

const sections = [
  {
    title: "Quick Start",
    href: "/learn/quick-start",
  },
  {
    title: "Thinking in React",
    href: "/learn/thinking-in-react",
  },
  {
    title: "Installation",
    href: "/learn/installation",
  },
  {
    title: "Using Vite",
    href: "/learn/using-vite",
  },
];

const onPageLinks = [
  { id: "overview", label: "Overview" },
  { id: "why-learn", label: "Why Learn React?" },
  { id: "how-to-navigate", label: "How to Navigate" },
];

export default function LearnPage() {
  return (
    <>
      <Sidebar></Sidebar>
      <DocsLayout
        sidebar={<Sidebar title="Learn" sections={sections} />}
        rightnav={<RightNav links={onPageLinks} />}
      >
        <div className="prose dark:prose-invert max-w-4xl">
          <h1 id="overview">Welcome to the React Learning Path</h1>
          <p>
            This section is your gateway to mastering React. It’s designed to
            help you understand not only the syntax, but the thinking model
            behind how React applications are built.
          </p>

          <h2 id="why-learn">Why Learn React?</h2>
          <p>
            React is one of the most popular JavaScript libraries for building
            modern, component-driven web applications. With React, you can build
            user interfaces that are fast, reusable, and maintainable.
          </p>

          <h2 id="how-to-navigate">How to Navigate This Guide</h2>
          <p>
            The Learn section is divided into practical tutorials. Each topic
            builds on the previous one to help you steadily gain confidence. Use
            the left sidebar to navigate major topics and the right sidebar to
            jump between subtopics.
          </p>
        </div>
        
      </DocsLayout>
      
      
    </>
  );
}
