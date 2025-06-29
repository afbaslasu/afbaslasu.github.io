// src/pages/Community.jsx
import React, { useEffect } from "react";
import DocsLayout from "../components/layout/DocsLayout";
import Sidebar from "../components/layout/Sidebar";
import RightNav from "../components/layout/RightNav";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const sections = [
  { title: "Forums", href: "/community/forums" },
  { title: "Events", href: "/community/events" },
  { title: "Blogs", href: "/community/blogs" },
];

const onPageLinks = [
  { id: "intro-community", label: "Why Community Matters" },
  { id: "forum-overview", label: "Forums & Help" },
  { id: "contribute", label: "Contributing" },
  { id: "events", label: "Events & Meetups" },
  { id: "getting-started", label: "Getting Involved" },
];

export default function CommunityPage() {
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
      sidebar={<Sidebar title="Community" sections={sections} />}
      rightnav={<RightNav links={onPageLinks} />}
    >
      <div className="prose dark:prose-invert max-w-4xl space-y-10">
        <h1
          id="intro-community"
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Welcome to the React <span className="text-blue-600">Community</span>
        </h1>
        <p>
          The React community is a vibrant ecosystem of developers,
          contributors, maintainers, and learners working together to build the
          future of the web. Everyone is welcome, regardless of experience
          level.
        </p>

        <h2
          id="forum-overview"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Forums & Help
        </h2>
        <p>Need help or want to help others? Join one of the many forums:</p>
        <ul className="list-disc list-inside">
          <li>
            <a
              className="text-blue-600 underline"
              href="https://discord.gg/reactiflux"
              target="_blank"
            >
              Reactiflux Discord
            </a>{" "}
            – Chat with React devs in real-time
          </li>
          <li>
            <a
              className="text-blue-600 underline"
              href="https://stackoverflow.com/questions/tagged/reactjs"
              target="_blank"
            >
              Stack Overflow
            </a>{" "}
            – Ask & answer coding questions
          </li>
          <li>
            <a
              className="text-blue-600 underline"
              href="https://github.com/facebook/react/discussions"
              target="_blank"
            >
              GitHub Discussions
            </a>{" "}
            – Discuss features, bugs, and ideas
          </li>
        </ul>

        <h2
          id="contribute"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Contributing
        </h2>
        <p>
          Whether you're fixing a typo, reporting a bug, or contributing to the
          React codebase itself, every contribution helps!
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
          <code>{`// Example contribution
1. Fork the React repo
2. Make your change
3. Open a pull request`}</code>
        </pre>

        <h2
          id="events"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Events & Meetups
        </h2>
        <p>
          Stay connected and inspired by attending or organizing React meetups
          and conferences around the world:
        </p>
        <ul className="list-disc list-inside">
          <li>React Conf</li>
          <li>React Summit</li>
          <li>Local tech community events</li>
        </ul>

        <h2
          id="getting-started"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Getting Involved
        </h2>
        <p>Here are some simple ways to start:</p>
        <ul className="list-disc list-inside">
          <li>Improve documentation or tutorials</li>
          <li>Answer questions on forums</li>
          <li>Submit PRs to ecosystem libraries</li>
        </ul>

        <div className="mt-12 flex justify-end items-center gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Next:</span>
          <NavLink
            to="/community/forums"
            className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
          >
            Forums <FaArrowRight className="ml-1" />
          </NavLink>
        </div>
      </div>
    </DocsLayout>
  );
}
