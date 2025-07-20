// ✅ UPDATED NAVBAR.JSX WITH ALL FIXES
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ theme, setTheme }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  const pages = [
    { title: "Home", path: "/" },
    { title: "Resume", path: "/resume" },
    { title: "ReClone", path: "/reclone" },
    { title: "Blog", path: "/blog" },
    { title: "Learn React", path: "/learn" },
    { title: "API Reference", path: "/reference" },
    { title: "Community", path: "/community" },
  ];

  const filtered = pages.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filtered.length > 0) {
      navigate(filtered[0].path);
    }
    setShowResults(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo - fixed for all screen sizes */}
        <Link
          to="/"
          className="text-xl font-bold text-indigo-600 dark:text-indigo-300"
        >
          <img
            className="w-20 sm:w-24 md:w-28" // Responsive sizing
            src={"/images/smilelink-logo-white-bg.png"}
            alt="smilelink logo"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            to="/resume"
            className="hover:text-indigo-500 dark:text-gray-200"
          >
            Resume
          </Link>
          <Link
            to="/reclone"
            className="hover:text-indigo-500 dark:text-gray-200"
          >
            ReClone
          </Link>
          <Link
            to="/learn"
            className="hover:text-indigo-500 dark:text-gray-200"
          >
            Learn
          </Link>
          <Link
            to="/reference"
            className="hover:text-indigo-500 dark:text-gray-200"
          >
            Reference
          </Link>
          <Link
            to="/community"
            className="hover:text-indigo-500 dark:text-gray-200"
          >
            Community
          </Link>
          <Link to="/blog" className="hover:text-indigo-500 dark:text-gray-200">
            Blog
          </Link>
        </div>

        {/* Search & Theme Toggle - visible only on lg+ screens */}
        <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-sm justify-end">
          <div className="w-full relative">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                className="w-full min-w-[200px] px-3 py-2 rounded-md border border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowResults(true);
                }}
              />
            </form>
            {showResults && searchTerm && (
              <ul className="absolute left-0 mt-1 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-md shadow-lg w-full z-10">
                {filtered.map((p) => (
                  <li key={p.path}>
                    <Link
                      to={p.path}
                      className="block px-3 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                      onClick={() => setShowResults(false)}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
                {filtered.length === 0 && (
                  <li className="px-3 py-2 text-gray-500">No results</li>
                )}
              </ul>
            )}
          </div>

          {/* Fixed theme toggle implementation */}
          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="p-2 rounded-full text-gray-500 hover:text-gray-800 dark:hover:text-gray-100"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          {/* Theme toggle for mobile | className=flex items-center space-x-2 */}
          {/* <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="p-2 rounded-full text-gray-500 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button> */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-500 dark:text-gray-200"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2 bg-white dark:bg-gray-900">
          <Link
            to="/resume"
            className="block hover:text-indigo-500 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="/reclone"
            className="block hover:text-indigo-500 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            ReClone
          </Link>
          <Link
            to="/learn"
            className="block hover:text-indigo-500 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Learn
          </Link>
          <Link
            to="/reference"
            className="block hover:text-indigo-500 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Reference
          </Link>
          <Link
            to="/community"
            className="block hover:text-indigo-500 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Community
          </Link>
          <Link
            to="/blog"
            className="block hover:text-indigo-500 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}
