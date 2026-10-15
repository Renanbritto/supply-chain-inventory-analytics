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
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type ModuleTab = "visao_geral" | "cobertura" | "abc" | "fornecedores" | "simulador" | "dax";

export interface NavItem {
  id: ModuleTab;
  num: number;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  activeBg: string;
}

export const MODULES: NavItem[] = [
  {
    id: "visao_geral",
    num: 1,
    label: "Visão Geral & Gráficos",
    description: "Cobertura & Saúde do Estoque",
    icon: BarChart3,
    iconColor: "text-cyan-400",
    activeBg: "bg-cyan-500/15 border-cyan-500/40 text-cyan-300",
  },
  {
    id: "cobertura",
    num: 2,
    label: "Ruptura, Cobertura & D-Day",
    description: "Fila de Reposição Crítica",
    icon: Boxes,
    iconColor: "text-rose-400",
    activeBg: "bg-rose-500/15 border-rose-500/40 text-rose-300",
  },
  {
    id: "abc",
    num: 3,
    label: "Curva ABC & Estoque Parado",
    description: "Pareto & Capital Parado",
    icon: Layers,
    iconColor: "text-amber-400",
    activeBg: "bg-amber-500/15 border-amber-500/40 text-amber-300",
  },
  {
    id: "fornecedores",
    num: 4,
    label: "SLA & Pedidos Fornecedores",
    description: "OTIF & Atrasos de Importação",
    icon: Truck,
    iconColor: "text-emerald-400",
    activeBg: "bg-emerald-500/15 border-emerald-500/40 text-emerald-300",
  },
  {
    id: "simulador",
    num: 5,
    label: "Simulador What-If Estoque",
    description: "Políticas Dinâmicas & Limiares",
    icon: Sliders,
    iconColor: "text-purple-400",
    activeBg: "bg-purple-500/15 border-purple-500/40 text-purple-300",
  },
  {
    id: "dax",
    num: 6,
    label: "Engenharia DAX & Modelagem",
    description: "Star Schema & 170+ Medidas",
    icon: Zap,
    iconColor: "text-purple-400",
    activeBg: "bg-purple-500/15 border-purple-500/40 text-purple-300",
  },
];

interface CollapsibleSidebarProps {
  activeTab: ModuleTab;
  setActiveTab: (tab: ModuleTab) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onOpenCopilot?: () => void;
}

