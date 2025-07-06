// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 py-6 text-sm text-gray-500 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
              Docs
            </h4>
            <ul className="space-y-1">
              <li>
                <Link to="/learn" className="hover:underline">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/reference" className="hover:underline">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
              Community
            </h4>
            <ul className="space-y-1">
              <li>
                <Link to="/community" className="hover:underline">
                  Overview
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/reactjs"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/reactiflux"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reactiflux Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
              More
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://react.dev"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react.dev
                </a>
              </li>
              <li>
                <a
                  href="https://legacy.reactjs.org"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  legacy.reactjs.org
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/reactjs/react.dev"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} React Clone. Built with ❤️ by{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              Ismail Ibadehin
            </span>{" "}
            (CEO smileLink Inc.).
          </p>
        </div>
      </div>
    </footer>
  );
}
