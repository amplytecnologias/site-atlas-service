import type { NextConfig } from "next";
import path from "path";

// Redirects 301 de URLs do site antigo para as seções/páginas equivalentes do
// site novo. Todas as origens abaixo são caminhos que NÃO existem como rota real
// hoje (dariam 404) — as rotas reais são apenas "/", "/servicos/*" e
// "/produtos/<slug>". Âncoras da home: #sobre, #servicos, #produtos,
// #avaliacoes, #contato.
const legacyRedirects: { source: string; destination: string }[] = [
  // Seções da página inicial
  { source: "/contato", destination: "/#contato" },
  { source: "/produtos", destination: "/#produtos" },
  { source: "/servicos", destination: "/#servicos" },
  { source: "/empresa", destination: "/#sobre" },
  { source: "/quem-somos", destination: "/#sobre" },
  { source: "/sobre", destination: "/#sobre" },
  { source: "/avaliacoes", destination: "/#avaliacoes" },
  { source: "/depoimentos", destination: "/#avaliacoes" },
  // Páginas de serviço (URLs antigas de nível superior → sub-rota nova)
  { source: "/manutencao", destination: "/servicos/manutencao" },
  { source: "/assistencia", destination: "/servicos/manutencao" },
  { source: "/locacao", destination: "/servicos/locacao-e-venda" },
  { source: "/aluguel", destination: "/servicos/locacao-e-venda" },
  { source: "/venda", destination: "/servicos/locacao-e-venda" },
  { source: "/filtros-e-oleo", destination: "/servicos/filtros-e-oleo" },
  { source: "/filtros", destination: "/servicos/filtros-e-oleo" },
];

const nextConfig: NextConfig = {
  // Evita que o Next infira a raiz errada do workspace (há lockfiles fora do projeto).
  outputFileTracingRoot: path.join(process.cwd()),
  async redirects() {
    return legacyRedirects.map(({ source, destination }) => ({
      source,
      destination,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