export function CollapsibleSidebar({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
  onOpenCopilot,
}: CollapsibleSidebarProps) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
        />
      )}

      {/* Sidebar Retrátil: Inicia FECHADA/RECOLHIDA por padrão (w-20), expande para w-72 */}
      <aside
        className={cn(
          "shrink-0 sticky top-0 h-screen flex-col justify-between border-r border-white/10 bg-[#0b0f1a]/95 backdrop-blur-2xl z-40 overflow-y-auto no-scrollbar shadow-2xl transition-all duration-300 ease-in-out",
          isOpen
            ? "fixed inset-y-0 left-0 w-72 lg:relative p-5 flex"
            : "hidden lg:flex w-20 p-3"
        )}
      >
        <div className="flex flex-col gap-5">
          {/* Brand Header */}
          <div
            className={cn(
              "flex items-center pb-4 border-b border-white/10 transition-all",
              !isOpen ? "justify-center flex-col gap-3" : "justify-between"
            )}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="h-11 w-11 rounded-2xl bg-[#0c101d] border border-rose-500/30 flex items-center justify-center shadow-lg shadow-rose-500/10 overflow-hidden shrink-0 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                title={!isOpen ? "Expandir Menu Lateral" : undefined}
              >
                <img
                  src="/rn_logo_emblem.jpg"
                  alt="RN Intelligence"
                  className="w-full h-full object-cover"
                />
              </div>
              {isOpen && (
                <div className="flex flex-col min-w-0">
                  <span className="font-extrabold text-base tracking-wider text-white">
                    SUPPLY CHAIN
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium truncate">
                    RN Intelligence Analytics
                  </span>
                </div>
              )}
            </div>

            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 transition-all cursor-pointer",
                !isOpen && "w-10 h-10 flex items-center justify-center"
              )}
              title={isOpen ? "Recolher menu" : "Expandir menu"}
              aria-label={isOpen ? "Recolher menu" : "Expandir menu"}
            >
              {isOpen ? (
                <PanelLeftClose className="h-4 w-4" />
              ) : (
                <PanelLeftOpen className="h-4 w-4 text-rose-400" />
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-col gap-1.5">
            {/* Botão Executivo RN Intelligence Copilot */}
            {onOpenCopilot && (
              <button
                type="button"
                onClick={onOpenCopilot}
                title={!isOpen ? "RN Intelligence Copilot" : undefined}
                className={cn(
                  "group relative w-full flex items-center transition-all border cursor-pointer mb-2 overflow-hidden",
                  !isOpen
                    ? "justify-center p-2.5 rounded-2xl bg-gradient-to-br from-rose-500/20 via-amber-500/10 to-rose-950/20 border-rose-500/40 text-rose-300 shadow-md shadow-rose-500/10"
                    : "justify-between p-3 rounded-2xl bg-gradient-to-r from-rose-500/20 via-rose-500/10 to-transparent border-rose-500/35 hover:border-rose-500/60 text-left shadow-lg shadow-rose-500/10"
                )}
              >
                <div className={cn("flex items-center min-w-0", !isOpen ? "justify-center" : "gap-3")}>
                  <div className="p-2 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 shrink-0">
                    <MessageSquare className="h-4 w-4 text-rose-300 group-hover:scale-110 transition-transform" />
                  </div>
                  {isOpen && (
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-white tracking-wide">
                        RN Intelligence
                      </span>
                      <span className="text-[10px] text-rose-300/80 font-medium truncate">
                        Copilot de Supply Chain
                      </span>
                    </div>
                  )}
                </div>
              </button>
            )}

            {isOpen && (
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 px-2 mb-1">
                Módulos
              </span>
            )}

            {MODULES.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id);
                    if (typeof window !== "undefined" && window.innerWidth < 1024) {
                      setIsOpen(false);
                    }
                  }}
                  title={!isOpen ? `${item.num}. ${item.label}` : undefined}
                  className={cn(
                    "group w-full flex items-center transition-all border cursor-pointer",
                    !isOpen
                      ? "justify-center p-2.5 rounded-2xl"
                      : "justify-between p-3 rounded-2xl text-left",
                    isActive
                      ? item.activeBg + " shadow-lg"
                      : "bg-white/[0.01] hover:bg-white/[0.04] text-slate-400 hover:text-slate-100 border-transparent hover:border-white/5"
                  )}
                >
                  <div className={cn("flex items-center min-w-0", !isOpen ? "justify-center" : "gap-3")}>
                    <div
                      className={cn(
                        "p-2 rounded-xl border transition-colors shrink-0",
                        isActive
                          ? "bg-white/10 border-white/20 text-white"
                          : "bg-white/[0.02] border-white/5 text-slate-400 group-hover:text-slate-200"
                      )}
                    >
                      <Icon className={cn("h-4 w-4", isActive ? item.iconColor : "")} />
                    </div>
                    {isOpen && (
                      <div className="flex flex-col min-w-0">
                        <span
                          className={cn(
                            "text-xs font-bold truncate",
                            isActive ? "text-white" : "text-slate-300"
                          )}
                        >
                          {item.label}
                        </span>
                        <span className="text-[10px] text-slate-400 truncate">
                          {item.description}
                        </span>
                      </div>
                    )}
                  </div>
                  {isOpen && (
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform",
                        isActive
                          ? "text-white translate-x-0.5 opacity-100"
                          : "text-slate-600 opacity-0 group-hover:opacity-100"
                      )}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10 mt-auto">
          {isOpen && (
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-1 text-[11px]">
              <div className="flex justify-between text-slate-400">
                <span>Catálogo Ativo:</span>
                <span className="font-mono font-semibold text-slate-200">38.450 SKUs</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Itens em Risco:</span>
                <span className="font-mono font-semibold text-rose-300">12 SKUs</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>SLA Global:</span>
                <span className="font-mono font-semibold text-emerald-300">91.4%</span>
              </div>
            </div>
          )}

          <a
            href="https://github.com/Renanbritto/supply-chain-inventory-analytics"
            target="_blank"
            rel="noreferrer"
            title="Repositório GitHub"
            className={cn(
              "flex items-center rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 transition-colors shadow-sm cursor-pointer",
              !isOpen ? "justify-center p-2.5" : "justify-center gap-2 p-2.5"
            )}
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            {isOpen && <span>Repositório GitHub</span>}
          </a>
        </div>
      </aside>
    </>
  );
}