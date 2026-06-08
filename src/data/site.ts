// Authoritative brand palette — sampled from the official Grupo CVRBG logo.
export const brand = {
  orange: "#f4702c",
  burgundy: "#a02330",
  brown: "#2d1612",
  cream: "#f6f4f2",
  ink: "#2d1612",
  muted: "#6f6560",
} as const;

export const company = {
  name: "Grupo CVRBG",
  foundedYear: 2005,
  whatsappNumber: "5511971291789",
  phoneDisplay: "(11) 4718-1789",
  phoneHref: "+551147181789",
  whatsappDisplay: "(11) 97129-1789",
  instagram: "@cvetricardo",
  instagramUrl: "https://instagram.com/cvetricardo",
  address: {
    line1: "Rua Idaço Bertolini, 578 — Vila Sorocabana",
    line2: "Mairinque/SP — CEP 18120-000",
  },
} as const;

/** Pre-fills a WhatsApp conversation with the institutional team. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${company.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const metrics = [
  { value: "+20", label: "anos de experiência" },
  { value: "300+", label: "colaboradores" },
  { value: "65+", label: "veículos na frota" },
  { value: "2.750", label: "animais/dia de capacidade" },
] as const;

export type SolutionIcon = "van" | "ambulance" | "clinic" | "rescue";

export const solutions = [
  {
    id: "castramoveis",
    icon: "van" as SolutionIcon,
    title: "Castramóveis e mutirões",
    text: "Unidades móveis equipadas para ampliar o acesso da população a programas de castração com segurança, fluxo organizado e equipe técnica.",
    outcome: "Mais acesso ao controle populacional",
  },
  {
    id: "samu-animal",
    icon: "ambulance" as SolutionIcon,
    title: "SAMU Animal",
    text: "Ambulâncias, profissionais e suporte operacional para respostas rápidas em ocorrências envolvendo animais.",
    outcome: "Resposta rápida a emergências",
  },
  {
    id: "ubs-animal",
    icon: "clinic" as SolutionIcon,
    title: "UBS Animal",
    text: "Apoio à implantação e operação de unidades públicas voltadas ao cuidado animal e ao atendimento da comunidade.",
    outcome: "Atendimento de proximidade",
  },
  {
    id: "resgate-manejo",
    icon: "rescue" as SolutionIcon,
    title: "Resgate e manejo",
    text: "Equipes preparadas para manejo, remoção e atendimento de animais em situações que exigem condução técnica.",
    outcome: "Condução técnica de ocorrências",
  },
] as const;

export type ValueIcon = "shield" | "process" | "chart" | "team";

export const values = [
  {
    icon: "shield" as ValueIcon,
    title: "Ética e conformidade",
    text: "Atuação alinhada às normas técnicas e aos processos da administração pública, do edital à execução.",
  },
  {
    icon: "process" as ValueIcon,
    title: "Protocolos técnicos",
    text: "Padronização de anestesia, esterilização, limpeza e manejo para operar com segurança em escala.",
  },
  {
    icon: "chart" as ValueIcon,
    title: "Transparência de dados",
    text: "Registro e acompanhamento dos atendimentos para apoiar a prestação de contas e a gestão pública.",
  },
  {
    icon: "team" as ValueIcon,
    title: "Capacidade operacional",
    text: "Equipe, frota e estrutura próprias para mobilizar operações de grande demanda em diferentes regiões.",
  },
] as const;

export const processSteps = [
  {
    title: "Diagnóstico da demanda",
    text: "Entendemos o contexto do município, o volume estimado e os objetivos do programa público.",
  },
  {
    title: "Planejamento e dimensionamento",
    text: "Definimos equipe, logística, agenda e protocolos adequados à realidade de cada operação.",
  },
  {
    title: "Operação assistida",
    text: "Executamos com unidades móveis, profissionais e estrutura preparada para alta demanda.",
  },
  {
    title: "Acompanhamento e relatórios",
    text: "Registramos os atendimentos e entregamos dados que apoiam a transparência da gestão.",
  },
] as const;

export const operatingHighlights = [
  "Castramóveis planejados para atender normas técnicas e rotinas de fiscalização.",
  "Ambientes equipados para procedimentos, emergência, climatização e controle sanitário.",
  "Protocolos de limpeza, anestesia, esterilização e manejo definidos para operação em escala.",
  "Processos de registro e acompanhamento que apoiam a transparência da gestão pública.",
] as const;

export const presenceItems = [
  "São Paulo",
  "Paraná",
  "Ceará",
  "Pernambuco",
  "Piauí",
] as const;

export const partnerItems = [
  "Governo do Estado do Ceará",
  "Estado de Pernambuco",
  "Estado do Paraná",
  "Estado de São Paulo",
  "Bauru",
  "Sorocaba",
  "Sertãozinho",
  "Paulínia",
  "Osasco",
  "Marília",
] as const;

export const pages = [
  {
    slug: "sobre",
    label: "Sobre Nós",
    title: "História, experiência e capacidade operacional",
    eyebrow: "Sobre o Grupo CVRBG",
    description:
      "A trajetória do Grupo CVRBG, sua estrutura, equipe e presença em operações públicas de saúde animal.",
  },
  {
    slug: "solucoes",
    label: "Soluções",
    title: "Soluções para gestão pública",
    eyebrow: "Operação B2G",
    description:
      "Castramóveis, SAMU Animal, UBS Animal, resgate e manejo estruturados para governos, secretarias e prefeituras.",
  },
  {
    slug: "contato",
    label: "Contato",
    title: "Contato para gestores públicos",
    eyebrow: "Fale com o Grupo",
    description:
      "Canal institucional para prefeituras, secretarias e governos interessados em estruturar uma operação de saúde pública animal.",
  },
] as const;
