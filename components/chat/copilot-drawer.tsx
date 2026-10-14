"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, X, Bot, User, Trash2, Sparkles, Database } from "lucide-react";
import {
  ChatMessage,
  SUPPLY_CHAIN_METADATA,
  askSupplyChainCopilot,
} from "@/lib/rn-intelligence";

interface CopilotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CopilotDrawer({ isOpen, onClose }: CopilotDrawerProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-welcome",
      role: "assistant",
      content: `Olá! Sou o **RN Intelligence Copilot**, seu assistente analítico executivo para **Supply Chain & Gestão Estratégica de Estoque**.

Estou conectado à modelagem Star Schema e motor preditivo **D-Day**. Você pode me fazer perguntas sobre risco de ruptura, capital em sobreestoque, Curva ABC ou compliance de SLA de fornecedores!`,
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsLoading(true);

    try {
      const response = await askSupplyChainCopilot(text.trim());
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: response,
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        role: "assistant",
        content: "Desculpe, ocorreu um erro momentâneo ao processar a análise analítica. Por favor, tente novamente.",
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: "initial-welcome-reset",
        role: "assistant",
        content: "Histórico limpo. Como posso ajudar você na auditoria de Supply Chain agora?",
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop com blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 animate-in fade-in duration-200"
      />

      {/* Drawer deslizante Obsidian Glass */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-[480px] z-50 bg-[#0b0f1a]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header do Drawer */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            {/* Novo emblema oficial de alta definição do RN Intelligence */}
            <div className="w-10 h-10 rounded-2xl bg-[#090d16] border border-[#06b6d4]/40 overflow-hidden flex items-center justify-center shrink-0 shadow-lg shadow-[#06b6d4]/10">
              <img
                src="/rn_logo_emblem.jpg"
                alt="RN Intelligence"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white tracking-tight">
                  RN Intelligence
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[10px] font-mono font-bold text-[#06b6d4]">
                  Copilot IA
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Supply Chain & Gestão Estratégica de Estoque
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleClearHistory}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer border border-transparent hover:border-white/5"
              title="Limpar Conversa"
              aria-label="Limpar Conversa"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer border border-transparent hover:border-white/5"
              title="Fechar Chat"
              aria-label="Fechar Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
                  msg.role === "user"
                    ? "bg-blue-600/20 text-blue-300 border-blue-500/30"
                    : "bg-[#06b6d4]/20 text-[#06b6d4] border-[#06b6d4]/30"
                }`}
              >
                {msg.role === "user" ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed border ${
                  msg.role === "user"
                    ? "bg-blue-600/20 text-white border-blue-500/30 ml-auto"
                    : "bg-white/[0.03] text-slate-200 border-white/10"
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>
                <div className="text-[10px] text-slate-400 mt-1.5 text-right font-mono">
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/30 flex items-center justify-center shrink-0 animate-pulse">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
                RN Intelligence consultando métricas de estoque e D-Day...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Perguntas Sugeridas */}
        <div className="px-4 py-2 border-t border-white/5 overflow-x-auto no-scrollbar flex items-center gap-2 bg-[#090d16]/60 shrink-0">
          {SUPPLY_CHAIN_METADATA.suggested_questions.map((q, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#06b6d4]/15 hover:border-[#06b6d4]/30 border border-white/10 text-[11px] text-slate-300 hover:text-[#06b6d4] whitespace-nowrap transition-all cursor-pointer shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input de Envio */}
        <div className="p-4 border-t border-white/10 bg-[#0b0f1a] shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Pergunte ao RN Intelligence Copilot..."
              className="flex-1 bg-[#090d16] border border-white/10 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#06b6d4] transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-[#06b6d4] hover:from-blue-500 hover:to-[#06b6d4] text-white disabled:opacity-40 transition-all cursor-pointer shadow-lg shadow-[#06b6d4]/20 shrink-0"
              title="Enviar Mensagem"
              aria-label="Enviar Mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
