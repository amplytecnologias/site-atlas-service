// Catálogo de produtos da Atlas Service — linha nova de compressores de parafuso
// rotativo (10A a 120A). Dados técnicos extraídos da ficha técnica oficial do
// fornecedor (PDF guardado FORA do repositório, em Desktop\work\atlas-service-fornecedor,
// pois o repo é público). A marca do fabricante não é citada no site, a pedido do cliente.
// Fotos em /public/produtos/<slug>/. Obs.: o 120A usa a mesma foto do 100A
// (mesmo gabinete — foto própria ainda não disponível).
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
  // Fotos do equipamento exibidas na galeria da página do produto.
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

// Especificações comuns a toda a linha (ficha técnica do fornecedor).
const VOLTAGEM = "220 V ou 380 V / 60 Hz (versões de 8 e 10 bar)";
const PARTIDA = "Estrela-triângulo (Y-Δ)";

export const products: Product[] = [
  {
    slug: "compressor-10a",
    name: "Compressor de Parafuso 10A",
    category: "Parafuso rotativo",
    availability: "Venda e locação",
    shortDesc:
      "Compacto, com acoplamento direto e alto desempenho: 10 hp, vazão de até 38,85 pcm e baixo nível de ruído (62 dB).",
    description:
      "Compressor de ar de parafuso rotativo compacto, com acoplamento direto e alto desempenho. Com motor de 10 hp, entrega vazão de até 38,85 pcm com baixo nível de ruído (62 dB). Recomendado para aplicações que exigem eficiência com economia de espaço. Motor com registro no InMetro.",
    image: "/produtos/compressor-10a/1.png",
    imageAlt: "Compressor de parafuso 10A compacto, gabinete fechado visto de frente",
    gallery: ["/produtos/compressor-10a/1.png"],
    quickSpecs: [
      { label: "Potência", value: "10 hp" },
      { label: "Vazão", value: "até 38,85 pcm" },
      { label: "Pressão", value: "8 a 10 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso rotativo lubrificado, acoplamento direto" },
      { label: "Potência do motor", value: "7,5 kW (10 hp)" },
      { label: "Vazão efetiva (8 bar)", value: "1,1 m³/min (38,85 pcm)" },
      { label: "Vazão efetiva (10 bar)", value: "0,9 m³/min (31,78 pcm)" },
      { label: "Pressão de trabalho", value: "8 ou 10 bar" },
      { label: "Modo de partida", value: PARTIDA },
      { label: "Voltagem", value: VOLTAGEM },
      { label: "Óleo lubrificante", value: "5 L" },
      { label: "Conexão de descarga", value: "G 3/4\"" },
      { label: "Dimensões (C×L×A)", value: "900 × 640 × 850 mm" },
      { label: "Peso líquido", value: "150 kg" },
      { label: "Nível de ruído", value: "62 dB(A)" },
      { label: "Motor", value: "Registro InMetro 012 857/2024" },
    ],
    applications: [
      "Oficinas, serralherias e comércios",
      "Acionamento de ferramentas pneumáticas",
      "Pequenas indústrias",
      "Instalações com pouco espaço disponível",
    ],
  },
  {
    slug: "compressor-20a",
    name: "Compressor de Parafuso 20A",
    category: "Parafuso rotativo",
    availability: "Venda e locação",
    shortDesc:
      "Eficiência para pequenos e médios processos: 20 hp e vazão de até 77,69 pcm (2,2 m³/min), compacto e confiável.",
    description:
      "Com 20 hp de potência, o modelo 20A alcança até 77,69 pcm e 2,2 m³/min. Compacto e confiável, é perfeito para operações contínuas e ambientes que demandam desempenho constante. Motor com registro no InMetro.",
    image: "/produtos/compressor-20a/1.png",
    imageAlt: "Compressor de parafuso 20A, gabinete fechado visto de frente",
    gallery: ["/produtos/compressor-20a/1.png"],
    quickSpecs: [
      { label: "Potência", value: "20 hp" },
      { label: "Vazão", value: "até 77,69 pcm" },
      { label: "Pressão", value: "8 a 10 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso rotativo lubrificado" },
      { label: "Potência do motor", value: "15 kW (20 hp)" },
      { label: "Vazão efetiva (8 bar)", value: "2,2 m³/min (77,69 pcm)" },
      { label: "Vazão efetiva (10 bar)", value: "2,0 m³/min (70,63 pcm)" },
      { label: "Pressão de trabalho", value: "8 ou 10 bar" },
      { label: "Modo de partida", value: PARTIDA },
      { label: "Voltagem", value: VOLTAGEM },
      { label: "Óleo lubrificante", value: "10 L" },
      { label: "Conexão de descarga", value: "G 3/4\"" },
      { label: "Dimensões (C×L×A)", value: "1.080 × 750 × 1.020 mm" },
      { label: "Peso líquido", value: "280 kg" },
      { label: "Nível de ruído", value: "68 dB(A)" },
      { label: "Motor", value: "Registro InMetro 012 857/2024" },
    ],
    applications: [
      "Pequenos e médios processos industriais",
      "Operações contínuas",
      "Linhas de pintura e jateamento leve",
      "Usinagem e metalurgia leve",
    ],
  },
  {
    slug: "compressor-30a",
    name: "Compressor de Parafuso 30A",
    category: "Parafuso rotativo",
    availability: "Venda e locação",
    shortDesc:
      "Mais potência para mais produtividade: 30 hp e vazão de até 127,13 pcm (3,6 m³/min) para indústrias em expansão.",
    description:
      "Potente com 30 hp, o 30A entrega até 127,13 pcm e 3,6 m³/min. Ideal para indústrias em expansão que buscam robustez e alta capacidade de fornecimento de ar. Motor com registro no InMetro.",
    image: "/produtos/compressor-30a/1.png",
    imageAlt: "Compressor de parafuso 30A, gabinete fechado com painel de controle",
    gallery: ["/produtos/compressor-30a/1.png"],
    quickSpecs: [
      { label: "Potência", value: "30 hp" },
      { label: "Vazão", value: "até 127,13 pcm" },
      { label: "Pressão", value: "8 a 10 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso rotativo lubrificado" },
      { label: "Potência do motor", value: "22 kW (30 hp)" },
      { label: "Vazão efetiva (8 bar)", value: "3,6 m³/min (127,13 pcm)" },
      { label: "Vazão efetiva (10 bar)", value: "3,2 m³/min (113,00 pcm)" },
      { label: "Pressão de trabalho", value: "8 ou 10 bar" },
      { label: "Modo de partida", value: PARTIDA },
      { label: "Voltagem", value: VOLTAGEM },
      { label: "Óleo lubrificante", value: "13 L" },
      { label: "Conexão de descarga", value: "G 1\"" },
      { label: "Dimensões (C×L×A)", value: "1.300 × 850 × 1.165 mm" },
      { label: "Peso líquido", value: "400 kg" },
      { label: "Nível de ruído", value: "68 dB(A)" },
      { label: "Motor", value: "Registro InMetro 010 698/2023" },
    ],
    applications: [
      "Indústrias em expansão",
      "Produção em dois turnos",
      "Linhas de envase e embalagens",
      "Manutenção industrial e caldeiraria",
    ],
  },
  {
    slug: "compressor-50a",
    name: "Compressor de Parafuso 50A",
    category: "Parafuso rotativo",
    availability: "Venda e locação",
    shortDesc:
      "Alta vazão para grandes demandas: 50 hp e até 218,95 pcm (6,2 m³/min) para operações que não podem parar (24/7).",
    description:
      "Com 50 hp e vazão de até 218,95 pcm (6,2 m³/min), o compressor 50A é a escolha certa para operações industriais intensas que não podem parar (24/7). Motor com registro no InMetro.",
    image: "/produtos/compressor-50a/1.png",
    imageAlt: "Compressor de parafuso 50A, gabinete fechado visto de frente",
    gallery: ["/produtos/compressor-50a/1.png"],
    quickSpecs: [
      { label: "Potência", value: "50 hp" },
      { label: "Vazão", value: "até 218,95 pcm" },
      { label: "Pressão", value: "8 a 10 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso rotativo lubrificado" },
      { label: "Potência do motor", value: "37 kW (50 hp)" },
      { label: "Vazão efetiva (8 bar)", value: "6,2 m³/min (218,95 pcm)" },
      { label: "Vazão efetiva (10 bar)", value: "5,6 m³/min (197,76 pcm)" },
      { label: "Pressão de trabalho", value: "8 ou 10 bar" },
      { label: "Modo de partida", value: PARTIDA },
      { label: "Voltagem", value: VOLTAGEM },
      { label: "Óleo lubrificante", value: "18 L" },
      { label: "Conexão de descarga", value: "G 1 1/2\"" },
      { label: "Dimensões (C×L×A)", value: "1.400 × 1.030 × 1.345 mm" },
      { label: "Peso líquido", value: "560 kg" },
      { label: "Nível de ruído", value: "68 dB(A)" },
      { label: "Motor", value: "Registro InMetro 010 698/2023" },
    ],
    applications: [
      "Operações industriais intensas (24/7)",
      "Indústrias metalúrgicas de médio porte",
      "Processos com demanda constante de ar",
      "Produção contínua",
    ],
  },
  {
    slug: "compressor-100a",
    name: "Compressor de Parafuso 100A",
    category: "Parafuso rotativo",
    availability: "Venda e locação",
    shortDesc:
      "Performance de alto nível na sua indústria: 100 hp e impressionantes 444,97 pcm (12,6 m³/min) com eficiência energética.",
    description:
      "Oferecendo 100 hp, o modelo 100A atinge impressionantes 444,97 pcm (12,6 m³/min), cumprindo com folga demandas industriais elevadas com estabilidade e eficiência energética. Motor com registro no InMetro.",
    image: "/produtos/compressor-100a/1.png",
    imageAlt: "Compressor de parafuso 100A de grande porte, gabinete fechado",
    gallery: ["/produtos/compressor-100a/1.png"],
    quickSpecs: [
      { label: "Potência", value: "100 hp" },
      { label: "Vazão", value: "até 444,97 pcm" },
      { label: "Pressão", value: "8 a 10 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso rotativo lubrificado" },
      { label: "Potência do motor", value: "75 kW (100 hp)" },
      { label: "Vazão efetiva (8 bar)", value: "12,6 m³/min (444,97 pcm)" },
      { label: "Vazão efetiva (10 bar)", value: "11,2 m³/min (395,52 pcm)" },
      { label: "Pressão de trabalho", value: "8 ou 10 bar" },
      { label: "Modo de partida", value: PARTIDA },
      { label: "Voltagem", value: VOLTAGEM },
      { label: "Óleo lubrificante", value: "55 L" },
      { label: "Conexão de descarga", value: "G 2\"" },
      { label: "Dimensões (C×L×A)", value: "1.700 × 1.200 × 1.630 mm" },
      { label: "Peso líquido", value: "990 kg" },
      { label: "Nível de ruído", value: "72 dB(A)" },
      { label: "Motor", value: "Registro InMetro 010 698/2023" },
    ],
    applications: [
      "Demandas industriais elevadas",
      "Produção contínua em três turnos",
      "Siderurgia e fundições",
      "Grandes indústrias",
    ],
  },
  {
    slug: "compressor-120a",
    name: "Compressor de Parafuso 120A",
    category: "Parafuso rotativo",
    availability: "Venda e locação",
    shortDesc:
      "Potência para o máximo de desempenho: 120 hp e 568,57 pcm (16,1 m³/min) para grandes plantas industriais.",
    description:
      "Com 120 hp, o compressor 120A entrega 568,57 pcm (16,1 m³/min), sendo a solução perfeita para grandes plantas industriais que exigem ar comprimido de alta performance. Motor com registro no InMetro.",
    // Mesma foto do 100A (mesmo gabinete) — trocar quando houver foto própria.
    image: "/produtos/compressor-120a/1.png",
    imageAlt: "Compressor de parafuso 120A de grande porte, gabinete fechado",
    gallery: ["/produtos/compressor-120a/1.png"],
    quickSpecs: [
      { label: "Potência", value: "120 hp" },
      { label: "Vazão", value: "até 568,57 pcm" },
      { label: "Pressão", value: "8 a 10 bar" },
    ],
    specs: [
      { label: "Tipo", value: "Parafuso rotativo lubrificado" },
      { label: "Potência do motor", value: "90 kW (120 hp)" },
      { label: "Vazão efetiva (8 bar)", value: "16,1 m³/min (568,57 pcm)" },
      { label: "Vazão efetiva (10 bar)", value: "13,8 m³/min (487,34 pcm)" },
      { label: "Pressão de trabalho", value: "8 ou 10 bar" },
      { label: "Modo de partida", value: PARTIDA },
      { label: "Voltagem", value: VOLTAGEM },
      { label: "Óleo lubrificante", value: "55 L" },
      { label: "Conexão de descarga", value: "G 2 1/2\"" },
      { label: "Dimensões (C×L×A)", value: "2.100 × 1.400 × 1.580 mm" },
      { label: "Peso líquido", value: "1.250 kg" },
      { label: "Nível de ruído", value: "72 dB(A)" },
      { label: "Motor", value: "Registro InMetro 012 857/2024" },
    ],
    applications: [
      "Grandes plantas industriais",
      "Mineração e britagem",
      "Ar comprimido de alta performance em rede",
      "Produção contínua em três turnos",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productWhatsAppMessage(name: string) {
  return `Olá! Tenho interesse no ${name} (venda ou locação), pode me passar mais informações?`;
}
