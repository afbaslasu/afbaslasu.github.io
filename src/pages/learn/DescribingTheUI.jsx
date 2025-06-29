// src/pages/learn/DescribingTheUI.jsx
import React from "react";
import DocsLayout from "../../components/layouts/DocsLayout";
import LearnSidebar from "../../components/Layout/Sidebar";
import RightNav from "../../components/Layout/RightNav";

export default function DescribingTheUIPage() {
  const headings = [
    { id: "jsx-overview", text: "JSX Overview" },
    { id: "embedding-expressions", text: "Embedding Expressions" },
    { id: "nesting-and-grouping", text: "Nesting and Grouping" },
    { id: "rendering-lists", text: "Rendering Lists" },
    { id: "keys-in-react", text: "Using Keys in React" },
  ];

  return (
    <DocsLayout
      leftNav={<LearnSidebar />}
      rightNav={<RightNav headings={headings} />}
    >
      <article className="prose dark:prose-invert max-w-none">
        <h1>Describing the UI</h1>

        <h2 id="jsx-overview">JSX Overview</h2>
        <p>
          React uses JSX to describe what the UI should look like. JSX allows
          you to write HTML-like code directly within JavaScript. It’s more
          readable and expressive.
        </p>

        <h2 id="embedding-expressions">Embedding Expressions</h2>
        <p>You can embed any JavaScript expression inside curly braces:</p>
        <pre>
          <code>{`const name = 'Ibadehin';
const element = <h1>Hello, {name}</h1>;`}</code>
        </pre>

        <h2 id="nesting-and-grouping">Nesting and Grouping</h2>
        <p>
          JSX elements can be nested and grouped using React fragments or a
          common wrapper:
        </p>
        <pre>
          <code>{`return (
  <>
    <h1>Hello</h1>
    <h2>World</h2>
  </>
);`}</code>
        </pre>

        <h2 id="rendering-lists">Rendering Lists</h2>
        <p>
          Use the <code>map()</code> function to render arrays in JSX:
        </p>
        <pre>
          <code>{`const items = ['One', 'Two'];
<ul>
  {items.map(item => <li key={item}>{item}</li>)}
</ul>`}</code>
        </pre>

        <h2 id="keys-in-react">Using Keys in React</h2>
        <p>
          Keys help React identify which items have changed. Use a unique,
          stable ID for each list item.
        </p>
      </article>
    </DocsLayout>
  );
}
