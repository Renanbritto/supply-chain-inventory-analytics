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
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0b0f1a]/95 backdrop-blur-2xl shrink-0">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Lado Esquerdo: Mobile Logo + Toggle / Desktop Título */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Botão de Toggle da Sidebar no Mobile */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors shrink-0 cursor-pointer md:hidden border border-white/10"
            title="Abrir Menu Lateral"
            aria-label="Abrir Menu Lateral"
          >
            <PanelLeftOpen className="w-5 h-5 text-[#06b6d4]" />
          </button>

          {/* Logo no Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#090d16] border border-[#06b6d4]/40 overflow-hidden flex items-center justify-center shrink-0">
              <img
                src="/rn_logo_emblem.jpg"
                alt="RN Intelligence"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold text-white tracking-tight truncate">
              Supply Chain
            </span>
          </div>

          {/* Título do Módulo no Desktop */}
          <div className="hidden md:flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#06b6d4]">
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

        {/* Lado Direito: Seletor Rápido de Módulos (Ultra-limpo no mobile e desktop) */}
        <div className="flex items-center gap-2">
          {/* Seletor Mobile em Dropdown estilizado */}
          <div className="md:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as ModuleTab)}
              className="bg-[#090d16] border border-white/10 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-200 outline-none focus:border-[#06b6d4] transition-colors cursor-pointer"
            >
              {MODULES.map((mod) => (
                <option key={mod.id} value={mod.id} className="bg-[#0b0f1a] text-slate-200">
                  0{mod.num}. {mod.label}
                </option>
              ))}
            </select>
          </div>

          {/* Badge Indicador de Governança / Tempo Real no Desktop */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-[11px] font-mono text-slate-300">
              D-Day Engine Ativo
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
