import React from "react";

export function Card({ children, className, ...props }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
}