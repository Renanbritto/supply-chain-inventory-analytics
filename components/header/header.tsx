"use client";

import React from "react";
import { PanelLeftOpen } from "lucide-react";
import { ModuleTab, MODULES } from "@/components/sidebar/collapsible-sidebar";

interface HeaderProps {
  activeTab: ModuleTab;
  setActiveTab: (tab: ModuleTab) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export function Header({
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
}: HeaderProps) {
  const currentModule = MODULES.find((m) => m.id === activeTab);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#0b0f1a]/95 backdrop-blur-2xl shrink-0">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Lado Esquerdo: Mobile Logo + Toggle / Desktop Título */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Botão de Toggle da Sidebar no Mobile */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 transition-colors shrink-0 cursor-pointer lg:hidden"
            title="Abrir Menu Lateral"
            aria-label="Abrir Menu Lateral"
          >
            <PanelLeftOpen className="w-5 h-5 text-rose-400" />
          </button>

          {/* Logo no Mobile */}
          <div className="flex lg:hidden items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-[#0c101d] border border-rose-500/30 shadow-md shadow-rose-500/10 overflow-hidden flex items-center justify-center shrink-0">
              <img
                src="/rn_logo_emblem.jpg"
                alt="RN Intelligence"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-extrabold text-white tracking-wider">
                SUPPLY CHAIN
              </span>
              <span className="text-[10px] text-slate-400">RN Intelligence</span>
            </div>
          </div>

          {/* Título do Módulo no Desktop */}
          <div className="hidden lg:flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-rose-400">
                Módulo 0{currentModule?.num}:
              </span>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                {currentModule?.label}
              </h2>
            </div>
            <span className="text-[11px] text-slate-400">
              Power BI &bull; Star Schema Dimensional &bull; 170+ Medidas DAX
            </span>
          </div>
        </div>

        {/* Lado Direito: Seletor Rápido de Módulos & Badges */}
        <div className="flex items-center gap-2.5">
          {/* Seletor Mobile em Dropdown estilizado */}
          <div className="lg:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as ModuleTab)}
              className="bg-[#090d16] border border-white/10 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-200 outline-none focus:border-rose-500 transition-colors cursor-pointer"
            >
              {MODULES.map((mod) => (
                <option key={mod.id} value={mod.id} className="bg-[#0b0f1a] text-slate-200">
                  0{mod.num}. {mod.label}
                </option>
              ))}
            </select>
          </div>

          {/* Badge Indicador de Governança / Tempo Real no Desktop */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass-pill">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-emerald-300 font-semibold">
              D-Day Engine Ativo
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}