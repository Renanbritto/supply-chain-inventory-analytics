/**
 * Cliente de Integração com o Agente de IA RN Intelligence
 * Supply Chain & Inventory Analytics
 */

export interface ChatHistoryItem {
  role: "user" | "assistant";
  content: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  sql?: string;
  data?: any[];
  executionTime?: number;
  timestamp: string;
}

export interface ProjectMetadata {
  project_id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  suggested_questions: string[];
}

export const SUPPLY_CHAIN_METADATA: ProjectMetadata = {
  project_id: "supply-chain",
  name: "Supply Chain & Estoque • RN Intelligence",
  category: "Supply Chain Analytics & Power BI DAX",
  description:
    "Copilot analítico autônomo com motor preditivo D-Day de reposição, matriz de risco de ruptura, estratificação Curva ABC (80/20) e monitoramento de SLA de fornecedores.",
  tags: ["Power BI", "DAX Avançado", "Star Schema", "D-Day Engine", "Curva ABC", "Supply Chain"],
  suggested_questions: [
    "Quais SKUs possuem risco iminente de ruptura de estoque?",
    "Qual o valor total de capital empatado em sobreestoque e itens parados?",
    "Como funciona o cálculo do D-Day Replenishment e Runout Days?",
    "Quais fornecedores estão com SLA de pontualidade abaixo da meta de 90%?",
    "Como a Curva ABC impacta as regras de compras e auditoria cíclica?",
  ],
};

const KNOWLEDGE_BASE_RESPONSES: Record<string, string> = {
  ruptura: `**Diagnóstico de Ruptura & SKUs Críticos:**

• **Placa Aceleradora de IA Tensor Dual-GPU 48GB (HW-8120):** Encontra-se em **Ruptura Fértil (Estoque = 0 un)** há 12 dias com consumo médio diário (VMD) de 1.5 un/dia. Fornecedor: *Apex Semiconductors Corp*.
• **Servidor Rack Enterprise 2U Dual Xeon 64-Core (HW-9041):** Saldo atual de apenas 14 un para uma VMD de 2.1 un/dia (cobertura de 6.7 dias), com Lead Time de 14 dias do fornecedor *Silicon Tech Global*. D-Day está atrasado em 7 dias (-7D).
• **Roteador Core BGP 100Gbps (HW-4319):** Restam 5 un em estoque com cobertura de 8.3 dias e Lead Time de 18 dias. D-Day vencido há 10 dias sem pedido aberto emitido.

*Recomendação imediata:* Emitir ordens de compra emergenciais para HW-9041 e HW-4319, e cobrar status da importação crítica do SKU HW-8120 com a Apex Semiconductors.`,

  sobreestoque: `**Análise de Capital em Sobreestoque & Estoque Parado:**

• **Capital Total Excedente:** R$ 3.280.000 acima do limiar padrão de cobertura (90 dias).
• **Controladora SAN NVMe PCIe Gen5 (HW-6512):** 180 un em estoque com custo unitário de R$ 8.900, perfazendo **R$ 1.602.000 empatados**. Cobertura de 225 dias com novo pedido de 25 un ainda em aberto.
• **Estoque Parado (>90D sem giro):** R$ 1.940.000, liderado pelo item *Transceiver Óptico QSFP28 100G (HW-3208)* com 450 un sem vendas recentes.

*Ação Corretiva:* Cancelar ou postergar a remessa de 25 un do SKU HW-6512 e liquidar/remanejar os transceivers ópticos para liberar R$ 2.52M de capital de giro imediato.`,

  dday: `**Metodologia do Motor Preditivo D-Day (Runout Days vs Lead Time):**

O **D-Day** representa a *Data Limite Absoluta* em que uma ordem de compra precisa ser formalizada para que o lote chegue antes do esgotamento físico do estoque.

$$\\text{Runout Days} = \\frac{\\text{Saldo Atual}}{\\text{VMD (Venda Média Diária)}}$$
$$\\text{D-Day} = \\text{Data Atual} + \\text{Runout Days} - \\text{Lead Time Fornecedor}$$

• Se o D-Day for **positivo (+X dias)**: O estoque ainda possui folga operacional.
• Se o D-Day for **negativo (-X dias)**: O pedido já deveria ter sido emitido; qualquer atraso resultará em ruptura faturada.`,

  sla: `**Auditoria de SLA & Performance de Fornecedores (Meta: 90%):**

• **Quantum Networks Ltd:** 98.6% de pontualidade | Lead time médio: 8 dias | Status: **Excelente (SLA OK)**.
• **HyperScale Storage Corp:** 92.0% de pontualidade | Lead time: 16 dias | Status: **Operação Normal**.
• **Silicon Tech Global:** 89.5% de pontualidade | R$ 320.000 em pedidos atrasados | Status: **Atenção (Cobrança Ativa)**.
• **Apex Semiconductors Corp:** 74.2% de pontualidade | R$ 650.000 em pedidos atrasados | Status: **Crítico (Violação Contratual)**.

*Recomendação:* Aplicar cláusula de penalidade por atraso para a Apex Semiconductors Corp e redistribuir pedidos para fornecedores homologados alternativos.`,

  abc: `**Estratificação de Pareto (Curva ABC 80/20):**

• **Classe A (Alto Impacto):** Concentra **78.5% do faturamento** em apenas 18.2% dos SKUs ativos. Regra: Auditoria de estoque cega semanal, monitoramento de D-Day em tempo real e tolerância zero a rupturas.
• **Classe B (Intermediário):** 16.2% do faturamento com 31.5% dos SKUs. Revisão quinzenal e política de estoque de segurança padrão.
• **Classe C (Cauda Longa):** 5.3% do faturamento e 50.3% dos SKUs. Concentra itens obsoletos e de baixo giro; política de reposição sob demanda (JIT - Just-In-Time).`,
};

