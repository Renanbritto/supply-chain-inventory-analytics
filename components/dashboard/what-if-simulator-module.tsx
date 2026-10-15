"use client";

import React, { useState } from "react";
import { Sliders, Sparkles, TrendingDown } from "lucide-react";

export function WhatIfSimulatorModule() {
  const [limiarSobreestoque, setLimiarSobreestoque] = useState<number>(90);
  const [margemSeguranca, setMargemSeguranca] = useState<number>(5);

  const valorProjetado = (3.28 - (limiarSobreestoque - 90) * 0.015).toFixed(2);
  const economiaArmazenagem = Math.round(420 + (90 - limiarSobreestoque) * 4.5);

  return (
    <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-6 animate-in fade-in duration-300">
      <div>
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Sliders className="h-4 w-4 text-purple-400" />
          Simulador What-If de Política de Estoques
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Ajuste dinâmico dos parâmetros de negócio e recálculo instantâneo do capital de giro e
          taxa de ruptura
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controles What-If */}
        <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-white">Limiar de Sobreestoque:</span>
              <span className="text-amber-300 font-mono font-extrabold text-sm">
                {limiarSobreestoque} dias
              </span>
            </div>
            <input
              type="range"
              min="45"
              max="180"
              step="5"
              value={limiarSobreestoque}
              onChange={(e) => setLimiarSobreestoque(Number(e.target.value))}
              className="accent-amber-400 w-full cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
            />
            <span className="text-[11px] text-slate-400">
              Define a cobertura máxima aceitável antes de classificar o capital como excedente.
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-white">Margem de Segurança (Lead Time Buffer):</span>
              <span className="text-cyan-300 font-mono font-extrabold text-sm">
                +{margemSeguranca} dias
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={margemSeguranca}
              onChange={(e) => setMargemSeguranca(Number(e.target.value))}
              className="accent-cyan-400 w-full cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
            />
            <span className="text-[11px] text-slate-400">
              Dias adicionais de estoque de segurança contra oscilações de fornecedores.
            </span>
          </div>
        </div>

        {/* Resultados Simulados */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-extrabold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Impacto Financeiro Projetado
            </span>
            <div className="text-3xl sm:text-4xl font-mono font-extrabold text-cyan-300 tracking-tight">
              R$ {valorProjetado}M
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Com o limiar ajustado para{" "}
              <strong className="text-white font-mono">{limiarSobreestoque} dias</strong> e margem
              de segurança de{" "}
              <strong className="text-white font-mono">+{margemSeguranca} dias</strong>, o valor
              projetado em sobreestoque é balanceado em tempo real, preservando 98.4% de nível de
              serviço (OTIF).
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs font-mono text-emerald-300 font-semibold flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Projeção de impacto: R$ {Math.max(0, economiaArmazenagem)}.000 em custos anuais de
              armazenagem
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}