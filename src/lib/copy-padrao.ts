import type { SobreProfissional } from '../types/proposta'

/**
 * Textos padrao reutilizados entre propostas. Fonte unica: mudar aqui
 * muda em toda proposta que importa, sem precisar editar arquivo por
 * arquivo. Regras de tom vivem no CLAUDE.md secao 04 e 06.
 */

export const SOBRE_PADRAO: SobreProfissional = {
  saudacao: 'Quem entrega',
  paragrafos: [
    'Sou o Thiago Wessley. Atuo em comunicação, design e audiovisual para marcas que precisam de presença profissional: site que converte, conteúdo que sustenta presença e vídeo que carrega a mensagem.',
    'Nos últimos anos entreguei sites institucionais, identidade visual, cobertura de eventos e gestão de conteúdo para empresas e projetos que precisavam parecer sérios antes mesmo de crescer.',
    'Cada entrega segue o mesmo padrão: estrutura clara, estética premium e conteúdo que alimenta tanto o Google quanto as IAs que as pessoas já usam para buscar.',
  ],
  atuacao: [
    { nome: 'Audiovisual', nivel: 95 },
    { nome: 'Comunicação', nivel: 90 },
    { nome: 'Design', nivel: 88 },
    { nome: 'Desenvolvimento Web', nivel: 80 },
    { nome: 'SEO e GEO', nivel: 75 },
  ],
}

/** Nome de pagina inicial: sempre por extenso, nunca "Home" (leigo nao entende). */
export const TITULO_PAGINA_INICIAL = 'Página Inicial'

/** Nome da fase final de producao (SEO, revisao, publicacao). */
export const TITULO_FASE_LANCAMENTO = 'Ajustes finais e lançamento'

/**
 * Condicao de entrega/publicacao, tom confiante (nunca "apos o ok",
 * que soa como pedir permissao). destino opcional, ex: "na hospedagem do cliente".
 */
export function condicaoAprovacaoPublicacao(destino?: string) {
  const fim = destino ? `o site vai ao ar ${destino}.` : 'o site vai ao ar.'
  return {
    texto: `A entrega para aprovação é feita por link. Aprovado, ${fim}`,
    bold: destino ? `vai ao ar ${destino}` : 'vai ao ar',
  }
}

/** Frase de encerramento padrao, tom declarativo (sem pedir permissão nem implorar para fechar). */
export function encerramentoPadrao(oQueJaSabe: string) {
  return `Você já viu ${oQueJaSabe}. Para seguir, é só abrir a conversa no WhatsApp: a gente confirma a data e começa.`
}

/** Entrega padrao de cobertura de eventos (CLAUDE.md secao 06). */
export const ENTREGA_COBERTURA_PADRAO =
  'A entrega padrão inclui até 20 fotos editadas, um aftermovie de até 1:00 min, cortes para redes e arquivo no Flickr institucional.'

/**
 * Regra de alteracao de video em texto unico (CLAUDE.md secao 06, definido
 * 16/10/2026, caso Thais Joris). Fonte unica: mudar aqui muda em toda proposta
 * de video. `rodadas` e 2 nas propostas de edicao que o cliente ja viu, e 1 no
 * padrao novo.
 */
export const PRAZO_PEDIDO_AJUSTE_DIAS = 7
export const PRAZO_DEVOLUCAO_AJUSTE_DIAS_UTEIS = 2

/** Frase completa, para bloco de contrato e resposta de FAQ. */
export function regraAlteracaoVideo(rodadas: number) {
  const plural = rodadas === 1 ? 'rodada' : 'rodadas'
  const limite = rodadas === 1 ? 'limitada' : 'limitadas'
  return `Cada vídeo tem direito a ${rodadas} ${plural} de ajuste, ${limite} a corte de fala já gravada e ajuste de legenda. O pedido é feito em até ${PRAZO_PEDIDO_AJUSTE_DIAS} dias corridos após a entrega, e a correção volta em até ${PRAZO_DEVOLUCAO_AJUSTE_DIAS_UTEIS} dias úteis. Nova cena, nova captação ou troca de trilha são orçadas à parte.`
}

/** Item curto, para bullet de plano. */
export function resumoAlteracaoVideo(rodadas: number) {
  const plural = rodadas === 1 ? 'rodada' : 'rodadas'
  return `${rodadas} ${plural} de ajuste por vídeo (corte de fala e legenda)`
}

/** Item pronto para a lista `prazos` de qualquer proposta de video. */
export function prazoAlteracaoVideo() {
  return {
    texto: `O pedido de ajuste é feito em até ${PRAZO_PEDIDO_AJUSTE_DIAS} dias corridos após a entrega, e a correção volta em até ${PRAZO_DEVOLUCAO_AJUSTE_DIAS_UTEIS} dias úteis.`,
    bold: `até ${PRAZO_PEDIDO_AJUSTE_DIAS} dias corridos`,
  }
}
