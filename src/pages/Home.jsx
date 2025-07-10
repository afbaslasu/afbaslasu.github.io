// Resume.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaCode,
  FaChartBar,
  FaUserFriends,
  FaChartLine,
  FaLaptopCode,
  FaUsers,
  FaUser,
  FaLightbulb,
  FaExternalLinkAlt,
  FaHtml5,
  FaJs,
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaHeart,
} from "react-icons/fa";

// TechBadge component definition (moved to top level)
const TechBadge = ({ icon, name, highlight = false }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`flex items-center px-4 py-2 rounded-full ${
      highlight ? "bg-indigo-100 border border-indigo-200" : "bg-gray-100"
    }`}
  >
    <span className="text-xl mr-2">{icon}</span>
    <span
      className={`font-medium ${
        highlight ? "text-indigo-700" : "text-gray-700"
      }`}
    >
      {name}
    </span>
  </motion.div>
);

const Resume = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All", icon: <FaChartBar /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "about", label: "About", icon: <FaBriefcase /> },
    { id: "skills", label: "Skills", icon: <FaTools /> },
    { id: "projects", label: "Projects", icon: <FaCode /> },
    { id: "references", label: "References", icon: <FaUserFriends /> },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 font-medium">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700 rounded-bl-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-700 rounded-tr-full opacity-20"></div>

          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                ISMAIL{" "}
                <span className="text-amber-500 tracking-wide">IBADEHIN</span>
              </h1>
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                <span className="bg-blue-600 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                  TEACHER
                </span>
                <span className="bg-blue-600 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                  WRITER
                </span>
                <span className="bg-blue-600 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                  WEB DEVELOPER
                </span>
                <span className="bg-blue-600 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                  GRAPHICS DESIGNER
                </span>
              </div>
              <p className="mt-5 max-w-2xl text-blue-100">
                I have successfully prepared over a thousand students with
                excellent results in WAEC, JAMB, IGSCE & WEB DEVT.
              </p>
            </div>

            <div className="relative">
              <div className="border-2 border-dashed rounded-xl w-32 h-32 md:w-40 md:h-40">
                <img
                  src="../src/assets/images/ismail-ibadehin-pics.png"
                  alt="ismail ibadehin"
                />
              </div>
              <div className="absolute -bottom-3 -right-2 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-bold text-sm">
                08160175628
              </div>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
          <button
            onClick={handlePrint}
            className="p-2 rounded-full bg-green-800 text-white px-4 dark:bg-gray-800 shadow hover:ring"
          >
            Print
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills Section */}
            {(activeTab === "all" || activeTab === "skills") && (
              <SectionCard title="SKILLS" icon={<FaTools />}>
                <div className="space-y-5">
                  <SkillBar
                    title="HTML"
                    percentage={95}
                    color="from-green-500 to-rose-700"
                  />
                  <SkillBar
                    title="Tailwind CSS"
                    percentage={90}
                    color="from-lime-600 to-teal-800"
                  />
                  <SkillBar
                    title="JavaScript"
                    percentage={85}
                    color="from-yellow-500 to-amber-600"
                  />
                  <SkillBar
                    title="React"
                    percentage={80}
                    color="from-emerald-800 to-emerald-500"
                  />
                  <SkillBar
                    title="Web Design"
                    percentage={85}
                    color="from-blue-500 to-indigo-600"
                  />
                  <SkillBar
                    title="Video Editing"
                    percentage={90}
                    color="from-purple-500 to-pink-600"
                  />
                  <SkillBar
                    title="Microsoft Office"
                    percentage={95}
                    color="from-red-800 to-violet-600"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <FaTools className="mr-2 text-blue-600" />
                    SOFTWARE SKILLS
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <SoftwareSkill
                      name="Photoshop"
                      abbreviation="Ps"
                      color="bg-blue-100 text-blue-800"
                    />
                    <SoftwareSkill
                      name="Illustrator"
                      abbreviation="Ai"
                      color="bg-orange-100 text-orange-800"
                    />
                    <SoftwareSkill
                      name="Excel"
                      abbreviation="XLS"
                      color="bg-green-100 text-green-800"
                    />
                  </div>
                </div>
              </SectionCard>
            )}

            {/* References Section */}
            {(activeTab === "all" || activeTab === "references") && (
              <SectionCard title="REFERENCES" icon={<FaUserFriends />}>
                <div className="space-y-6">
                  <ReferenceCard
                    name="Mrs. Ngozi Victor Ikpo"
                    position="Head of School (HOS)"
                    company="Surestart Schools, Abuja."
                    contact="08034530217"
                    link="https://surestartabuja.com"
                  />

                  <ReferenceCard
                    name="Phrank Shaibu"
                    position="S.A (Atiku Abubakar)/Proprietor"
                    company="Cradle2Harvard College"
                    contact="08031964937"
                    link="https://cradle2harvard.com"
                  />

                  <ReferenceCard
                    name="Dr. Jimoh Garba"
                    position="Senior Specialist"
                    company="Chevron Ltd., Lagos."
                    contact="08057388759"
                    link="jiga@chevron.com"
                  />
                </div>
              </SectionCard>
            )}
            {/* Projects Section */}
            {(activeTab === "all" || activeTab === "projects") && (
              <SectionCard title="PROJECT OVERVIEW" icon={<FaGithub />}>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  RECENT COMPLETED PROJECT
                </h3>

                <div className="flex flex-col gap-6">
                  <ProjectCard
                    name="afbaslasu.github.io"
                    description="Portfolio Website"
                    year="2024"
                    color="bg-sky-800"
                  />
                  <ProjectCard
                    name="Cradle2Harvard"
                    description="School Website"
                    year="2021"
                    color="bg-pink-800"
                  />
                  <ProjectCard
                    name="SURESTART"
                    description="School Website"
                    year="2020"
                    color="bg-blue-800"
                  />
                  <ProjectCard
                    name="SMILELINK INC."
                    description="Educational Website"
                    year="2019"
                    color="bg-orange-800"
                  />
                </div>
              </SectionCard>
            )}
            {(activeTab === "all" || activeTab === "projects") && (
              <SectionCard title="ADDITIONAL INFO" icon={<FaCode />}>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  MAINTENANCE PROJECT
                </h3>

                <div className="flex flex-col gap-6">
                  <ProjectCard
                    name="Abraham Lincoln"
                    description="Google WorkSpace for Education"
                    year="2023"
                    color="bg-rose-800"
                  />
                  <ProjectCard
                    name="C2Harvard"
                    description="Google WorkSpace for Education"
                    year="2021"
                    color="bg-yellow-800"
                  />
                  <ProjectCard
                    name="SURESTART"
                    description="Google WorkSpace for Education"
                    year="2020"
                    color="bg-teal-800"
                  />
                </div>
              </SectionCard>
            )}
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education Section */}
            {(activeTab === "all" || activeTab === "education") && (
              <SectionCard title="EDUCATION" icon={<FaGraduationCap />}>
                <div className="space-y-6">
                  <TimelineItem
                    period="2019 - 2020"
                    title="ADVANCE WEB DESIGN/DEVT."
                    institution="Massachusetts Institute of Technology (Virtual)"
                  />

                  <TimelineItem
                    period="2017 - 2018"
                    title="MICROSOFT OFFICE SPECIALIST"
                    institution="Udemy Academy (Virtual)"
                  />

                  <TimelineItem
                    period="2015 - 2016"
                    title="WEB DESIGN & DEVT"
                    institution="Aptech Center Lekki, Lagos."
                  />

                  <TimelineItem
                    period="2014 - 2015"
                    title="PYTHON PROGRAMMING"
                    institution="Aptech Center Lekki, Lagos."
                  />

                  <TimelineItem
                    period="2003 - 2007"
                    title="AGRICULTURAL ENGINEERING"
                    institution="University of Ilorin Ilorin, Kwara."
                  />

                  <TimelineItem
                    period="2001 - 2002"
                    title="SYSTEM MANAGEMENT"
                    institution="Computer City College Ikeja, Lagos."
                  />
                </div>
              </SectionCard>
            )}

            {/* Experience Section */}
            {(activeTab === "all" || activeTab === "experience") && (
              <SectionCard title="WORK EXPERIENCE" icon={<FaBriefcase />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ExperienceCard
                    period="2022 – 2023"
                    title="MATHS/ICT TEACHER"
                    company="Abraham Lincoln American Academy"
                    location="Maitama, Abuja"
                  />

                  <ExperienceCard
                    period="2021 – 2022"
                    title="MATHS/ICT TEACHER"
                    company="Cradle2Harvard College"
                    location="Garki, Abuja."
                  />

                  <ExperienceCard
                    period="2018 – 2021"
                    title="MATHS/PHYSICS TEACHER"
                    company="Surestart High School"
                    location="Kubwa, Abuja."
                  />

                  <ExperienceCard
                    period="2016 - 2018"
                    title="MATHEMATICS TEACHER"
                    company="Wellington College"
                    location="Lekki-Ajah, Lagos."
                  />

                  <ExperienceCard
                    period="2011 - 2014"
                    title="MATHEMATICS TEACHER"
                    company="Deniz International School"
                    location="Kola, Lagos."
                  />

                  <ExperienceCard
                    period="2009 - 2011"
                    title="ASSISTANT SUPERVISOR"
                    company="NikkyPearl Interior"
                    location="Decoration Lekki, Lagos."
                  />

                  <ExperienceCard
                    period="2008 - 2009"
                    title="ASST. MATHS LECTURER"
                    company="Bida Polytechnic (NYSC)"
                    location="Bida, Niger."
                  />

                  <ExperienceCard
                    period="2001 – 2003"
                    title="MATHS/SCIENCE TEACHER"
                    company="Ikhwan Nur. & Pry. School"
                    location="Oshodi, Lagos"
                  />
                </div>
              </SectionCard>
            )}
            {/* About Me Section */}
            {(activeTab === "all" || activeTab === "about") && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <SectionCard
                  title="ABOUT ME"
                  icon={<FaUser className="text-indigo-600" />}
                >
                  <div className="space-y-4 text-gray-700">
                    <p>
                      I am excited to express my interest in the{" "}
                      <strong className="text-indigo-700">
                        Mathematics teaching position
                      </strong>{" "}
                      at your esteemed citadel of learning. With a dynamic
                      background that spans{" "}
                      <strong className="text-indigo-700">
                        teaching, website design, and graphics design
                      </strong>
                      , I bring a unique blend of subject matter expertise and
                      technological innovation.
                    </p>

                    <div className="flex items-start mt-6">
                      <FaChartLine className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <p>
                        I have consistently achieved{" "}
                        <strong className="text-green-600">
                          excellent results
                        </strong>{" "}
                        throughout my career, preparing students across five
                        states to excel in{" "}
                        <strong className="text-green-600">
                          WAEC, UTME, and IGCSE
                        </strong>{" "}
                        examinations. My approach is rooted in a genuine passion
                        for education, where I combine enthusiasm with a
                        commitment to unlocking each student's full potential.
                      </p>
                    </div>

                    <h3 className="text-xl font-bold mt-8 mb-4 flex items-center text-indigo-800">
                      <FaLightbulb className="mr-2 text-yellow-500" />
                      Key highlights of my experience:
                    </h3>

                    <ul className="space-y-3 pl-2">
                      <motion.li
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start p-3 bg-indigo-50 rounded-lg"
                      >
                        <FaGraduationCap className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                        <span>
                          A{" "}
                          <strong className="text-indigo-700">
                            personable and dedicated teaching style
                          </strong>{" "}
                          that drives continuous student improvement
                        </span>
                      </motion.li>

                      <motion.li
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start p-3 bg-blue-50 rounded-lg"
                      >
                        <FaLaptopCode className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <span>
                          Expertise in delivering{" "}
                          <strong className="text-blue-700">
                            engaging presentations
                          </strong>{" "}
                          and integrating digital tools; proficient in
                          <span className="inline-flex flex-wrap gap-2 ml-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                              Microsoft Excel
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                              Word
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                              PowerPoint
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                              Photoshop
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                              Adobe Illustrator
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                              HTML/CSS/JS
                            </span>
                          </span>
                        </span>
                      </motion.li>

                      <motion.li
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start p-3 bg-purple-50 rounded-lg"
                      >
                        <FaChartLine className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                        <span>
                          Successful organization of advanced tutorials in{" "}
                          <strong className="text-purple-700">
                            Calculus, Advanced Statistics, and Trigonometry
                          </strong>{" "}
                          for prestigious institutions:
                          <span className="inline-flex flex-wrap gap-2 ml-2 mt-2">
                            {[
                              "Unilag",
                              "Unilorin",
                              "Bidapoly",
                              "Laspotech",
                              "Yabatech",
                            ].map((school, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full"
                              >
                                {school}
                              </span>
                            ))}
                          </span>
                        </span>
                      </motion.li>

                      <motion.li
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start p-3 bg-teal-50 rounded-lg"
                      >
                        <FaUsers className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
                        <span>
                          Pioneering{" "}
                          <strong className="text-teal-700">
                            educational technology initiatives
                          </strong>
                          :
                          <ul className="ml-5 mt-2 space-y-2 list-disc">
                            <li>
                              Join Surestart High School in 2018. Created the
                              school's website and configured Google Suite for
                              Education during the pandemic
                            </li>

                            <li>
                              Registered and configure Cradle2Harvard
                              international school on Google Workspace for
                              Education, and trained over{" "}
                              <strong className="text-teal-700">
                                100 staff members
                              </strong>{" "}
                              on how to seemlessly integrate Google Workspace
                              for Education, and technology into classroom
                            </li>
                            <li>
                              Migrate and reconfigured Abraham Lincoln American
                              Academy Google Suite from Google Enterprise to
                              Google WorkSpace for Education.
                            </li>
                          </ul>
                        </span>
                      </motion.li>
                    </ul>

                    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                      <p>
                        I invite you to explore my CV for further details about
                        my achievements:
                        <a
                          href="https://github.com/afbaslasu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center font-bold text-indigo-700 hover:text-indigo-900"
                        >
                          https://portfolio-ultra-two.vercel.app/
                          <FaExternalLinkAlt className="ml-1 text-sm" />
                        </a>
                      </p>
                      <p className="mt-2">
                        I am eager to bring my skills and dedication to your
                        school and look forward to the opportunity to discuss
                        how I can contribute to your academic community.
                      </p>
                    </div>
                  </div>
                </SectionCard>
              </motion.div>
            )}
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center text-gray-600 py-8 border-t border-gray-200 bg-gray-50"
        >
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg mb-3">
              © {new Date().getFullYear()} Ismail Ibadehin (
              <strong className="text-blue-600 font-semibold">
                CEO smileLink Inc. - 08160175628
              </strong>
              ). All rights reserved.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-4"
            >
              <FaHeart className="text-red-500 mr-2 animate-pulse" />
              <span>Made with passion for education and technology</span>
            </motion.div>

            <div className="mt-4 mb-6">
              <p className="font-medium mb-3">Designed and built with:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <TechBadge
                  icon={<FaHtml5 className="text-orange-500" />}
                  name="HTML5"
                />
                <TechBadge
                  icon={<FaJs className="text-yellow-400" />}
                  name="JavaScript"
                />
                <TechBadge
                  icon={<FaReact className="text-blue-500" />}
                  name="React"
                />
                <TechBadge
                  icon={<FaCss3Alt className="text-blue-600" />}
                  name="Tailwind CSS"
                  highlight={true}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/afbaslasu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <FaGithub className="mr-2 text-xl" />
                <span>View Full Portfolio on GitHub</span>
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Contact Me</span>
              </motion.a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              This site is continuously updated. Last deployment:{" "}
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

