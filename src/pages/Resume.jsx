import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaMedal,
  FaMoon,
  FaSun,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TABS = [
  { key: "education", label: "Education", icon: <FaGraduationCap /> },
  { key: "experience", label: "Experience", icon: <FaBriefcase /> },
  { key: "skills", label: "Skills", icon: <FaTools /> },
  { key: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { key: "references", label: "References", icon: <FaMedal /> },
];

const SKILLS = [
  { name: "HTML", level: 100 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "Google Workspace App", level: 95 },
  { name: "Microsoft Office", level: 95 },
  { name: "Adobe Illustrator", level: 90 },
  { name: "Photoshop", level: 75 },
  { name: "Node.js", level: 90 },
  { name: "MongoDB", level: 80 },
  { name: "Git/Github", level: 95 },
  { name: "Vercel/Firebase", level: 95 },
];

export default function ResumePro() {
  const [active, setActive] = useState("education");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-6 md:px-16 lg:px-48 transition-colors">
      {/* Header */}
      <div className="relative text-center mb-4">
        {/* Theme & Print Controls */}
        <div className="absolute top-0 right-0 flex space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:ring"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={handlePrint}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:ring"
          >
            Print
          </button>
        </div>
        <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-500 p-1 rounded-full">
          <img
            src="/public/images/ismail-ibadehin-pics.png"
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-white"
          />
          <span
            className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"
            title="Available"
          ></span>
        </div>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-wide">
          Ismail Ibadehin
        </h1>
        <div className="flex justify-center mt-2 space-x-2">
          {["Teacher", "Writer", "Web Dev", "Designer"].map((role) => (
            <span
              key={role}
              className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-full text-sm"
            >
              {role}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-6 text-sm">
          <div className="flex items-center space-x-1">
            <FaPhoneAlt />
            <span>08160175628</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span>afbaslasu@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>Kubwa, Abuja</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`flex items-center space-x-1 px-4 py-2 font-medium text-sm rounded-lg transition-shadow ${
              active === tab.key
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 shadow-sm hover:ring"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Cards */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {active === "education" && (
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Education Timeline</h2>
            <ul className="relative border-l-2 border-indigo-300 dark:border-indigo-600 ml-4">
              {[
                {
                  year: "2003–2007",
                  title: "Agricultural Engineering",
                  place: "Univ. of Ilorin",
                },
                {
                  year: "2001–2002",
                  title: "System Management",
                  place: "Computer City College",
                },
                {
                  year: "2014–2015",
                  title: "Python Programming",
                  place: "Aptech Center",
                },
                {
                  year: "2017–2018",
                  title: "MS Office Specialist",
                  place: "Udemy (Virtual)",
                },
                {
                  year: "2015–2016",
                  title: "Web Design & Dev",
                  place: "Aptech, Lekki",
                },
                {
                  year: "2019–2020",
                  title: "Advanced Web Design",
                  place: "MIT (Virtual)",
                },
              ].map((edu, idx) => (
                <li key={idx} className="mb-6 ml-6">
                  <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full text-white">
                    <FaGraduationCap />
                  </span>
                  <p className="font-bold">{edu.year}</p>
                  <p>{edu.title}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {edu.place}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {active === "experience" && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                period: "2022–2023",
                role: "Maths/ICT Teacher",
                org: "Abraham Lincoln Academy",
              },
              {
                period: "2021–2022",
                role: "Maths/ICT Teacher",
                org: "Cradle2Harvard College",
              },
              {
                period: "2018–2021",
                role: "Maths/Physics Teacher",
                org: "Surestart High School",
              },
              {
                period: "2016–2018",
                role: "Mathematics Teacher",
                org: "Wellington College",
              },
              {
                period: "2011–2014",
                role: "Mathematics Teacher",
                org: "Deniz Intl. School",
              },
              {
                period: "2009–2011",
                role: "Assistant Supervisor",
                org: "NikkyPearl Interiors",
              },
              {
                period: "2008–2009",
                role: "Asst. Maths Lecturer",
                org: "Bida Polytechnic (NYSC)",
              },
              {
                period: "2001–2003",
                role: "Maths/Science Teacher",
                org: "Ikhwan N&P School",
              },
            ].map((job, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-lg transition transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-indigo-600 font-semibold">{job.period}</p>
                <h3 className="mt-1 font-bold text-gray-800 dark:text-gray-200">
                  {job.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {job.org}
                </p>
              </motion.div>
            ))}
          </div>
        )}
        {active === "skills" && (
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Skill Proficiency</h2>
            {SKILLS.map((sk, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{sk.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {sk.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${sk.level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-indigo-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {active === "projects" && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "SmileLink Inc.",
                desc: "Educational Platform",
                period: "2019–2020",
              },
              { title: "Surestart", desc: "School Website", period: "2021" },
              {
                title: "Cradle2Harvard",
                desc: "School Website",
                period: "2021",
              },
            ].map((proj, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-lg transition transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">
                    {proj.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-indigo-200 rounded-full text-xs">
                    {proj.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {proj.desc}
                </p>
              </motion.div>
            ))}
          </div>
        )}
        {active === "references" && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mrs. Ngozi Victor Ikpo",
                role: "Head of School",
                org: "Surestart Schools",
                contact: "08034530217",
              },
              {
                name: "Phrank Shaibu",
                role: "C S.A(Atiku Abubakar)/Proprietor",
                org: "Cradle2Harvard College",
                contact: "08031964937",
              },
              {
                name: "Dr. Jimoh Garba",
                role: "Senior Specialist",
                org: "Chevron Ltd., Nigeria",
                contact: "08057388759",
              },
            ].map((ref, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-lg transition transform hover:-translate-y-1"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {ref.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {ref.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {ref.org || ""}
                </p>
                <p className="mt-2 text-indigo-600 dark:text-indigo-300 font-medium">
                  {ref.contact}
                </p>
                {ref.email && (
                  <p className="text-indigo-600 dark:text-indigo-300 underline text-sm">
                    {ref.email}
                  </p>
                )}
                {ref.link && (
                  <a
                    href={ref.link}
                    className="text-indigo-600 dark:text-indigo-300 underline text-sm"
                  >
                    {ref.link.replace(/https?:\/\//, "")}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Next Arrow */}
      <div className="text-center mt-12">
        <a
          href="https://portfolioresume-iota.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-flex items-center font-bold text-indigo-700 hover:text-indigo-900"
        >
          <span>Detail Resume</span>
          <FaArrowRight className="ml-1 text-sm" />
        </a>
        {/* <Link
          to="https://portfolioresume-iota.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <span>View Achievement</span>
          <FaArrowRight />
        </Link> */}
      </div>
    </div>
  );
}
