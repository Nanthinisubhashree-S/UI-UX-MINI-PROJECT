import React, { useState } from "react";

export function Tabs({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children, className }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ children, active, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, active }) {
  return active ? <div className="mt-4">{children}</div> : null;
}