// Reusable Components
const SectionCard = ({ title, icon, children }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
      <h2 className="text-xl font-bold flex items-center">
        {icon && <span className="mr-2 text-blue-600">{icon}</span>}
        {title}
      </h2>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

const SkillBar = ({ title, percentage, color }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium">{title}</span>
      <span className="text-sm font-bold">{percentage}%</span>
    </div>
    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const SoftwareSkill = ({ name, abbreviation, color }) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ${color}`}
    >
      {abbreviation}
    </div>
    <span className="mt-2 text-sm font-medium">{name}</span>
  </div>
);

const TimelineItem = ({ period, title, institution }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
      <div className="w-0.5 h-full bg-gray-300 mt-1"></div>
    </div>
    <div className="pb-4">
      <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
        {period}
      </span>
      <h3 className="font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{institution}</p>
    </div>
  </div>
);

const ExperienceCard = ({ period, title, company, location }) => (
  <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 transition-all">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-extrabold text-sky-800">{title}</h3>
        <p className="text-gray-700 font-medium">{company}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
        {period}
      </span>
    </div>
  </div>
);

const ProjectCard = ({ name, description, year, color }) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
    <div className={`h-2 ${color}`}></div>
    <div className="p-5">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg">{name}</h3>
        <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
          {year}
        </span>
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

const ReferenceCard = ({
  name,
  position,
  company,
  contact,
  link,
  additionalContact,
  note,
}) => (
  <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200">
    <h3 className="font-bold">{name}</h3>
    <p className="text-gray-700">{position}</p>
    <p className="text-gray-600 text-sm">{company}</p>

    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-sm block mt-2"
      >
        {link}
      </a>
    )}

    <p className="text-gray-800 font-medium mt-2">{contact}</p>
    {additionalContact && (
      <p className="text-gray-800 text-sm">{additionalContact}</p>
    )}

    {note && (
      <div className="mt-3 bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-lg text-sm">
        {note}
      </div>
    )}
  </div>
);

export default Resume;
