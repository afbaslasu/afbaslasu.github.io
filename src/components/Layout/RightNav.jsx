// src/components/layout/RightNav.jsx
import React, { useEffect, useState } from "react";

export default function RightNav({ links = [] }) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 1.0 }
    );

    const elements = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [links]);

  return (
    <div className="text-sm space-y-2 sticky top-20">
      <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
        On this page
      </h2>
      <ul className="space-y-1 text-gray-600 dark:text-gray-300">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`block hover:underline transition-colors duration-200 ${
                activeId === link.id
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : ""
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
