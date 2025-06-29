// src/pages/community/Forums.jsx
import React, { useEffect } from "react";
import DocsLayout from "../../components/layout/DocsLayout";
import Sidebar from "../../components/layout/Sidebar";
import RightNav from "../../components/layout/RightNav";
import { FaDiscord, FaGithub, FaStackOverflow } from "react-icons/fa";

const onPageLinks = [
  { id: "join-forum", label: "Join the Forums" },
  { id: "platforms", label: "Popular Platforms" },
  { id: "best-practices", label: "Forum Best Practices" },
  { id: "get-involved", label: "Get Involved" },
];

export default function Forums() {
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
      sidebar={
        <Sidebar
          title="Community"
          sections={[
            { title: "Forums", href: "/community/forums" },
            { title: "Events", href: "/community/events" },
            { title: "Blogs", href: "/community/blogs" },
          ]}
        />
      }
      rightnav={<RightNav links={onPageLinks} />}
    >
      <div className="prose dark:prose-invert max-w-4xl space-y-10">
        <section id="join-forum">
          <h1 className="text-3xl font-bold">React Community Forums</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            The React community is rich with developers eager to support one
            another, collaborate, and learn. Forums are essential hubs where you
            can ask questions, share experiences, and get support on React
            topics.
          </p>
        </section>

        <section id="platforms">
          <h2 className="text-2xl font-semibold">Popular Platforms</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Here are the best platforms to connect with React developers
            worldwide:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="border p-4 rounded-lg shadow-sm hover:shadow-lg bg-white dark:bg-gray-800">
              <FaDiscord className="text-indigo-500 text-3xl mb-2" />
              <h3 className="font-semibold text-lg">Reactiflux Discord</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Join a real-time chat of thousands of React developers. Ask
                questions, find contributors, or just hang out.
              </p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm hover:shadow-lg bg-white dark:bg-gray-800">
              <FaGithub className="text-black dark:text-white text-3xl mb-2" />
              <h3 className="font-semibold text-lg">GitHub Discussions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Post and respond to discussions on the official React repo. This
                is where contributors and maintainers gather.
              </p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm hover:shadow-lg bg-white dark:bg-gray-800">
              <FaStackOverflow className="text-orange-500 text-3xl mb-2" />
              <h3 className="font-semibold text-lg">Stack Overflow</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ask technical questions and find answers quickly. Use the{" "}
                <code>#reactjs</code> tag to get React-specific help.
              </p>
            </div>
          </div>
        </section>

        <section id="best-practices">
          <h2 className="text-2xl font-semibold mt-10">Forum Best Practices</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong className="text-indigo-600 dark:text-indigo-400">
                Be Clear:
              </strong>{" "}
              Describe your issue precisely with enough context and code
              samples.
            </li>
            <li>
              <strong className="text-indigo-600 dark:text-indigo-400">
                Be Respectful:
              </strong>{" "}
              Remember you’re talking to people who volunteer their time to
              help.
            </li>
            <li>
              <strong className="text-indigo-600 dark:text-indigo-400">
                Search First:
              </strong>{" "}
              See if your question has already been asked or answered.
            </li>
          </ul>
        </section>

        <section id="get-involved">
          <h2 className="text-2xl font-semibold mt-10">Get Involved Today</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Participating in forums not only helps others — it also helps you
            grow. Whether you're a beginner or advanced, everyone has something
            to contribute.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Don't forget to explore the{" "}
            <a
              href="/community/events"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              events
            </a>{" "}
            section to find upcoming React meetups and conferences where you can
            meet other devs in person.
          </p>
        </section>
      </div>
    </DocsLayout>
  );
}
