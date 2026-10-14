"use client";

import React, { useState, useMemo } from "react";
import { Search, Boxes } from "lucide-react";
import { MOCK_SKUS } from "@/lib/data";

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
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-3xl bg-[#0b0f1a]/95 backdrop-blur-2xl border border-white/10 shadow-lg">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {["all", "Risco Crítico", "Ruptura", "Normal", "Sobreestoque", "Estoque Parado"].map(
            (status) => (
              <button
                type="button"
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  statusFilter === status
                    ? "bg-white/15 text-white font-bold border border-white/20 shadow-xs"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {status === "all" ? "Todos os Status" : status}
              </button>
            )
          )}
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por SKU, Hardware ou Fornecedor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-xs text-white placeholder:text-slate-500 outline-none focus:border-[#06b6d4] transition-colors"
          />
        </div>
      </div>

      {/* Tabela de D-Day & Gestão de Ruptura */}
      <div className="bg-[#0b0f1a]/95 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-xl">
        <div className="p-5 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Boxes className="h-4 w-4 text-[#06b6d4]" />
              Fila Operacional de Reposição & D-Day Ruptura
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Cálculo em tempo real do ponto de pedido (Runout Days vs Lead Time do Fornecedor)
            </p>
          </div>
          <span className="text-xs font-mono text-[#06b6d4] font-extrabold px-3 py-1 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 w-fit">
            {filteredSkus.length} SKUs Listados
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.02] border-b border-white/10 text-slate-400 uppercase font-mono text-[10px]">
              <tr>
                <th className="p-4">SKU & Item Hardware</th>
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
                          ? "bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/40"
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
                          ? "text-[#f43f5e]"
                          : sku.coberturaDias > 60
                          ? "text-[#f59e0b]"
                          : "text-[#10b981]"
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
                          ? "text-[#f43f5e]"
                          : "text-[#06b6d4]"
                      }
                    >
                      {sku.dDayDataLimite}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold border ${
                        sku.status === "Risco Crítico"
                          ? "bg-[#f43f5e]/10 text-[#f43f5e] border-[#f43f5e]/30"
                          : sku.status === "Ruptura"
                          ? "bg-red-500/20 text-red-300 border-red-500/40"
                          : sku.status === "Sobreestoque"
                          ? "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30"
                          : sku.status === "Estoque Parado"
                          ? "bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/30"
                          : "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30"
                      }`}
                    >
                      {sku.status}
                    </span>
                  </td>
                  <td className="p-4 font-mono">
                    {sku.pedidosAbertosQtd > 0 ? (
                      <span className="text-[#06b6d4] font-extrabold">
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
