// Catálogo de produtos da Atlas Service — máquinas dos anúncios reais da OLX.
// Fotos em /public/produtos/<slug>/ são as fotos reais SEM marca aparente.
// Produtos que ainda usam imagem do Unsplash aguardam as fotos editadas (sem a
// marca Atlas Copco) que o cliente vai enviar.
// Preços não são exibidos no site: o cliente é direcionado ao WhatsApp.

export type Product = {
  slug: string;
  name: string;
  category: string;
  availability: string;
  shortDesc: string;
  description: string;
  image: string;
  imageAlt: string;
  // Fotos reais do equipamento exibidas na galeria da página do produto.
  gallery?: string[];
  quickSpecs: { label: string; value: string }[];
  specs: { label: string; value: string }[];
  applications: string[];
};

// Observação exibida na página de cada produto, conforme a disponibilidade.
export function availabilityNote(product: Product) {
  return product.availability.toLowerCase().includes("locação")
    ? "Este equipamento está disponível para venda e também para locação. Para valores, condições e disponibilidade, fale com nossos consultores pelo WhatsApp."
    : "Este item está disponível para venda. Para valores, condições e disponibilidade, fale com nossos consultores pelo WhatsApp.";
}

export const products: Product[] = [
  {
    slug: "ga-15",
    name: "Compressor Atlas Service GA 15",
    category: "Parafuso lubrificado",
    availability: "Venda e locação",
    shortDesc:
      "Parafuso lubrificado nacional, 100% revisado, com garantia de 6 meses para motor e unidade compressora.",
    description:
      "Compressor de ar tipo parafuso lubrificado, nacional, 100% revisado em nossa oficina. Equipado com módulo eletrônico, refrigeração a ar e óleo sintético com troca a cada 8.000 horas. Entregue com garantia de 6 meses para motor e unidade compressora.",
    image: "/produtos/ga-15/1.jpg",
    imageAlt: "Compressor GA 15 revisado visto de fora, gabinete completo",
    gallery: ["/produtos/ga-15/1.jpg", "/produtos/ga-15/2.jpg", "/produtos/ga-15/3.jpg"],
    quickSpecs: [
      { label: "Potência", value: "20 cv" },
      { label: "Vazão", value: "153 m³/h" },
      { label: "Pressão", value: "4 a 9 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso lubrificado, nacional" },
      { label: "Vazão de ar (FAD)", value: "153 m³/h" },
      { label: "Pressão de trabalho", value: "4,0 a 9,0 bar" },
      { label: "Potência do motor", value: "20 cv" },
      { label: "Tensão do motor", value: "380 V" },
      { label: "Tensão de comando", value: "220 V" },
      { label: "Refrigeração", value: "A ar" },
      { label: "Lubrificante", value: "Óleo sintético (8.000 horas)" },
      { label: "Controle", value: "Módulo eletrônico" },
      { label: "Nível de ruído", value: "73 dB(A)" },
      { label: "Condição", value: "100% revisado" },
      { label: "Garantia", value: "6 meses (motor e unidade compressora)" },
    ],
    applications: [
      "Oficinas industriais e serralherias",
      "Linhas de pintura e jateamento leve",
      "Acionamento de ferramentas pneumáticas",
      "Pequenas indústrias de usinagem",
    ],
  },
  {
    slug: "ga-37-vsd-ff",
    name: "Compressor Atlas Service GA 37 VSD FF",
    category: "VSD com secador integrado",
    availability: "Venda e locação",
    shortDesc:
      "Velocidade variável (VSD) com secador de ar integrado — ar seco e economia de energia numa máquina só.",
    description:
      "Compressor de ar tipo parafuso lubrificado, nacional, com acionamento de velocidade variável (VSD) e secador de ar integrado (Full Feature). Conta com módulo eletrônico, refrigeração a ar, dreno de condensado e óleo sintético com troca a cada 8.000 horas. Em excelente estado de conservação, com garantia de 12 meses.",
    image: "/produtos/ga-37-vsd-ff/1.jpg",
    imageAlt: "Compressor GA 37 VSD FF visto de fora, gabinete completo",
    gallery: [
      "/produtos/ga-37-vsd-ff/1.jpg",
      "/produtos/ga-37-vsd-ff/2.jpg",
      "/produtos/ga-37-vsd-ff/3.jpg",
      "/produtos/ga-37-vsd-ff/4.jpg",
      "/produtos/ga-37-vsd-ff/5.jpg",
    ],
    quickSpecs: [
      { label: "Potência", value: "50 cv" },
      { label: "Vazão", value: "302,8 m³/h" },
      { label: "Pressão", value: "4 a 12 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso lubrificado, nacional, VSD Full Feature" },
      { label: "Vazão de ar (FAD)", value: "302,8 m³/h" },
      { label: "Pressão de trabalho", value: "4,0 a 12,0 barg" },
      { label: "Potência do motor", value: "50 cv" },
      { label: "Alimentação", value: "380 V / 60 Hz / trifásico" },
      { label: "Tensão de comando", value: "220 V" },
      { label: "Secador de ar", value: "Integrado" },
      { label: "Dreno", value: "Dreno de condensado" },
      { label: "Refrigeração", value: "A ar" },
      { label: "Lubrificante", value: "Óleo sintético (8.000 horas)" },
      { label: "Nível de ruído", value: "69 dB(A)" },
      { label: "Condição", value: "Usado — excelente estado" },
      { label: "Garantia", value: "12 meses" },
    ],
    applications: [
      "Plantas com demanda de ar variável",
      "Indústrias com meta de eficiência energética",
      "Processos que exigem ar seco (pintura, instrumentação)",
      "Operação em múltiplos turnos com carga flutuante",
    ],
  },
  {
    slug: "ga-55",
    name: "Compressor Atlas Service GA 55",
    category: "Parafuso lubrificado",
    availability: "Venda e locação",
    shortDesc:
      "Revisado e com garantia, equipado com módulo eletrônico Elektronikon MK IV.",
    description:
      "Compressor de parafuso Atlas Service GA 55 revisado, com garantia, equipado com módulo eletrônico MK IV. Máquina em excelente estado de conservação, pronta para entrar em operação. Consulte nossos consultores para a configuração completa da unidade disponível.",
    image: "/produtos/ga-55/1.jpg",
    imageAlt: "Compressor GA 55 revisado, vista frontal com motor e unidade compressora",
    gallery: ["/produtos/ga-55/1.jpg", "/produtos/ga-55/2.jpg", "/produtos/ga-55/3.jpg"],
    quickSpecs: [
      { label: "Potência", value: "75 cv (55 kW)" },
      { label: "Controle", value: "MK IV" },
      { label: "Condição", value: "Revisado" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso lubrificado" },
      { label: "Potência nominal", value: "75 cv (55 kW)" },
      { label: "Controle", value: "Módulo eletrônico Elektronikon MK IV" },
      { label: "Condição", value: "Usado — excelente estado, revisado" },
      { label: "Garantia", value: "Sim — consulte condições" },
      { label: "Demais especificações", value: "Sob consulta com nossos consultores" },
    ],
    applications: [
      "Indústrias metalúrgicas de médio porte",
      "Linhas de envase e embalagens",
      "Manutenção industrial e caldeiraria",
      "Produção contínua em dois turnos",
    ],
  },
  {
    slug: "ga-75-ff",
    name: "Compressor Atlas Service GA 75 FF",
    category: "Parafuso com secador integrado",
    availability: "Venda e locação",
    shortDesc:
      "100 cv com secador de ar integrado e garantia de 12 meses — ar comprimido seco para produção pesada.",
    description:
      "Compressor de ar tipo parafuso lubrificado, nacional, com secador de ar integrado (Full Feature). Conta com módulo eletrônico, refrigeração a ar, dreno de condensado e óleo sintético com troca a cada 8.000 horas. Em excelente estado de conservação, com garantia de 12 meses.",
    image: "/produtos/ga-75-ff/1.jpg",
    imageAlt: "Compressor GA 75 FF visto de fora, gabinete completo",
    gallery: ["/produtos/ga-75-ff/1.jpg", "/produtos/ga-75-ff/2.jpg", "/produtos/ga-75-ff/3.jpg"],
    quickSpecs: [
      { label: "Potência", value: "100 cv" },
      { label: "Vazão", value: "768,8 m³/h" },
      { label: "Pressão", value: "4 a 12 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso lubrificado, nacional, Full Feature" },
      { label: "Vazão de ar (FAD)", value: "768,8 m³/h" },
      { label: "Pressão de trabalho", value: "4,0 a 12,0 barg" },
      { label: "Potência do motor", value: "100 cv" },
      { label: "Alimentação", value: "380 V / 60 Hz / trifásico" },
      { label: "Tensão de comando", value: "220 V" },
      { label: "Secador de ar", value: "Integrado" },
      { label: "Dreno", value: "Dreno de condensado" },
      { label: "Refrigeração", value: "A ar" },
      { label: "Lubrificante", value: "Óleo sintético (8.000 horas)" },
      { label: "Nível de ruído", value: "69 dB(A)" },
      { label: "Condição", value: "Usado — excelente estado" },
      { label: "Garantia", value: "12 meses" },
    ],
    applications: [
      "Produção contínua em três turnos",
      "Siderurgia e fundições",
      "Processos que exigem ar seco na rede",
      "Grandes indústrias",
    ],
  },
  {
    slug: "ga-75-90",
    name: "Compressor Atlas Service GA 75/90",
    category: "Parafuso lubrificado",
    availability: "Venda e locação",
    shortDesc:
      "Máquina completa da linha de 100 a 125 cv, revisada e pronta para produção pesada.",
    description:
      "Compressor de parafuso da linha GA 75/90, vendido como máquina completa, revisada e pronta para entrar em operação. Potência na faixa de 100 a 125 cv, indicada para produção contínua e operação severa. Consulte nossos consultores para a configuração exata da unidade disponível.",
    // Foto provisória: gabinete da linha GA 75 (mesma carcaça) — trocar quando o
    // cliente enviar a foto real da máquina GA 75/90.
    image: "/produtos/ga-75-90/1.jpg",
    imageAlt: "Compressor de parafuso da linha GA 75/90, gabinete completo",
    gallery: ["/produtos/ga-75-90/1.jpg"],
    quickSpecs: [
      { label: "Potência", value: "100 a 125 cv" },
      { label: "Linha", value: "GA 75/90" },
      { label: "Condição", value: "Revisado" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso lubrificado — máquina completa" },
      { label: "Potência nominal", value: "100 a 125 cv (75/90 kW)" },
      { label: "Condição", value: "Revisado" },
      { label: "Demais especificações", value: "Sob consulta com nossos consultores" },
    ],
    applications: [
      "Produção contínua em três turnos",
      "Siderurgia e fundições",
      "Mineração e britagem",
      "Grandes indústrias",
    ],
  },
  {
    slug: "unidade-revisada-ga-55-75-90",
    name: "Unidade Compressora Revisada GA 55/75/90",
    category: "Unidade compressora",
    availability: "Venda",
    shortDesc:
      "O \"coração\" do compressor, revisado, para a linha GA 55/75/90 — também disponível unidade S16 Chicago Pneumatic.",
    description:
      "Unidade compressora (elemento de parafuso) revisada para compressores da linha GA 55/75/90 — vendida separadamente da máquina. Também dispomos de unidade revisada S16 Chicago Pneumatic. Solução ideal para recuperar a performance do seu compressor com custo muito menor que a troca da máquina completa. Consulte nossos consultores para detalhes da unidade disponível.",
    image: "/produtos/unidade-revisada-ga-55-75-90/1.jpg",
    imageAlt: "Unidade compressora revisada e pintada, vista de frente na oficina",
    gallery: [
      "/produtos/unidade-revisada-ga-55-75-90/1.jpg",
      "/produtos/unidade-revisada-ga-55-75-90/2.jpg",
      "/produtos/unidade-revisada-ga-55-75-90/3.jpg",
      "/produtos/unidade-revisada-ga-55-75-90/4.jpg",
    ],
    quickSpecs: [
      { label: "Aplicação", value: "GA 55/75/90" },
      { label: "Condição", value: "Revisada" },
      { label: "Alternativa", value: "S16 Chicago Pneumatic" },
    ],
    specs: [
      { label: "Item", value: "Unidade compressora (elemento de parafuso), vendida separadamente" },
      { label: "Aplicação", value: "Compressores da linha GA 55, GA 75 e GA 90" },
      { label: "Condição", value: "Revisada" },
      { label: "Também disponível", value: "Unidade revisada S16 Chicago Pneumatic" },
      { label: "Demais especificações", value: "Sob consulta com nossos consultores" },
    ],
    applications: [
      "Reposição em compressores GA 55/75/90",
      "Recuperação de máquina com unidade desgastada",
      "Redução de custo frente à troca do compressor completo",
      "Manutenção corretiva de grande porte",
    ],
  },
  {
    slug: "ga-90-vsd-ff",
    name: "Compressor Atlas Service GA 90 VSD FF",
    category: "VSD com secador integrado",
    availability: "Venda e locação",
    shortDesc:
      "125 cv com velocidade variável, secador incorporado e dreno eletrônico — eficiência para grandes demandas.",
    description:
      "Compressor de ar tipo parafuso lubrificado, nacional, com acionamento de velocidade variável (VSD) e secador de ar por refrigeração incorporado com gás ecológico R410A. Conta com módulo eletrônico, refrigeração a ar, dreno eletrônico com sensor de nível (EWD) e óleo sintético com troca a cada 8.000 horas. Em excelente estado de conservação.",
    image: "/produtos/ga-90-vsd-ff/1.jpg",
    imageAlt: "Compressor GA 90 VSD FF visto de fora, com painel de controle",
    gallery: [
      "/produtos/ga-90-vsd-ff/1.jpg",
      "/produtos/ga-90-vsd-ff/2.jpg",
      "/produtos/ga-90-vsd-ff/3.jpg",
    ],
    quickSpecs: [
      { label: "Potência", value: "125 cv" },
      { label: "Vazão", value: "1,6 a 8,8 m³/min" },
      { label: "Pressão", value: "4 a 13 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso lubrificado, nacional, VSD Full Feature" },
      { label: "Vazão de ar (FAD)", value: "1,6 a 8,8 m³/min" },
      { label: "Pressão de trabalho", value: "4,0 a 13,0 barg" },
      { label: "Potência do motor", value: "125 cv" },
      { label: "Alimentação", value: "440 V / 60 Hz / trifásico" },
      { label: "Tensão de comando", value: "220 V" },
      { label: "Secador de ar", value: "Por refrigeração, incorporado (gás ecológico R410A)" },
      { label: "Dreno", value: "Eletrônico com sensor de nível (EWD)" },
      { label: "Refrigeração", value: "A ar" },
      { label: "Lubrificante", value: "Óleo sintético (8.000 horas)" },
      { label: "Nível de ruído", value: "69 dB(A)" },
      { label: "Conexão de saída", value: "G 1 1/2\"" },
      { label: "Condição", value: "Usado — excelente estado" },
    ],
    applications: [
      "Plantas de grande porte com demanda variável",
      "Operações 24/7 com carga flutuante",
      "Indústrias com meta de eficiência energética",
      "Processos que exigem ar seco e limpo",
    ],
  },
  {
    slug: "ga-160",
    name: "Compressor Atlas Service GA 160",
    category: "Parafuso lubrificado",
    availability: "Venda e locação",
    shortDesc:
      "200 cv e 1.508 m³/h de vazão para as maiores demandas — mineração e indústria pesada, com garantia de 12 meses.",
    description:
      "Compressor de ar tipo parafuso lubrificado, nacional, para as maiores demandas de ar comprimido. Equipado com módulo eletrônico, refrigeração a ar e óleo sintético com troca a cada 8.000 horas. Em excelente estado de conservação, com garantia de 12 meses. Aceitamos propostas de troca.",
    image: "/produtos/ga-160/1.jpg",
    imageAlt: "Interior do compressor GA 160 revisado, com ventiladores e unidade compressora",
    gallery: [
      "/produtos/ga-160/1.jpg",
      "/produtos/ga-160/2.jpg",
      "/produtos/ga-160/3.jpg",
      "/produtos/ga-160/4.jpg",
    ],
    quickSpecs: [
      { label: "Potência", value: "200 cv" },
      { label: "Vazão", value: "1.508 m³/h" },
      { label: "Pressão", value: "4 a 9 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso lubrificado, nacional" },
      { label: "Vazão de ar (FAD)", value: "1.508 m³/h" },
      { label: "Pressão de trabalho", value: "4,0 a 9,0 bar" },
      { label: "Potência do motor", value: "200 cv" },
      { label: "Alimentação", value: "380 V / 60 Hz / trifásico" },
      { label: "Tensão de comando", value: "220 V" },
      { label: "Refrigeração", value: "A ar" },
      { label: "Lubrificante", value: "Óleo sintético (8.000 horas)" },
      { label: "Controle", value: "Módulo eletrônico" },
      { label: "Nível de ruído", value: "69 dB(A)" },
      { label: "Conexão de saída", value: "G 2 1/2\"" },
      { label: "Condição", value: "Usado — excelente estado" },
      { label: "Garantia", value: "12 meses" },
      { label: "Aceita trocas", value: "Sim" },
    ],
    applications: [
      "Mineração e frentes de lavra",
      "Britagem e beneficiamento de minério",
      "Siderurgia e indústria pesada",
      "Grandes indústrias com produção contínua",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productWhatsAppMessage(name: string) {
  return `Olá! Tenho interesse no ${name} (venda ou locação), pode me passar mais informações?`;
}
