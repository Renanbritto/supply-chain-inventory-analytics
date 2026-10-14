# 📦 Supply Chain & Inventory Analytics • RN Intelligence

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2%2B-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Power_BI-DAX_170%2B-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="Power BI" />
  <img src="https://img.shields.io/badge/Star_Schema-Kimball-06b6d4?style=for-the-badge" alt="Star Schema" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License: MIT" />
</p>

> Plataforma analítica de **Supply Chain & Gestão Estratégica de Estoque** desenvolvida para mitigar rupturas em SKUs críticos, liberar capital de giro empatado em sobreestoque e automatizar o cálculo preditivo de reposição (**D-Day Replenishment Engine**). Inclui modelagem dimensional Star Schema com 170+ medidas DAX, matriz de priorização de compras, análise de estoque parado e simulador What-If.

---

## 🌐 Protótipo Publicado & Portfólio

* **Aplicação na Vercel:** [supply-chain-inventory-analytics.vercel.app](https://supply-chain-inventory-analytics.vercel.app)
* **Portfólio Oficial:** [renan-nocelli.vercel.app/projetos/gestao-estoque](https://renan-nocelli.vercel.app/projetos/gestao-estoque)

---

## 💎 Design System: Obsidian Glass

A interface foi projetada sob o conceito **Obsidian Glass**, combinando máxima densidade de informação com sofisticação visual:

* **Paleta Obsidian:** Fundo profundo `#090d16` com cards translúcidos `rgba(11, 15, 26, 0.95)`, `backdrop-blur-2xl` e bordas ultrafinas de 1px (`rgba(255, 255, 255, 0.1)`).
* **Cores Neon Semânticas:** Destaques visuais para tomada rápida de decisão:
  * 🔴 **Rose/Magenta (`#f43f5e`):** SKUs em Ruptura e Risco Crítico de Esgotamento.
  * 🟡 **Amber (`#f59e0b`):** Capital em Sobreestoque e Atenção Operacional.
  * 🔵 **Cyan (`#06b6d4`):** Cobertura de Estoque, Ponto de Pedido e Motor D-Day.
  * 🟢 **Emerald (`#10b981`):** Nível de Serviço Saudável e SLA no Prazo.
* **Tipografia:** Títulos e rótulos na fonte **Comfortaa** com números e KPIs na **família Mono** (`font-mono font-extrabold`) para clareza executiva.
* **Menu Retrátil:** Sidebar que inicia recolhida (`w-20`) com ícones e tooltips, expandindo opcionalmente para `w-72`.
* **RN Intelligence Copilot:** Acesso ao agente inteligente de IA via Floating Action Button (FAB) gradiente no canto inferior direito.

---

## 📊 Módulos Analíticos Integrados

1. **Visão Geral & Gráficos Analíticos:** Cobertura de estoque por categoria de hardware, comparativo de capital alocado e composição percentual de saúde do estoque.
2. **Ruptura, Cobertura & D-Day Engine:** Fila operacional de reposição com cálculo do ponto de pedido (*Runout Days vs. Lead Time*), busca dinâmica e filtros por criticidade.
3. **Curva ABC (80/20) & Estoque Parado:** Estratificação de Pareto, diagnóstico de ordens abertas em sobreestoque e identificação de R$ 2.52M recuperáveis em capital de giro.
4. **SLA & Pedidos Fornecedores:** Monitoramento de cumprimento de prazos (OTIF - On-Time In-Full) e exposição a atrasos financeiros por fornecedor internacional.
5. **Simulador What-If de Estoque:** Ajuste interativo do limiar de sobreestoque (45-180 dias) e buffer de segurança, recalculando o impacto financeiro em tempo real.
6. **Engenharia DAX & Modelagem Star Schema:** Medidas de alto impacto (*D-Day*, *Venda Perdida*, *Runout Days*) estruturadas com tabelas fato e dimensões normalizadas.

---

## 🚀 Como Executar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/Renanbritto/supply-chain-inventory-analytics.git

# 2. Acesse a pasta do projeto
cd supply-chain-inventory-analytics

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🛠️ Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para mais informações.
