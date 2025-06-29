// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import CenteredLayout from "../components/layout/CenteredLayout";
import { Link } from "react-router-dom";
import GalleryShowcase from "../components/GalleryShowcase";

export default function Home() {
  return (
    <CenteredLayout>
      <section className="prose dark:prose-invert text-center max-w-3xl mx-auto py-16">
        <h1 className="text-4xl font-bold">Welcome to ReactClone</h1>
        <p className="text-lg mt-4">
          A modern guide to building user interfaces with React 19 and modern
          tools like Vite, Tailwind CSS, and more. Learn the principles behind
          the framework powering the web's most interactive experiences.
        </p>

        <div className="mt-10 space-x-4">
          <Link
            to="/learn"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
          >
            Start Learning
          </Link>
          <Link
            to="/reference"
            className="bg-gray-300 hover:bg-gray-400 text-black dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 px-6 py-3 rounded-lg text-lg"
          >
            Browse API
          </Link>
        </div>

        {/* <div className="mt-16">
          <img
            src="https://placehold.co/700x300"
            alt="Illustration showing React components"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div> */}
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">
            Build Modern UIs with ReactClone
          </h1>
          <p className="text-xl mb-8">
            A React 19 guide and toolkit inspired by React.dev, optimized with
            Tailwind CSS and Vite.
          </p>
          <div className="space-x-4">
            <Link
              to="/learn"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition"
            >
              Get Started
            </Link>
            <Link
              to="/reference"
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              API Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Highlights */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose ReactClone?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Built on React 19",
              "Dark Mode Out of the Box",
              "Scalable Layouts",
            ].map((feature, i) => (
              <motion.div
                key={feature}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Everything you need to build lightning-fast interfaces using
                  the newest React APIs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery with Scroll Animation */}
      <GalleryShowcase />

      {/* Services with Alternating Design */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          {[
            {
              title: "Enterprise React Consulting",
              desc: "Partner with senior engineers to scale your React applications with performance and maintainability in mind.",
              img: "https://placehold.co/600x400/blue/white?text=Consulting",
            },
            {
              title: "Custom Component Design",
              desc: "Get beautifully designed and accessible React component libraries tailor-made for your needs.",
              img: "https://placehold.co/600x400/indigo/white?text=Design",
            },
          ].map((svc, idx) => (
            <div
              key={svc.title}
              className={`flex flex-col lg:flex-row ${
                idx % 2 ? "lg:flex-row-reverse" : ""
              } mb-12 items-center`}
            >
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full lg:w-1/2 h-72 object-cover rounded-xl shadow-md"
              />
              <div className="lg:w-1/2 lg:pl-10 py-6">
                <h3 className="text-2xl font-semibold mb-4">{svc.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table - World Class Design */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$29/mo",
                features: [
                  "1 Project",
                  "Community Support",
                  "Starter Templates",
                ],
              },
              {
                name: "Pro",
                price: "$79/mo",
                features: [
                  "10 Projects",
                  "Priority Support",
                  "Access to Pro Templates",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom Quote",
                features: [
                  "Unlimited Projects",
                  "Dedicated Support",
                  "Custom Features",
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-8 shadow-md"
              >
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-extrabold text-blue-600 mb-6">
                  {plan.price}
                </p>
                <ul className="mb-6 space-y-2 text-left">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center">
                      <span className="text-blue-500 mr-2">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
                  Choose {plan.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </CenteredLayout>
  );
}
