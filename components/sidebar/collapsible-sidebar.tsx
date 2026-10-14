"use client";

import React from "react";
import {
  BarChart3,
  Boxes,
  Layers,
  Truck,
  Sliders,
  Zap,
  PanelLeftClose,
  PanelLeftOpen,
  Users,
} from "lucide-react";

export type ModuleTab = "visao_geral" | "cobertura" | "abc" | "fornecedores" | "simulador" | "dax";

export interface NavItem {
  id: ModuleTab;
  num: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const MODULES: NavItem[] = [
  { id: "visao_geral", num: 1, label: "Visão Geral & Gráficos", icon: BarChart3 },
  { id: "cobertura", num: 2, label: "Ruptura, Cobertura & D-Day", icon: Boxes },
  { id: "abc", num: 3, label: "Curva ABC & Estoque Parado", icon: Layers },
  { id: "fornecedores", num: 4, label: "SLA & Pedidos Fornecedores", icon: Truck },
  { id: "simulador", num: 5, label: "Simulador What-If Estoque", icon: Sliders },
  { id: "dax", num: 6, label: "Engenharia DAX & Modelagem", icon: Zap },
];

interface CollapsibleSidebarProps {
  activeTab: ModuleTab;
  setActiveTab: (tab: ModuleTab) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function CollapsibleSidebar({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
}: CollapsibleSidebarProps) {
  return (
    <>
      {/* Backdrop no mobile para fechar sidebar quando expandida */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200"
        />
      )}

      {/* Sidebar Retrátil: Inicia FECHADA/RECOLHIDA por padrão (w-20), expande para w-72 */}
      <aside
        className={`flex flex-col bg-[#0b0f1a]/95 backdrop-blur-2xl border-r border-white/10 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 shrink-0 ${
          isOpen
            ? "fixed inset-y-0 left-0 w-72 shadow-2xl md:relative md:shadow-none"
            : "hidden md:flex md:w-20"
        }`}
      >
        {/* Topo da Sidebar: Emblema Oficial RN Intelligence */}
        <div
          className={`h-20 flex items-center px-4 border-b border-white/10 shrink-0 ${
            isOpen ? "justify-between" : "justify-center"
          }`}
        >
          {isOpen ? (
            <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap animate-in fade-in duration-200">
              <div className="w-10 h-10 rounded-2xl bg-[#090d16] border border-[#06b6d4]/40 overflow-hidden flex items-center justify-center shrink-0 shadow-lg shadow-[#06b6d4]/10">
                <img
                  src="/rn_logo_emblem.jpg"
                  alt="RN Intelligence"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-bold text-white tracking-tight leading-tight">
                  Supply Chain
                </h1>
                <span className="text-[11px] text-slate-400 font-medium">
                  RN Intelligence
                </span>
              </div>
            </div>
          ) : (
            <div
              className="w-11 h-11 rounded-2xl bg-[#090d16] border border-[#06b6d4]/30 overflow-hidden flex items-center justify-center shrink-0 shadow-lg shadow-[#06b6d4]/10 group cursor-pointer hover:border-[#06b6d4] transition-colors"
              onClick={() => setIsOpen(true)}
              title="Expandir Menu Lateral"
            >
              <img
                src="/rn_logo_emblem.jpg"
                alt="RN Intelligence"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Botão de Toggle da Sidebar */}
          {isOpen && (
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors shrink-0 cursor-pointer border border-transparent hover:border-white/5"
              title="Recolher Menu (PanelLeftClose)"
              aria-label="Recolher Menu Lateral"
            >
              <PanelLeftClose className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Toggle quando recolhida (abaixo do emblema) */}
        {!isOpen && (
          <div className="py-2.5 flex justify-center border-b border-white/5 shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-xl text-slate-400 hover:text-[#06b6d4] hover:bg-white/[0.06] transition-all cursor-pointer border border-transparent hover:border-[#06b6d4]/20"
              title="Expandir Menu Lateral (PanelLeftOpen)"
              aria-label="Expandir Menu Lateral"
            >
              <PanelLeftOpen className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Navegação entre os 6 Módulos */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 space-y-1.5">
          {isOpen ? (
            <div className="px-3 pt-1 pb-2 text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Módulos Analíticos
            </div>
          ) : (
            <div className="w-6 h-px bg-white/10 mx-auto my-2" />
          )}

          {MODULES.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (typeof window !== "undefined" && window.innerWidth < 768) {
                    setIsOpen(false);
                  }
                }}
                title={!isOpen ? `${tab.num}. ${tab.label}` : undefined}
                className={`w-full flex items-center rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer group ${
                  isOpen ? "gap-3 px-3.5 py-2.5" : "justify-center p-3"
                } ${
                  isActive
                    ? "bg-gradient-to-r from-[#06b6d4]/15 to-blue-500/10 text-[#06b6d4] font-semibold shadow-xs border border-[#06b6d4]/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent hover:border-white/5"
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? "text-[#06b6d4]" : "text-slate-400 group-hover:text-[#06b6d4]"
                  }`}
                />
                {isOpen && (
                  <span className="whitespace-nowrap transition-all duration-300">
                    {tab.label}
                  </span>
                )}
                {isActive && isOpen && (
                  <div className="ml-auto w-1.5 h-4 bg-[#06b6d4] rounded-full shrink-0 shadow-sm shadow-[#06b6d4]/50" />
                )}
              </button>
            );
          })}
        </div>

        {/* Base da Sidebar: Governança / Supply Chain */}
        <div className="p-4 border-t border-white/10 shrink-0">
          {isOpen ? (
            <div className="flex items-center gap-3 animate-in fade-in duration-200">
              <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-[#06b6d4]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white">Supply Chain</span>
                <span className="text-[10px] text-slate-400">Diretoria de Operações</span>
              </div>
            </div>
          ) : (
            <div
              className="flex justify-center cursor-pointer text-slate-400 hover:text-[#06b6d4] transition-colors"
              title="Diretoria de Operações • Supply Chain"
            >
              <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-[#06b6d4]" />
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
