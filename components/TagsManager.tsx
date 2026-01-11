"use client";

import React from "react";

interface TagsManagerProps {
  contact: {
    tags: string[];
  };
}

export function TagsManager({ contact }: TagsManagerProps) {
  return (
    <div className="mt-4">
      <h3 className="text-lg">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {contact.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}