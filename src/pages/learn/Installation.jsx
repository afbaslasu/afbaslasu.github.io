// src/pages/learn/Installation.jsx
import React, { useEffect } from "react";
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
  { id: "prerequisites", label: "Prerequisites" },
  { id: "installing-node", label: "Installing Node.js" },
  { id: "creating-project", label: "Creating a React App" },
];

export default function InstallationPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(`a[href="#${id}"]`);
          if (navLink) {
            if (entry.isIntersecting) {
              navLink.classList.add("text-blue-600", "font-semibold");
            } else {
              navLink.classList.remove("text-blue-600", "font-semibold");
            }
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" }
    );

    onPageLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <DocsLayout
      sidebar={<Sidebar title="Learn" sections={sections} />}
      rightnav={<RightNav links={onPageLinks} />}
    >
      <div className="prose dark:prose-invert max-w-4xl">
        <h1 id="prerequisites">Prerequisites</h1>
        <p>
          Before installing React, make sure you have a basic understanding of
          HTML, CSS, and JavaScript. Also, ensure your system supports Node.js
          and npm.
        </p>

        <h2 id="installing-node">Installing Node.js</h2>
        <p>
          React development requires Node.js to manage packages. Visit
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            nodejs.org{" "}
          </a>
          and install the latest LTS version.
        </p>

        <h2 id="creating-project">Creating a React App</h2>
        <p>Once Node.js is installed, create a new React project using Vite:</p>
        <pre>
          <code>npm create vite@latest my-react-app -- --template react</code>
        </pre>
        <p>
          Then navigate into the folder, install dependencies, and start your
          dev server:
        </p>
        <pre>
          <code>cd my-react-app npm install npm run dev</code>
        </pre>
      </div>
    </DocsLayout>
  );
}
