import React from "react";

export function Button({ children, variant, size, className, ...props }) {
  let base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  if (variant === "outline") base += " border border-current bg-transparent";
  if (variant === "secondary") base += " bg-gray-200 text-gray-900";
  if (size === "lg") base += " px-6 py-3 text-lg";
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}