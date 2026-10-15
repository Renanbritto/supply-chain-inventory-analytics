"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart3,
  PieChart as PieChartIcon,
  CheckCircle2,
  SlidersHorizontal,
  Layers,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from "recharts";
import { CATEGORY_CHART_DATA, STATUS_DONUT_DATA } from "@/lib/data";

interface CategoryStyle {
  dot: string;
  gradient: string;
  textColor: string;
  hex: string;
  glow: string;
  width: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  Servidores: {
    dot: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]",
    gradient: "bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500",
    textColor: "text-cyan-300",
    hex: "#06b6d4",
    glow: "shadow-[0_0_14px_rgba(6,182,212,0.65)]",
    width: "65%",
  },
  Redes: {
    dot: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]",
    gradient: "bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400",
    textColor: "text-emerald-300",
    hex: "#10b981",
    glow: "shadow-[0_0_14px_rgba(16,185,129,0.65)]",
    width: "45%",
  },
  Armazenamento: {
    dot: "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)]",
    gradient: "bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500",
    textColor: "text-amber-300",
    hex: "#f59e0b",
    glow: "shadow-[0_0_14px_rgba(245,158,11,0.65)]",
    width: "82%",
  },
  Aceleradores: {
    dot: "bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.9)]",
    gradient: "bg-gradient-to-r from-rose-500 via-rose-400 to-pink-500",
    textColor: "text-rose-300",
    hex: "#f43f5e",
    glow: "shadow-[0_0_14px_rgba(244,63,94,0.65)]",
    width: "30%",
  },
};

export function OverviewModule() {
  const [chartView, setChartView] = useState<"bars" | "recharts">("bars");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const rechartsData = CATEGORY_CHART_DATA.map((c) => ({
    name: c.category,
    cobertura: c.cobertura,
    capitalMilhoes: +(c.estoqueValor / 1000000).toFixed(1),
    color: CATEGORY_STYLES[c.category]?.hex || "#06b6d4",
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
      {/* Gráfico 1: Cobertura por Categoria */}
      <div className="lg:col-span-2 liquid-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xl">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-cyan-400" />
                Cobertura de Estoque &amp; Capital por Categoria
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Comparativo de dias de cobertura média vs. capital financeiro alocado
              </p>
            </div>

            {/* Alternador de visualização & badge de meta */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10">
                <button
                  type="button"
                  onClick={() => setChartView("bars")}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    chartView === "bars"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Barras Luminous
                </button>
                <button
                  type="button"
                  onClick={() => setChartView("recharts")}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    chartView === "recharts"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Gráfico Interativo
                </button>
              </div>

              <span className="text-xs font-mono font-bold text-cyan-300 px-3 py-1 rounded-full liquid-glass-pill whitespace-nowrap">
                Meta: 30 a 45 dias
              </span>
            </div>
          </div>

          {/* VISÃO 1: Barras Luminous Vibrantes */}
          {chartView === "bars" && (
            <div className="space-y-4 mt-6">
              {CATEGORY_CHART_DATA.map((cat, idx) => {
                const style = CATEGORY_STYLES[cat.category] || CATEGORY_STYLES.Servidores;
                return (
                  <div
                    key={idx}
                    className="flex flex-col gap-2 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                        {cat.category}
                      </span>
                      <div className="flex items-center gap-4 font-mono">
                        <span className="text-slate-400 font-semibold">
                          R$ {(cat.estoqueValor / 1000000).toFixed(1)}M
                        </span>
                        <span className={`font-extrabold ${style.textColor}`}>
                          {cat.cobertura} dias
                        </span>
                      </div>
                    </div>

                    {/* Barra de progresso LUMINOSA com brilho neon */}
                    <div className="w-full h-3.5 rounded-full bg-black/60 border border-white/10 p-0.5 overflow-hidden flex items-center shadow-inner">
                      <div
                        className={`h-full rounded-full ${style.gradient} ${style.glow} transition-all duration-700`}
                        style={{
                          width: style.width,
                          backgroundColor: style.hex,
                          boxShadow: `0 0 14px ${style.hex}99, 0 0 4px ${style.hex}`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* VISÃO 2: Gráfico Recharts Interativo */}
          {chartView === "recharts" && isMounted && (
            <div className="mt-6 p-4 rounded-2xl bg-black/30 border border-white/5 h-[260px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rechartsData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                    unit="d"
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="p-3 rounded-xl bg-[#0b0f1a]/95 backdrop-blur-xl border border-white/15 shadow-2xl text-xs space-y-1">
                            <div className="font-bold text-white flex items-center gap-2">
                              <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: data.color }}
                              />
                              {data.name}
                            </div>
                            <div className="text-slate-300 flex justify-between gap-4">
                              <span>Cobertura:</span>
                              <strong className="font-mono text-cyan-300">{data.cobertura} dias</strong>
                            </div>
                            <div className="text-slate-300 flex justify-between gap-4">
                              <span>Estoque Alocado:</span>
                              <strong className="font-mono text-white">R$ {data.capitalMilhoes}M</strong>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="cobertura" radius={[8, 8, 0, 0]} animationDuration={800}>
                    {rechartsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        style={{ filter: `drop-shadow(0 0 8px ${entry.color}80)` }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
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
                style={{ filter: "drop-shadow(0 0 6px rgba(16,185,129,0.5))" }}
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
                style={{ filter: "drop-shadow(0 0 6px rgba(245,158,11,0.5))" }}
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
                style={{ filter: "drop-shadow(0 0 6px rgba(244,63,94,0.5))" }}
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
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 8px ${item.color}`,
                    }}
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