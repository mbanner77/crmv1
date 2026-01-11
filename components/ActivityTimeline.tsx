"use client";

import React from "react";

interface ActivityTimelineProps {
  contact: {
    activities: string[];
  };
}

export function ActivityTimeline({ contact }: ActivityTimelineProps) {
  return (
    <div className="mt-4">
      <h3 className="text-lg">Aktivitäten</h3>
      <ul>
        {contact.activities.map((activity, index) => (
          <li key={index} className="p-2 border-b border-gray-200 dark:border-gray-700">
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}