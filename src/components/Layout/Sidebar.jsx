// src/components/sidebar/LearnSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { title: "Quick Start", path: "/learn/quick-start" },
  { title: "Thinking in React", path: "/learn/thinking-in-react" },
  { title: "Installation", path: "/learn/installation" },
  { title: "Using Vite", path: "/learn/using-vite" },
  { title: "Describing the UI", path: "/learn/describing-the-ui" },
];

export default function Sidebar() {
  return (
    <nav className="text-sm space-y-2">
      <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
        Learn React
      </h2>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-indigo-800 ${
                  isActive
                    ? "bg-indigo-200 dark:bg-indigo-700 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
