"use client";

import React from "react";

interface ExportButtonProps {
  onExport: () => void;
}

export function ExportButton({ onExport }: ExportButtonProps) {
  return (
    <button onClick={onExport} className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
      Exportieren
    </button>
  );
}