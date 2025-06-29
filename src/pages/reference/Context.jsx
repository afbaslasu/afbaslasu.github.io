// src/pages/reference/Context.jsx
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
  { id: "intro", label: "What is Context?" },
  { id: "when-use", label: "When to Use Context" },
  { id: "creating", label: "Creating Context" },
  { id: "using", label: "Using Context" },
  { id: "example", label: "Full Example" },
];

export default function ContextReferencePage() {
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
          Understanding <span className="text-indigo-600">Context</span> in
          React
        </h1>
        <p>
          The <span className="font-semibold text-indigo-600">Context API</span>{" "}
          provides a way to pass data through the component tree without having
          to pass props down manually at every level.
        </p>

        <h2 id="when-use" className="text-2xl font-semibold">
          When to Use Context
        </h2>
        <p>
          Use context when you need to share data that can be considered
          "global" for a tree of React components, such as the current
          authenticated user, theme, or preferred language.
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Current authenticated user</li>
          <li>UI theme (light/dark)</li>
          <li>Localization settings</li>
        </ul>

        <h2 id="creating" className="text-2xl font-semibold">
          Creating a Context
        </h2>
        <p>
          Use <code>React.createContext()</code> to create a context object.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`const ThemeContext = React.createContext('light');`}</code>
        </pre>

        <h2 id="using" className="text-2xl font-semibold">
          Using Context
        </h2>
        <p>
          To use a context, wrap a component tree with the{" "}
          <code>Context.Provider</code> and consume the context using{" "}
          <code>useContext()</code>.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={\`btn \${theme}-theme\`}>Theme is {theme}</button>;
}`}</code>
        </pre>

        <h2 id="example" className="text-2xl font-semibold">
          Full Example with Custom Context
        </h2>
        <p>
          This example shows a basic counter with context for global state
          management:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`const CountContext = React.createContext();

function CounterProvider({ children }) {
  const [count, setCount] = React.useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function CounterDisplay() {
  const { count } = useContext(CountContext);
  return <p>Current count: {count}</p>;
}

function IncrementButton() {
  const { setCount } = useContext(CountContext);
  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}

function App() {
  return (
    <CounterProvider>
      <CounterDisplay />
      <IncrementButton />
    </CounterProvider>
  );
}`}</code>
        </pre>

        <div className="mt-12 flex justify-end items-center gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Next:</span>
          <NavLink
            to="/community"
            className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline"
          >
            Community <FaArrowRight className="ml-1" />
          </NavLink>
        </div>
      </div>
    </DocsLayout>
  );
}
