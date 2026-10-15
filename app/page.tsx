"use client";

import React, { useState } from "react";
import { CollapsibleSidebar, ModuleTab } from "@/components/sidebar/collapsible-sidebar";
import { Header } from "@/components/header/header";
import { KpiGrid } from "@/components/dashboard/kpi-grid";
import { OverviewModule } from "@/components/dashboard/overview-module";
import { RuptureDdayModule } from "@/components/dashboard/rupture-dday-module";
import { AbcCurveModule } from "@/components/dashboard/abc-curve-module";
import { SuppliersSlaModule } from "@/components/dashboard/suppliers-sla-module";
import { WhatIfSimulatorModule } from "@/components/dashboard/what-if-simulator-module";
import { DaxModelingModule } from "@/components/dashboard/dax-modeling-module";
import { CopilotFab } from "@/components/chat/copilot-fab";
import { CopilotDrawer } from "@/components/chat/copilot-drawer";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<ModuleTab>("visao_geral");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Inicia FECHADO/RECOLHIDO por padrão
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-rose-500/30 selection:text-white overflow-hidden">
      {/* 1. Menu Lateral (Sidebar) Retrátil: Inicia FECHADO (w-20), expansível para w-72 */}
      <CollapsibleSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onOpenCopilot={() => setIsCopilotOpen(true)}
      />

      {/* Conteúdo Principal (Direita) */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto relative bg-[#090d16]">
        {/* Cabeçalho Limpo */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Área Principal: 100% foco nos dados desde o primeiro scroll */}
        <main className="flex-1 w-full max-w-7xl mx-auto p-3.5 sm:p-6 lg:p-8 space-y-6 pb-28">
          {/* Grid de 4 KPIs de Alto Impacto no Topo */}
          <KpiGrid />

          {/* Módulos do Dashboard de Acordo com a Seleção */}
          <div className="w-full">
            {activeTab === "visao_geral" && <OverviewModule />}
            {activeTab === "cobertura" && <RuptureDdayModule />}
            {activeTab === "abc" && <AbcCurveModule />}
            {activeTab === "fornecedores" && <SuppliersSlaModule />}
            {activeTab === "simulador" && <WhatIfSimulatorModule />}
            {activeTab === "dax" && <DaxModelingModule />}
          </div>
        </main>

        {/* Rodapé Clean */}
        <footer className="border-t border-white/10 py-5 text-center text-xs text-slate-400 mt-auto shrink-0 bg-[#0b0f1a]/80 backdrop-blur-md">
          Supply Chain &amp; Estoque &bull; RN Intelligence &bull; Desenvolvido por{" "}
          <span className="text-cyan-400 font-semibold">Renan Nocelli</span> &bull;
          Modelagem Star Schema com 170+ Medidas DAX
        </footer>
      </div>

      {/* 2. Floating Action Button (FAB) Pílula no Canto Inferior Direito (fixed bottom-5 right-5 z-40) */}
      <CopilotFab onClick={() => setIsCopilotOpen(true)} />

      {/* 3. Drawer Lateral do Copilot de IA */}
      <CopilotDrawer
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
      />
    </div>
  );
}