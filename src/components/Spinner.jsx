// src/components/Spinner.jsx
import React from "react";
import { ImSpinner2 } from "react-icons/im";

export default function Spinner({ size = 32, color = "text-indigo-600" }) {
  return (
    <div className="flex justify-center items-center py-8">
      <ImSpinner2 className={`animate-spin ${color}`} size={size} />
    </div>
  );
}
