// src/pages/learn/QuickStart.jsx
import React from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import Sidebar from "../../components/layout/Sidebar";
import RightNav from "../../components/layout/RightNav";

const sections = [
  { title: "Quick Start", href: "/learn/quick-start" },
  { title: "Thinking in React", href: "/learn/thinking-in-react" },
  { title: "Installation", href: "/learn/installation" },
  { title: "Using Vite", href: "/learn/using-vite" },
];

const onPageLinks = [
  { id: "setup", label: "Project Setup" },
  { id: "first-component", label: "Your First Component" },
  { id: "what-next", label: "What Next?" },
];

export default function QuickStartPage() {
  return (
    <DocsLayout
      sidebar={<Sidebar title="Learn" sections={sections} />}
      rightnav={<RightNav links={onPageLinks} />}
    >
      <div className="prose dark:prose-invert max-w-4xl">
        <h1 id="setup">Project Setup</h1>
        <p>
          The quickest way to get started with React is using a build tool like{" "}
          <strong>Vite</strong>. Run the following command to scaffold a new
          project:
        </p>
        <pre>
          <code>npm create vite@latest my-app -- --template react</code>
        </pre>
        <p>
          Navigate into your project folder, install dependencies, and start the
          development server:
        </p>
        <pre>
          <code>cd my-app npm install npm run dev</code>
        </pre>

        <h2 id="first-component">Your First Component</h2>
        <p>
          React applications are built with components. Here’s a simple example
          of a component:
        </p>
        <pre>
          <code>{`function Welcome() {
  return <h1>Hello, world!</h1>;
}`}</code>
        </pre>
        <p>
          You can include this in your <code>App.jsx</code> and render it inside
          the root div.
        </p>

        <h2 id="what-next">What Next?</h2>
        <p>
          After setting up your first component, explore topics like JSX, props,
          state, and effects to build dynamic interfaces.
        </p>
      </div>
    </DocsLayout>
  );
}
