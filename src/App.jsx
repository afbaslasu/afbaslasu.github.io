// App.jsx (Updated to wire all layouts, pages, routes)
import React, { Suspense, lazy } from "react";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import NotFound from "./pages/NotFound";


// Lazy-loaded route components
const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const ResumeDetail = lazy(() => import("./pages/resume/ResumeDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/blog/[slug]"));
const Learn = lazy(() => import("./pages/Learn"));
const QuickStart = lazy(() => import("./pages/learn/QuickStart"));
const Installation = lazy(() => import("./pages/learn/Installation"));
const ThinkingInReact = lazy(() => import("./pages/learn/ThinkingInReact"));
const UsingVite = lazy(() => import("./pages/learn/UsingVite"));
const DescribingTheUI = lazy(() => import("./pages/learn/DescribingTheUI"));
const Reference = lazy(() => import("./pages/Reference"));
const ComponentRef = lazy(() => import("./pages/reference/Component"));
const HooksRef = lazy(() => import("./pages/reference/Hooks"));
const ContextRef = lazy(() => import("./pages/reference/Context"));
const Community = lazy(() => import("./pages/Community"));
const Forums = lazy(() => import("./pages/community/Forums"));
const Events = lazy(() => import("./pages/community/Events"));
const Blogs = lazy(() => import("./pages/community/Blogs"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/resume-detail" element={<ResumeDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/quick-start" element={<QuickStart />} />
          <Route path="/learn/installation" element={<Installation />} />
          <Route
            path="/learn/thinking-in-react"
            element={<ThinkingInReact />}
          />
          <Route path="/learn/using-vite" element={<UsingVite />} />
          <Route
            path="/learn/describing-the-ui"
            element={<DescribingTheUI />}
          />
          <Route path="/reference" element={<Reference />} />
          <Route path="/reference/component" element={<ComponentRef />} />
          <Route path="/reference/hooks" element={<HooksRef />} />
          <Route path="/reference/context" element={<ContextRef />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/forums" element={<Forums />} />
          <Route path="/community/events" element={<Events />} />
          <Route path="/community/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}
