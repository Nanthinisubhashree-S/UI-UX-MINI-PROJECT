import React from "react";

export function Progress({ value = 0, max = 100, className }) {
  return (
    <div className={`w-full h-3 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-blue-600"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
}