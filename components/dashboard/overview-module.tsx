"use client";

import React from "react";
import { BarChart3, PieChart as PieChartIcon, CheckCircle2, ShieldAlert } from "lucide-react";
import { CATEGORY_CHART_DATA, STATUS_DONUT_DATA } from "@/lib/data";

export function OverviewModule() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
      {/* Gráfico 1: Cobertura por Categoria */}
      <div className="lg:col-span-2 liquid-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xl">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-cyan-400" />
                Cobertura de Estoque &amp; Capital por Categoria
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Comparativo de dias de cobertura média vs. capital financeiro alocado
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-300 px-3 py-1 rounded-full liquid-glass-pill w-fit">
              Meta: 30 a 45 dias
            </span>
          </div>

          <div className="space-y-4 mt-6">
            {CATEGORY_CHART_DATA.map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${cat.color}`} />
                    {cat.category}
                  </span>
                  <div className="flex items-center gap-4 font-mono">
                    <span className="text-slate-400 font-semibold">
                      R$ {(cat.estoqueValor / 1000000).toFixed(1)}M
                    </span>
                    <span
                      className={`font-extrabold ${
                        cat.cobertura < 20
                          ? "text-rose-300"
                          : cat.cobertura > 60
                          ? "text-amber-300"
                          : "text-emerald-300"
                      }`}
                    >
                      {cat.cobertura} dias
                    </span>
                  </div>
                </div>
                {/* Barra de progresso visual com brilho sutil */}
                <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden flex items-center">
                  <div
                    className={`h-full rounded-full ${cat.color} transition-all duration-700 shadow-sm`}
                    style={{ width: cat.barWidth }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center text-xs">
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-slate-400 text-[11px]">Risco Crítico (&lt;15D)</div>
            <div className="text-rose-300 font-extrabold font-mono mt-1 text-sm">
              Aceleradores (14D)
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-slate-400 text-[11px]">Faixa Ideal (30-45D)</div>
            <div className="text-emerald-300 font-extrabold font-mono mt-1 text-sm">
              Redes (38D)
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-slate-400 text-[11px]">Sobreestoque (&gt;60D)</div>
            <div className="text-amber-300 font-extrabold font-mono mt-1 text-sm">
              Armazenamento (72D)
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico 2: Donut de Distribuição de Saúde do Estoque */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2 mb-1">
            <PieChartIcon className="h-4 w-4 text-purple-400" />
            Composição da Saúde do Estoque
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Estratificação percentual do volume financeiro total
          </p>

          {/* Visual Ring Donut SVG */}
          <div className="relative flex items-center justify-center my-4">
            <svg className="h-44 w-44 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="12"
                fill="none"
              />
              {/* Segmento Saudável (68%) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#10b981"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - 0.68)}
                fill="none"
                strokeLinecap="round"
              />
              {/* Segmento Sobreestoque (18%) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#f59e0b"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - 0.18)}
                fill="none"
                strokeLinecap="round"
                transform="rotate(244.8 50 50)"
              />
              {/* Segmento Ruptura (4%) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#f43f5e"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - 0.04)}
                fill="none"
                strokeLinecap="round"
                transform="rotate(310 50 50)"
              />
            </svg>

            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-mono font-extrabold text-white">68%</span>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                Saudável
              </span>
            </div>
          </div>

          {/* Legenda do Donut */}
          <div className="space-y-2.5 mt-4">
            {STATUS_DONUT_DATA.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/[0.02]"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-300 font-medium">{item.label}</span>
                </div>
                <span className={`font-mono font-extrabold ${item.textColor}`}>
                  {item.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 text-center font-semibold flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>96% do catálogo opera sem risco imediato de ruptura</span>
        </div>
      </div>
    </div>
  );
}