export async function askSupplyChainCopilot(userQuestion: string): Promise<string> {
  const q = userQuestion.toLowerCase();

  // Se a API estiver disponível, tenta consultar
  try {
    const res = await fetch("https://rn-intelligence-api.onrender.com/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project_id: "supply-chain",
        message: userQuestion,
      }),
      signal: AbortSignal.timeout(4000),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.response || data.reply || data.content) {
        return data.response || data.reply || data.content;
      }
    }
  } catch {
    // Fallback inteligente para base de conhecimento local
  }

  if (q.includes("ruptura") || q.includes("risco") || q.includes("esgot") || q.includes("acelerador")) {
    return KNOWLEDGE_BASE_RESPONSES.ruptura;
  }
  if (q.includes("sobreestoque") || q.includes("parado") || q.includes("capital") || q.includes("excesso")) {
    return KNOWLEDGE_BASE_RESPONSES.sobreestoque;
  }
  if (q.includes("d-day") || q.includes("dday") || q.includes("runout") || q.includes("calculo") || q.includes("fórmula")) {
    return KNOWLEDGE_BASE_RESPONSES.dday;
  }
  if (q.includes("fornecedor") || q.includes("sla") || q.includes("atraso") || q.includes("pontualidade")) {
    return KNOWLEDGE_BASE_RESPONSES.sla;
  }
  if (q.includes("abc") || q.includes("pareto") || q.includes("classe") || q.includes("80/20")) {
    return KNOWLEDGE_BASE_RESPONSES.abc;
  }

  return `Com base na base analítica de **Supply Chain & Gestão de Estoque**:

• O portfólio monitora **R$ 48.24M** em estoque com cobertura média de **34.2 dias**.
• Identificamos **12 SKUs em risco iminente de ruptura** e **R$ 3.28M empatados em sobreestoque**.
• O SLA global de fornecedores está em **91.4%**, com atenção crítica voltada para a *Apex Semiconductors* (74.2% de pontualidade).

Você pode me perguntar sobre detalhes de **Ruptura**, **Sobreestoque**, **Curva ABC**, **SLA de Fornecedores** ou sobre a medida **D-Day**!`;
}
