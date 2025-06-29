// src/pages/NotFound.jsx
import React from "react";
import CenteredLayout from "../components/layout/CenteredLayout";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <CenteredLayout>
      <div className="prose dark:prose-invert text-center py-20">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Homepage
        </Link>
      </div>
    </CenteredLayout>
  );
}
