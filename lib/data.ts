export interface SkuInventoryItem {
  id: string;
  sku: string;
  name: string;
  category: "Servidores" | "Redes" | "Armazenamento" | "Aceleradores";
  curvaAbc: "A" | "B" | "C";
  estoqueQtd: number;
  custoUnit: number;
  estoqueValor: number;
  vmd: number; // Venda Média Diária (un/dia)
  coberturaDias: number;
  leadTimeDias: number;
  dDayDataLimite: string;
  status: "Normal" | "Ruptura" | "Risco Crítico" | "Sobreestoque" | "Estoque Parado";
  pedidosAbertosQtd: number;
  fornecedor: string;
}

export interface SupplierItem {
  nome: string;
  pedidosAberto: string;
  pedidosAtrasados: string;
  slaPontualidade: number;
  leadTimeMedio: number;
  status: string;
  statusColor: string;
}

export interface CategoryCoverageItem {
  category: string;
  cobertura: number;
  estoqueValor: number;
  color: string;
  barWidth: string;
}

export interface StockHealthItem {
  label: string;
  pct: number;
  color: string;
  textColor: string;
}

export const MOCK_SKUS: SkuInventoryItem[] = [
  {
    id: "1",
    sku: "HW-9041",
    name: "Servidor Rack Enterprise 2U Dual Xeon 64-Core",
    category: "Servidores",
    curvaAbc: "A",
    estoqueQtd: 14,
    custoUnit: 18500,
    estoqueValor: 259000,
    vmd: 2.1,
    coberturaDias: 6.7,
    leadTimeDias: 14,
    dDayDataLimite: "Atrasado (-7D)",
    status: "Risco Crítico",
    pedidosAbertosQtd: 30,
    fornecedor: "Silicon Tech Global",
  },
  {
    id: "2",
    sku: "HW-8120",
    name: "Placa Aceleradora de IA Tensor Dual-GPU 48GB",
    category: "Aceleradores",
    curvaAbc: "A",
    estoqueQtd: 0,
    custoUnit: 24000,
    estoqueValor: 0,
    vmd: 1.5,
    coberturaDias: 0,
    leadTimeDias: 20,
    dDayDataLimite: "Vencido (-12D)",
    status: "Ruptura",
    pedidosAbertosQtd: 0,
    fornecedor: "Apex Semiconductors Corp",
  },
  {
    id: "3",
    sku: "HW-7734",
    name: "Switch Gerenciável 48-Portas PoE+ 10Gbps SFP+",
    category: "Redes",
    curvaAbc: "A",
    estoqueQtd: 65,
    custoUnit: 4200,
    estoqueValor: 273000,
    vmd: 2.2,
    coberturaDias: 29.5,
    leadTimeDias: 15,
    dDayDataLimite: "+14 dias",
    status: "Normal",
    pedidosAbertosQtd: 40,
    fornecedor: "Quantum Networks Ltd",
  },
  {
    id: "4",
    sku: "HW-6512",
    name: "Controladora SAN NVMe PCIe Gen5 16TB Array",
    category: "Armazenamento",
    curvaAbc: "B",
    estoqueQtd: 180,
    custoUnit: 8900,
    estoqueValor: 1602000,
    vmd: 0.8,
    coberturaDias: 225.0,
    leadTimeDias: 25,
    dDayDataLimite: "+200 dias",
    status: "Sobreestoque",
    pedidosAbertosQtd: 25,
    fornecedor: "HyperScale Storage Corp",
  },
  {
    id: "5",
    sku: "HW-5401",
    name: "Módulo Memória RAM DDR5 Server Registered 128GB",
    category: "Servidores",
    curvaAbc: "A",
    estoqueQtd: 240,
    custoUnit: 1850,
    estoqueValor: 444000,
    vmd: 12.0,
    coberturaDias: 20.0,
    leadTimeDias: 10,
    dDayDataLimite: "+10 dias",
    status: "Normal",
    pedidosAbertosQtd: 150,
    fornecedor: "Silicon Tech Global",
  },
  {
    id: "6",
    sku: "HW-4319",
    name: "Roteador Core BGP 100Gbps Carrier-Grade",
    category: "Redes",
    curvaAbc: "B",
    estoqueQtd: 5,
    custoUnit: 32000,
    estoqueValor: 160000,
    vmd: 0.6,
    coberturaDias: 8.3,
    leadTimeDias: 18,
    dDayDataLimite: "Atrasado (-10D)",
    status: "Risco Crítico",
    pedidosAbertosQtd: 0,
    fornecedor: "Quantum Networks Ltd",
  },
  {
    id: "7",
    sku: "HW-3208",
    name: "Transceiver Óptico QSFP28 100G Multi-Mode",
    category: "Redes",
    curvaAbc: "C",
    estoqueQtd: 450,
    custoUnit: 380,
    estoqueValor: 171000,
    vmd: 0.1,
    coberturaDias: 4500.0,
    leadTimeDias: 10,
    dDayDataLimite: "Sem Venda",
    status: "Estoque Parado",
    pedidosAbertosQtd: 0,
    fornecedor: "Quantum Networks Ltd",
  },
  {
    id: "8",
    sku: "HW-2190",
    name: "Unidade de Fita LTO-9 SAS Externa Backup 45TB",
    category: "Armazenamento",
    curvaAbc: "B",
    estoqueQtd: 35,
    custoUnit: 9400,
    estoqueValor: 329000,
    vmd: 0.9,
    coberturaDias: 38.8,
    leadTimeDias: 15,
    dDayDataLimite: "+23 dias",
    status: "Normal",
    pedidosAbertosQtd: 10,
    fornecedor: "HyperScale Storage Corp",
  },
];

