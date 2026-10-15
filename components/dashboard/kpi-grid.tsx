"use client";

import React from "react";
import {
  Boxes,
  AlertTriangle,
  TrendingDown,
  Truck,
  ArrowUpRight,
  ShieldAlert,
  Clock,
} from "lucide-react";

export function KpiGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {/* KPI 1: Valor em Estoque (Cyan / Electric Blue) */}
      <div className="liquid-glass-card rounded-2xl p-5 flex flex-col justify-between group hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 tracking-tight">Valor Total em Estoque</span>
          <div className="p-2.5 rounded-2xl bg-[#0c101d] border border-cyan-500/30 text-cyan-400 shadow-md shadow-cyan-500/10">
            <Boxes className="h-4 w-4" />
          </div>
        </div>
        <div className="my-3">
          <div className="text-2xl sm:text-3xl font-mono font-extrabold text-cyan-300 tracking-tight">
            R$ 48.240.000
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            38.450 itens de hardware em giro ativo
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold pt-2 border-t border-white/5">
          <ArrowUpRight className="h-3.5 w-3.5" />
          <span>Cobertura Média: 34.2 dias</span>
        </div>
      </div>

      {/* KPI 2: Ruptura & Venda Perdida (Rose / Neon Crimson - Acento Primário) */}
      <div className="liquid-glass-card rounded-2xl p-5 flex flex-col justify-between group hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 tracking-tight">Risco Ruptura & Venda Perdida</span>
          <div className="p-2.5 rounded-2xl bg-[#0c101d] border border-rose-500/30 text-rose-400 shadow-md shadow-rose-500/10">
            <AlertTriangle className="h-4 w-4" />
          </div>
        </div>
        <div className="my-3">
          <div className="text-2xl sm:text-3xl font-mono font-extrabold text-rose-300 tracking-tight">
            R$ 345.000 <span className="text-xs font-sans text-slate-400 font-normal">/ 30D</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Taxa de Ruptura Efetiva: 1.8% do catálogo
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-rose-300 font-semibold pt-2 border-t border-white/5">
          <ShieldAlert className="h-3.5 w-3.5" />
          <span>12 SKUs em Risco Iminente</span>
        </div>
      </div>

      {/* KPI 3: Estoque Parado & Sobreestoque (Amber / Neon Gold) */}
      <div className="liquid-glass-card rounded-2xl p-5 flex flex-col justify-between group hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 tracking-tight">Capital em Sobreestoque</span>
          <div className="p-2.5 rounded-2xl bg-[#0c101d] border border-amber-500/30 text-amber-400 shadow-md shadow-amber-500/10">
            <TrendingDown className="h-4 w-4" />
          </div>
        </div>
        <div className="my-3">
          <div className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-300 tracking-tight">
            R$ 3.280.000
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Excesso acima do limiar configurado (90D)
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold pt-2 border-t border-white/5">
          <span>R$ 1.94M Parado (&gt;90d sem saída)</span>
        </div>
      </div>

      {/* KPI 4: Pedidos & SLA Fornecedores (Emerald / Mint Green) */}
      <div className="liquid-glass-card rounded-2xl p-5 flex flex-col justify-between group hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 tracking-tight">Pedidos Abertos & SLA</span>
          <div className="p-2.5 rounded-2xl bg-[#0c101d] border border-emerald-500/30 text-emerald-400 shadow-md shadow-emerald-500/10">
            <Truck className="h-4 w-4" />
          </div>
        </div>
        <div className="my-3">
          <div className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-300 tracking-tight">
            91.4% <span className="text-xs font-sans text-slate-400 font-normal">no Prazo</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            R$ 5.620.000 em trânsito (48 Pedidos)
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-semibold pt-2 border-t border-white/5">
          <Clock className="h-3.5 w-3.5" />
          <span>Meta: 90% (Conforme Governança)</span>
        </div>
      </div>
    </div>
  );
}