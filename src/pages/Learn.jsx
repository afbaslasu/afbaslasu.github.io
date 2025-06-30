// src/pages/Learn.jsx
import React from "react";
import DocsLayout from "../components/layout/DocsLayout";
import Sidebar from "../components/layout/Sidebar";
import RightNav from "../components/layout/RightNav";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const onPageLinks = [
  { id: "overview", label: "Overview" },
  { id: "why-learn", label: "Why Learn React?" },
  { id: "core-principles", label: "Core Principles" },
  { id: "component-thinking", label: "Component Thinking" },
  { id: "next-steps", label: "Next Steps" },
];

export default function LearnPage() {
  return (
    <DocsLayout
      leftNav={<Sidebar />}
      rightNav={<RightNav links={onPageLinks} />}
    >
      <div className="prose dark:prose-invert max-w-4xl space-y-12">
        <section id="overview">
          <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
            Welcome to the React Learning Path
          </h1>
          <p>
            The <strong className="text-indigo-500">Learn</strong> section is
            your gateway to mastering
            <code className="text-pink-500"> React 19</code>. Whether you're a
            beginner or brushing up, we guide you through core concepts, best
            practices, and the mental model of thinking in components.
          </p>
        </section>

        <section id="why-learn">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Why Learn React?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="text-indigo-500 font-medium">
                Component-Based:
              </span>{" "}
              Build encapsulated UI pieces that manage their own state.
            </li>
            <li>
              <span className="text-indigo-500 font-medium">Declarative:</span>{" "}
              Describe what you want to see, and React updates the UI
              accordingly.
            </li>
            <li>
              <span className="text-indigo-500 font-medium">Ecosystem:</span>{" "}
              Leverage powerful tools like
              <code>react-router</code>, <code>react-query</code>, and more.
            </li>
          </ul>
        </section>

        <section id="core-principles">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Core Principles
          </h2>
          <p>React revolves around a few core principles:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-pink-500">UI = f(state)</strong> – your UI
              is a function of application state.
            </li>
            <li>
              <strong className="text-pink-500">
                Unidirectional data flow
              </strong>{" "}
              – props move data down the component tree.
            </li>
            <li>
              <strong className="text-pink-500">Composition</strong> – build
              complex UIs from small components.
            </li>
          </ul>

          <pre>
            <code className="language-js">
              {`function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}`}{" "}
            </code>
          </pre>
        </section>

        <section id="component-thinking">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Component Thinking
          </h2>
          <p>
            Think of your UI as a tree of components. Break down UIs into small,
            reusable parts that can be composed together.
          </p>
          <pre>
            <code className="language-js">
              {`function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}`}{" "}
            </code>
          </pre>
        </section>

        <section id="next-steps">
          <h2 className="text-2xl font-semibold text-indigo-600">Next Steps</h2>
          <p>
            You’re ready to dive deeper! Follow the next subpage to get hands-on
            with a practical starting point.
          </p>
          <div className=" text-right">
            <Link
              to="/learn/quick-start"
              className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-md mt-4"
            >
              Quick Start <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