export const MOCK_FORNECEDORES: SupplierItem[] = [
  {
    nome: "Silicon Tech Global",
    pedidosAberto: "R$ 1.480.000",
    pedidosAtrasados: "R$ 320.000",
    slaPontualidade: 89.5,
    leadTimeMedio: 12,
    status: "Atenção (Cobrar Atrasos)",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    nome: "Apex Semiconductors Corp",
    pedidosAberto: "R$ 2.100.000",
    pedidosAtrasados: "R$ 650.000",
    slaPontualidade: 74.2,
    leadTimeMedio: 20,
    status: "Crítico (SLA Violado)",
    statusColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
  {
    nome: "Quantum Networks Ltd",
    pedidosAberto: "R$ 890.000",
    pedidosAtrasados: "R$ 0",
    slaPontualidade: 98.6,
    leadTimeMedio: 8,
    status: "Excelente (SLA OK)",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    nome: "HyperScale Storage Corp",
    pedidosAberto: "R$ 1.150.000",
    pedidosAtrasados: "R$ 90.000",
    slaPontualidade: 92.0,
    leadTimeMedio: 16,
    status: "Operação Normal",
    statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
];

export const CATEGORY_CHART_DATA: CategoryCoverageItem[] = [
  { category: "Servidores", cobertura: 24, estoqueValor: 18400000, color: "bg-cyan-500", barWidth: "65%" },
  { category: "Redes", cobertura: 38, estoqueValor: 12600000, color: "bg-blue-500", barWidth: "45%" },
  { category: "Armazenamento", cobertura: 72, estoqueValor: 11800000, color: "bg-purple-500", barWidth: "82%" },
  { category: "Aceleradores", cobertura: 14, estoqueValor: 5440000, color: "bg-rose-500", barWidth: "30%" },
];

export const STATUS_DONUT_DATA: StockHealthItem[] = [
  { label: "Estoque Saudável", pct: 68, color: "#10b981", textColor: "text-emerald-400" },
  { label: "Sobreestoque", pct: 18, color: "#f59e0b", textColor: "text-amber-400" },
  { label: "Estoque Parado", pct: 10, color: "#a855f7", textColor: "text-purple-400" },
  { label: "Ruptura & Risco", pct: 4, color: "#f43f5e", textColor: "text-rose-400" },
];
