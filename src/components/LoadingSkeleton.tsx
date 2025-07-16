import React from 'react';

export const LoadingSkeleton = () => (
  <div className="animate-pulse space-y-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="h-4 w-1/2 bg-gray-300 rounded" />
    ))}
  </div>
);
