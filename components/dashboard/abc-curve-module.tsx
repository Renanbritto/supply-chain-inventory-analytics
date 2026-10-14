"use client";

import React from "react";
import { BarChart3, CheckCircle2, AlertTriangle, Layers, DollarSign } from "lucide-react";

export function AbcCurveModule() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
      {/* Coluna 1: Estratificação ABC */}
      <div className="bg-[#0b0f1a]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col gap-4 shadow-xl">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Layers className="h-4 w-4 text-[#06b6d4]" />
            Estratificação Curva ABC (80/20)
          </h3>
          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
            Classificação de Pareto para concentrar esforço de compra e auditoria cíclica nos itens
            com maior giro financeiro.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {/* Classe A */}
          <div className="p-4 rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-[#06b6d4]">
              <span>Classe A (Alto Impacto)</span>
              <span className="font-mono font-extrabold">78.5% Faturamento</span>
            </div>
            <div className="text-[11px] text-slate-300 leading-relaxed">
              Representa 18.2% dos SKUs ativos. Auditoria semanal e controle estrito de ponto de
              pedido com D-Day preventivo.
            </div>
          </div>

          {/* Classe B */}
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-blue-400">
              <span>Classe B (Intermediário)</span>
              <span className="font-mono font-extrabold">16.2% Faturamento</span>
            </div>
            <div className="text-[11px] text-slate-300 leading-relaxed">
              Representa 31.5% dos SKUs. Cobertura padrão e revisão quinzenal de pedidos de compra.
            </div>
          </div>

          {/* Classe C */}
          <div className="p-4 rounded-2xl bg-slate-500/10 border border-slate-500/30 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Classe C (Cauda Longa)</span>
              <span className="font-mono font-extrabold">5.3% Faturamento</span>
            </div>
            <div className="text-[11px] text-slate-300 leading-relaxed">
              Representa 50.3% dos SKUs. Maior concentração de itens com baixo giro e risco de obsolescência.
            </div>
          </div>
        </div>
      </div>

      {/* Coluna 2 e 3: Diagnóstico de Estoque Problemático */}
      <div className="lg:col-span-2 bg-[#0b0f1a]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between shadow-xl gap-6">
        <div>
          <div className="mb-6">
            <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-[#f59e0b]" />
              Diagnóstico de Estoque Problemático & Ações Recomendadas
            </h3>
            <p className="text-xs text-slate-400">
              Mapeamento de capital empatado para liberação imediata de fluxo de caixa operacional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#f43f5e]">Sobreestoque com Pedido Aberto</span>
                <span className="font-mono font-extrabold text-white text-sm">R$ 580.000</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Itens cuja cobertura atual já ultrapassa 90 dias e ainda possuem novas ordens de
                compra em carteira.
              </p>
              <div className="text-[11px] text-[#06b6d4] font-semibold mt-1 p-2 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20">
                &rarr; Ação: Cancelamento ou postergação imediata de entrega com fornecedor.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#a855f7]">Estoque Parado (&gt;90D)</span>
                <span className="font-mono font-extrabold text-white text-sm">R$ 1.940.000</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Itens sem nenhuma movimentação de saída nos últimos 90 dias gerando custo de
                armazenagem e depreciação.
              </p>
              <div className="text-[11px] text-[#06b6d4] font-semibold mt-1 p-2 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20">
                &rarr; Ação: Remanejamento para projetos ativos, liquidação ou devolução a fornecedor.
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#10b981]/20 text-[#10b981] shrink-0">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="text-xs text-slate-200">
              <span className="font-bold text-[#10b981]">
                Potencial de Liberação de Capital de Giro:{" "}
              </span>
              R$ 2.520.000 recuperáveis através de transferências entre projetos e renegociações de ordens de compra.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
