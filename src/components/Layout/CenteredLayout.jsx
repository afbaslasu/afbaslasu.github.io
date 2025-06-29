// src/components/layouts/CenteredLayout.jsx
import React from "react";

export default function CenteredLayout({ children }) {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
}
