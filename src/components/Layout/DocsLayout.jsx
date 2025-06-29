// src/components/layouts/DocsLayout.jsx
import React from "react";

export default function DocsLayout({ leftNav, rightNav, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_200px] gap-6 px-4 py-6">
      {/* Left Sidebar */}
      <aside className="hidden md:block sticky top-20 self-start">
        {leftNav}
      </aside>

      {/* Main Content */}
      <main className="min-w-0">{children}</main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block sticky top-20 self-start">
        {rightNav}
      </aside>
    </div>
  );
}
