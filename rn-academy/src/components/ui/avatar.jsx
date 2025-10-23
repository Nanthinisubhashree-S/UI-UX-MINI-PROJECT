import React from "react";

export function Avatar({ src, alt, className }) {
  return (
    <div className={`inline-block rounded-full overflow-hidden ${className}`}>
      {src ? <img src={src} alt={alt} /> : <div className="bg-gray-300 w-full h-full flex items-center justify-center">{alt?.[0]}</div>}
    </div>
  );
}

export function AvatarImage({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

export function AvatarFallback({ children, className }) {
  return <div className={`bg-gray-200 text-gray-500 flex items-center justify-center ${className}`}>{children}</div>;
}