// src/pages/learn/UsingVite.jsx
import React, { useEffect, useState } from "react";
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
  { id: "why-vite", label: "Why Vite?" },
  { id: "vite-setup", label: "Setting Up with Vite" },
  { id: "customizing", label: "Customizing the Setup" },
];

export default function UsingVitePage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <DocsLayout
      sidebar={<Sidebar title="Learn" sections={sections} />}
      rightnav={<RightNav links={onPageLinks} />}
    >
      <div className="prose dark:prose-invert max-w-4xl">
        <h1 id="why-vite">Why Vite?</h1>
        <p>
          Vite is a fast, opinionated build tool that dramatically improves the
          development experience. It leverages native ES modules and provides
          near-instant HMR.
        </p>

        <h2 id="vite-setup">Setting Up with Vite</h2>
        <p>To set up a new React project using Vite, run:</p>
        <pre>
          <code>npm create vite@latest my-vite-app -- --template react</code>
        </pre>
        <p>Then install dependencies and start your dev server:</p>
        <pre>
          <code>cd my-vite-app npm install npm run dev</code>
        </pre>

        <h2 id="customizing">Customizing the Setup</h2>
        <p>
          You can enhance the setup by adding Tailwind CSS, ESLint, Prettier,
          and React Router. Vite is highly extensible and has a thriving plugin
          ecosystem.
        </p>
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-3 py-2 rounded shadow hover:bg-blue-700"
        >
          ↑ Top
        </button>
      )}
    </DocsLayout>
  );
}
