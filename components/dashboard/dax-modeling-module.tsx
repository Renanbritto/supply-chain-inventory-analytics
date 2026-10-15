"use client";

import React from "react";
import { Zap, Layers, Database } from "lucide-react";

export function DaxModelingModule() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Banner de Apresentação da Engenharia de Modelagem */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Database className="h-4 w-4 text-purple-400" />
            Arquitetura Dimensional Star Schema &amp; Motor DAX (170+ Medidas)
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Modelagem otimizada no VertiPaq Engine com tabelas fato e dimensões normalizadas para
            alta performance
          </p>
        </div>
        <span className="text-xs font-mono font-bold text-purple-300 px-3 py-1 rounded-full liquid-glass-pill w-fit">
          Star Schema Kimball Ready
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Medida 1: D-Day Replenishment */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Zap className="h-4 w-4 text-rose-400" />
              Medida DAX: D-Day Data Limite de Pedido
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30">
              Preditivo
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Calcula com precisão a data limite para o comprador emitir o pedido ao fornecedor
            antes que o estoque físico chegue a zero, considerando a Venda Média Diária (VMD) dos
            últimos 30 dias e o Lead Time de entrega:
          </p>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/5 font-mono text-[11px] text-cyan-300 leading-relaxed overflow-x-auto shadow-inner">
            <div className="text-slate-300 font-bold mb-1">D-Day Data Limite Pedido =</div>
            <div className="text-slate-200">
              <span className="text-rose-400 font-semibold">VAR</span> vSaldoAtual = [Estoque Qtd]
              <br />
              <span className="text-rose-400 font-semibold">VAR</span> vVMD = [Venda Média Diária]
              <br />
              <span className="text-rose-400 font-semibold">VAR</span> vLeadTime = [Lead Time Fornecedor]
              <br />
              <span className="text-rose-400 font-semibold">VAR</span> vDiasRunout = DIVIDE(vSaldoAtual, vVMD, 0)
              <br />
              <span className="text-rose-400 font-semibold">VAR</span> vDataRuptura = TODAY() + vDiasRunout
              <br />
              <span className="text-rose-400 font-semibold">RETURN</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-400 font-semibold">IF</span>(vVMD &gt; 0, vDataRuptura - vLeadTime, BLANK())
            </div>
          </div>
        </div>

        {/* Medida 2: Venda Perdida Estimada */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Layers className="h-4 w-4 text-purple-400" />
              Medida DAX: Venda Perdida Estimada (30D)
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Impacto Financeiro
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Quantifica financeiramente o prejuízo estimado em 30 dias para itens que estão em
            ruptura física efetiva mas possuem histórico de demanda ativa na rede:
          </p>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/5 font-mono text-[11px] text-purple-300 leading-relaxed overflow-x-auto shadow-inner">
            <div className="text-slate-300 font-bold mb-1">Venda Perdida Estimada =</div>
            <div className="text-slate-200">
              <span className="text-blue-400 font-semibold">SUMX</span>(
              <br />
              &nbsp;&nbsp;<span className="text-blue-400 font-semibold">FILTER</span>(
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;dim_Item,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;[Estoque Qtd] &lt;= 0 &amp;&amp; [Venda Média Diária] &gt; 0
              <br />
              &nbsp;&nbsp;),
              <br />
              &nbsp;&nbsp;[Venda Média Diária] * 30 * [Preço Médio Venda]
              <br />)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}