import React, { useState } from "react";

export function ImageWithFallback({ src, alt, className }) {
  const [imgError, setImgError] = useState(false);
  return imgError ? (
    <div className={`bg-gray-200 ${className} flex items-center justify-center`}>
      <span className="text-gray-500">{alt}</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
    />
  );
}