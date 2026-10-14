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
      {/* KPI 1: Valor em Estoque (Cyan Neon #06b6d4) */}
      <div className="bg-[#0b0f1a]/95 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 flex flex-col justify-between group hover:border-[#06b6d4]/40 hover:shadow-lg hover:shadow-[#06b6d4]/10 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300 tracking-tight">Valor Total em Estoque</span>
          <div className="p-2 rounded-xl bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20">
            <Boxes className="h-4 w-4" />
          </div>
        </div>
        <div className="my-3">
          <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white tracking-tight">
            R$ 48.240.000
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            38.450 itens de hardware em giro ativo
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#10b981] font-semibold pt-2 border-t border-white/5">
          <ArrowUpRight className="h-3.5 w-3.5" />
          <span>Cobertura Média: 34.2 dias</span>
        </div>
      </div>

      {/* KPI 2: Ruptura & Venda Perdida (Rose/Magenta Neon #f43f5e) */}
      <div className="bg-[#0b0f1a]/95 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 flex flex-col justify-between group hover:border-[#f43f5e]/40 hover:shadow-lg hover:shadow-[#f43f5e]/10 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300 tracking-tight">Risco Ruptura & Venda Perdida</span>
          <div className="p-2 rounded-xl bg-[#f43f5e]/10 text-[#f43f5e] border border-[#f43f5e]/20">
            <AlertTriangle className="h-4 w-4" />
          </div>
        </div>
        <div className="my-3">
          <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#f43f5e] tracking-tight">
            R$ 345.000 <span className="text-xs font-sans text-slate-400 font-normal">/ 30D</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Taxa de Ruptura Efetiva: 1.8% do catálogo
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#f43f5e] font-semibold pt-2 border-t border-white/5">
          <ShieldAlert className="h-3.5 w-3.5" />
          <span>12 SKUs em Risco Iminente</span>
        </div>
      </div>

      {/* KPI 3: Estoque Parado & Sobreestoque (Amber Neon #f59e0b) */}
      <div className="bg-[#0b0f1a]/95 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 flex flex-col justify-between group hover:border-[#f59e0b]/40 hover:shadow-lg hover:shadow-[#f59e0b]/10 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300 tracking-tight">Capital em Sobreestoque</span>
          <div className="p-2 rounded-xl bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
            <TrendingDown className="h-4 w-4" />
          </div>
        </div>
        <div className="my-3">
          <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#f59e0b] tracking-tight">
            R$ 3.280.000
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Excesso acima do limiar configurado (90D)
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#f59e0b] font-semibold pt-2 border-t border-white/5">
          <span>R$ 1.94M Parado (&gt;90d sem saída)</span>
        </div>
      </div>

      {/* KPI 4: Pedidos & SLA Fornecedores (Emerald Neon #10b981) */}
      <div className="bg-[#0b0f1a]/95 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 flex flex-col justify-between group hover:border-[#10b981]/40 hover:shadow-lg hover:shadow-[#10b981]/10 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300 tracking-tight">Pedidos Abertos & SLA</span>
          <div className="p-2 rounded-xl bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
            <Truck className="h-4 w-4" />
          </div>
        </div>
        <div className="my-3">
          <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#10b981] tracking-tight">
            91.4% <span className="text-xs font-sans text-slate-400 font-normal">no Prazo</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            R$ 5.620.000 em trânsito (48 Pedidos)
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#06b6d4] font-semibold pt-2 border-t border-white/5">
          <Clock className="h-3.5 w-3.5" />
          <span>Meta: 90% (Conforme Governança)</span>
        </div>
      </div>
    </div>
  );
}
