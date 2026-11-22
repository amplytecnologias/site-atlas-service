// Chaves de conteúdo que DEPENDEM de confirmação do cliente (Gil).
// Enquanto estiverem `false`, nada disso aparece no site, no JSON-LD nem no FAQ.
// Para ligar: trocar para `true`, rodar o build e publicar.

// TODO(Gil): confirmar se pode afirmar que NÃO atendemos compressor de pistão.
// Quando `true`: mostra "Não atendemos compressores de pistão." no hero, nas
// páginas de serviço, abaixo do formulário e adiciona a pergunta no FAQ da home.
export const SHOW_NAO_ATENDEMOS_PISTAO = false;

// TODO(Gil): confirmar o valor mínimo de locação antes de publicar.
// Quando `true`: mostra "Locação a partir de R$ 3.000 por mês." na página de
// locação e venda. Obs.: até hoje a regra do site é NÃO exibir preços.
export const SHOW_PRECO_MINIMO = false;

export const NAO_ATENDEMOS_PISTAO_TEXT = "Não atendemos compressores de pistão.";
export const PRECO_MINIMO_TEXT = "Locação a partir de R$ 3.000 por mês.";

// Frase de qualificação usada em todo o site para filtrar contatos fora do perfil.
export const QUALIFICADOR_HOME =
  "Trabalhamos exclusivamente com compressores de ar de parafuso industriais.";
export const QUALIFICADOR_SERVICOS =
  "Atendemos compressores de ar de parafuso industriais, para mineração e indústria.";
export const QUALIFICADOR_FORM = "Atendemos somente compressores de parafuso industriais.";

// Linhas de qualificação das páginas de serviço, já respeitando as chaves acima.
export function serviceQualifiers({ precoMinimo = false }: { precoMinimo?: boolean } = {}) {
  return [
    QUALIFICADOR_SERVICOS,
    ...(SHOW_NAO_ATENDEMOS_PISTAO ? [NAO_ATENDEMOS_PISTAO_TEXT] : []),
    ...(precoMinimo && SHOW_PRECO_MINIMO ? [PRECO_MINIMO_TEXT] : []),
  ];
}
