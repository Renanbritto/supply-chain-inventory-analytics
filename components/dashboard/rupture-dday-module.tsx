"use client";

import React, { useState, useMemo } from "react";
import { Search, Boxes } from "lucide-react";
import { MOCK_SKUS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function RuptureDdayModule() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredSkus = useMemo(() => {
    return MOCK_SKUS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fornecedor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Barra de Filtros e Busca */}
      <div className="liquid-glass rounded-3xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {["all", "Risco Crítico", "Ruptura", "Normal", "Sobreestoque", "Estoque Parado"].map(
            (status) => {
              const isActive = statusFilter === status;
              return (
                <button
                  type="button"
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer",
                    isActive
                      ? "bg-rose-500/15 border-rose-500/40 text-rose-300 shadow-md shadow-rose-500/5 font-bold"
                      : "bg-white/[0.01] hover:bg-white/[0.04] text-slate-400 hover:text-slate-100 border-transparent hover:border-white/5"
                  )}
                >
                  {status === "all" ? "Todos os Status" : status}
                </button>
              );
            }
          )}
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por SKU, Hardware ou Fornecedor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-500 outline-none focus:border-rose-500 transition-colors"
          />
        </div>
      </div>

      {/* Tabela de D-Day & Gestão de Ruptura */}
      <div className="liquid-glass-card rounded-3xl overflow-hidden shadow-xl">
        <div className="p-5 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Boxes className="h-4 w-4 text-rose-400" />
              Fila Operacional de Reposição &amp; D-Day Ruptura
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Cálculo em tempo real do ponto de pedido (Runout Days vs Lead Time do Fornecedor)
            </p>
          </div>
          <span className="text-xs font-mono text-rose-300 font-extrabold px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/40 w-fit">
            {filteredSkus.length} SKUs Listados
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.02] border-b border-white/10 text-slate-400 uppercase font-mono text-[10px]">
              <tr>
                <th className="p-4">SKU &amp; Item Hardware</th>
                <th className="p-4">Categoria</th>
                <th className="p-4">Curva</th>
                <th className="p-4">Estoque</th>
                <th className="p-4">VMD</th>
                <th className="p-4">Cobertura</th>
                <th className="p-4">D-Day Limite</th>
                <th className="p-4">Status</th>
                <th className="p-4">Pedidos Abertos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredSkus.map((sku) => (
                <tr
                  key={sku.id}
                  className="hover:bg-white/[0.03] transition-colors group text-slate-300"
                >
                  <td className="p-4">
                    <div className="font-bold text-white font-mono">{sku.sku}</div>
                    <div className="text-[11px] text-slate-400 truncate max-w-[260px]">
                      {sku.name}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{sku.fornecedor}</div>
                  </td>
                  <td className="p-4 font-medium">{sku.category}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-0.5 rounded font-mono font-bold text-[11px] ${
                        sku.curvaAbc === "A"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                          : sku.curvaAbc === "B"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                          : "bg-slate-500/20 text-slate-400 border border-slate-500/40"
                      }`}
                    >
                      {sku.curvaAbc}
                    </span>
                  </td>
                  <td className="p-4 font-mono">
                    <div className="font-extrabold text-white">{sku.estoqueQtd} un</div>
                    <div className="text-[10px] text-slate-400">
                      R$ {(sku.estoqueValor / 1000).toLocaleString("pt-BR")}k
                    </div>
                  </td>
                  <td className="p-4 font-mono font-medium">{sku.vmd} un/d</td>
                  <td className="p-4 font-mono">
                    <span
                      className={`font-extrabold ${
                        sku.coberturaDias < 10
                          ? "text-rose-300"
                          : sku.coberturaDias > 60
                          ? "text-amber-300"
                          : "text-emerald-300"
                      }`}
                    >
                      {sku.coberturaDias} dias
                    </span>
                  </td>
                  <td className="p-4 font-mono font-extrabold">
                    <span
                      className={
                        sku.dDayDataLimite.includes("Atrasado") ||
                        sku.dDayDataLimite.includes("Vencido")
                          ? "text-rose-300"
                          : "text-cyan-300"
                      }
                    >
                      {sku.dDayDataLimite}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold border ${
                        sku.status === "Risco Crítico"
                          ? "bg-rose-500/15 text-rose-300 border-rose-500/40"
                          : sku.status === "Ruptura"
                          ? "bg-red-500/20 text-red-300 border-red-500/50"
                          : sku.status === "Sobreestoque"
                          ? "bg-amber-500/15 text-amber-300 border-amber-500/40"
                          : sku.status === "Estoque Parado"
                          ? "bg-purple-500/15 text-purple-300 border-purple-500/40"
                          : "bg-emerald-500/15 text-emerald-300 border-emerald-500/40"
                      }`}
                    >
                      {sku.status}
                    </span>
                  </td>
                  <td className="p-4 font-mono">
                    {sku.pedidosAbertosQtd > 0 ? (
                      <span className="text-cyan-300 font-extrabold">
                        +{sku.pedidosAbertosQtd} un
                      </span>
                    ) : (
                      <span className="text-slate-500">Sem pedido</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}