// src/pages/learn/ThinkingInReact.jsx
import React from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import Sidebar from "../../components/layout/Sidebar";
import RightNav from "../../components/layout/RightNav";

export default function ThinkingInReactPage() {
  const headings = [
    { id: "component-hierarchy", text: "Component Hierarchy" },
    { id: "build-static", text: "Build a Static Version" },
    { id: "state-location", text: "Determine State Location" },
    { id: "add-inverse-data-flow", text: "Add Inverse Data Flow" },
    { id: "final-thoughts", text: "Final Thoughts" },
  ];

  return (
    <DocsLayout
      leftNav={<Sidebar />}
      rightNav={<RightNav headings={headings} />}
    >
      <article className="prose dark:prose-invert max-w-none">
        <h1>Thinking in React</h1>

        <h2 id="component-hierarchy">Component Hierarchy</h2>
        <p>
          The first step to building a React app is to break down the UI into a
          hierarchy of components. Each component should ideally represent one
          logical piece of the user interface. Start with a static mock and draw
          boxes around each component, identifying their parent-child
          relationships.
        </p>

        <h2 id="build-static">Build a Static Version</h2>
        <p>
          Build components that render the UI using props to pass data. Avoid
          using any interactivity at this stage. Focus on getting the structure
          and layout right before handling any state or behavior.
        </p>

        <h2 id="state-location">Determine State Location</h2>
        <p>
          Decide where your state should live. Identify every piece of data that
          can change over time. Find the closest common ancestor of all
          components that need that piece of state, and move the state there.
        </p>
        <p>
          Use lifting state up to move state to higher-level components when
          necessary. This helps ensure that the right parts of your app update
          when data changes.
        </p>

        <h2 id="add-inverse-data-flow">Add Inverse Data Flow</h2>
        <p>
          In React, data flows from parent to child via props. If a child
          component needs to communicate back to its parent, you can pass a
          callback function down as a prop. This is called "inverse data flow"
          and is essential for managing interactions between components.
        </p>

        <h2 id="final-thoughts">Final Thoughts</h2>
        <p>
          Thinking in React is about modularity and clarity. Start with the data
          model, organize the UI hierarchy, and move step by step into
          interactivity. Keeping components small and focused makes your UI
          easier to understand and maintain.
        </p>
      </article>
    </DocsLayout>
  );
}
