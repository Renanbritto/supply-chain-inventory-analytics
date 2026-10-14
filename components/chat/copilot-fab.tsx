"use client";

import React from "react";
import { MessageSquare, Sparkles } from "lucide-react";

interface CopilotFabProps {
  onClick: () => void;
}

export function CopilotFab({ onClick }: CopilotFabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-[#06b6d4] hover:from-blue-500 hover:to-[#06b6d4] text-white font-semibold text-xs shadow-2xl shadow-[#06b6d4]/25 border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      title="Abrir RN Intelligence Copilot"
      aria-label="Abrir RN Intelligence Copilot"
    >
      <div className="relative">
        <MessageSquare className="w-4 h-4 text-white group-hover:rotate-6 transition-transform" />
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
        </span>
      </div>
      <span className="font-bold tracking-tight">RN Intelligence</span>
    </button>
  );
}
