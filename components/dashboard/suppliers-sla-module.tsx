"use client";

import React from "react";
import { Truck, Clock, ShieldCheck } from "lucide-react";
import { MOCK_FORNECEDORES } from "@/lib/data";

export function SuppliersSlaModule() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Header do Módulo */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Truck className="h-4 w-4 text-emerald-400" />
            Performance &amp; SLA de Fornecedores Globais
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Monitoramento de cumprimento de prazos (OTIF - On-Time In-Full) e exposição financeira
            a atrasos
          </p>
        </div>
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono font-bold text-emerald-300 w-fit">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Meta SLA: &ge; 90.0%</span>
        </div>
      </div>

      {/* Grid de Fornecedores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_FORNECEDORES.map((forn, idx) => (
          <div
            key={idx}
            className="liquid-glass-card rounded-3xl p-6 flex flex-col justify-between gap-5 hover:border-white/20 transition-all shadow-xl group"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {forn.nome}
                </span>
                <span
                  className={`px-3 py-1 rounded-xl text-xs font-semibold border ${
                    forn.slaPontualidade < 80
                      ? "bg-rose-500/15 text-rose-300 border-rose-500/40"
                      : forn.slaPontualidade < 90
                      ? "bg-amber-500/15 text-amber-300 border-amber-500/40"
                      : "bg-emerald-500/15 text-emerald-300 border-emerald-500/40"
                  }`}
                >
                  {forn.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-white/5">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 text-[11px]">Pedidos em Aberto:</span>
                  <div className="font-mono font-extrabold text-white text-sm mt-1">
                    {forn.pedidosAberto}
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 text-[11px]">Em Atraso Efetivo:</span>
                  <div className="font-mono font-extrabold text-rose-300 text-sm mt-1">
                    {forn.pedidosAtrasados}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">SLA Pontualidade:</span>
                <span
                  className={`font-mono font-extrabold text-sm ${
                    forn.slaPontualidade >= 90 ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {forn.slaPontualidade}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-400">Lead Time Médio:</span>
                <span className="font-mono font-extrabold text-cyan-300">
                  {forn.leadTimeMedio} dias
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}