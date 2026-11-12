import type { FaseEscopo, ItemFAQ, ItemPrazo, TermoColuna } from '../types/proposta'
import { regraAlteracaoVideo } from './copy-padrao'

/**
 * Molde da ENTREGA DE CONTEÚDO MENSAL (12/11/2026).
 *
 * Decisão do Thiago em 12/11/2026, em caixa de seleção: a proposta deixa de
 * vender "diária" e passa a vender o mês. O produto não mudou (um bloco de
 * captação por mês mais a edição), mudou a ordem da narrativa: o cliente
 * compra conteúdo no ar até a próxima captação, e o bloco de captação é o
 * meio de produção desse mês.
 *
 * Motivo: vender um dia convida o cliente a comparar horas e preço ("dá pra
 * dividir em dois dias?", "se eu terminar antes tenho crédito?"). Vender o
 * mês muda a comparação para "meu perfil fica parado ou não".
 *
 * Como usar: a proposta importa os blocos daqui (marcos, teste, fases de
 * processo, prazos, contrato, FAQ, primeiros 30 dias) e escreve só o que é
 * do cliente: cenário, público, desafio, a fase de formatos e os planos.
 * Ver PERFIS_CLIENTE_CONTEUDO abaixo para o que muda em cada tipo de cliente.
 *
 * O que NÃO muda com este molde: os tetos (bloco de 3 horas, visita única e
 * contínua, vídeo de até 1:30, cancelamento com 48h, trilha travada,
 * permanência de 12 meses no anual) e a tabela de preços.
 */

export type PerfilConteudo = 'profissional' | 'clinica' | 'empresa' | 'creator'

/** Quantas horas de captação o bloco do mês tem. Teto travado na tabela de preços. */
export const HORAS_BLOCO_CAPTACAO = 3

/** Formato de cada vídeo entregue no mês. Teto travado (CLAUDE.md seção 06). */
export const TETO_VIDEO = '1 minuto e 30 segundos'

/** Antecedência mínima para agendar a captação do mês. */
export const ANTECEDENCIA_AGENDAMENTO_DIAS_UTEIS = 5

/** Antecedência mínima para cancelar ou reagendar sem perder a captação do mês. */
export const ANTECEDENCIA_CANCELAMENTO_HORAS = 48

/** Valor em reais no formato brasileiro, sem centavos, ex: "R$ 1.497". */
export function formatarReais(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

// ---------------------------------------------------------------- linha do mês

/** Os quatro pontos da linha do tempo, iguais em qualquer perfil de cliente. */
export const MARCOS_DO_MES = [
  { dia: 'Semana 1', nome: 'Pauta e agenda' },
  { dia: 'Semana 2', nome: 'Bloco de captação' },
  { dia: 'Semana 3', nome: 'Primeiros vídeos' },
  { dia: 'Semana 4', nome: 'Mês completo no ar' },
]

/** Desenho do processo em cinco etapas, iguais em qualquer perfil. */
export const TESTE_DO_MES = [
  { etapa: 'Pauta', nome: 'Temas e roteiro, seus' },
  { etapa: 'Captação', nome: 'Visita única e contínua' },
  { etapa: 'Edição', nome: 'Corte, legenda e acabamento' },
  { etapa: 'Entrega', nome: 'Por link, em MP4' },
  { etapa: 'Publicação', nome: 'No ritmo que você escolher' },
]

/** Primeiros 30 dias, iguais em qualquer perfil. */
export const PRIMEIROS_30_DIAS = [
  'Semana 1: pauta do mês fechada e captação agendada',
  'Semana 2: captação do mês e início da edição',
  'Semana 3: primeiros vídeos entregues e publicados',
  'Semana 4: restante do conteúdo entregue, mês completo no ar',
]

// ------------------------------------------------------------- fases do mês

/** Fase 01, comum a qualquer perfil: a pauta fecha e a captação ganha data. */
export function fasePautaMensal(): FaseEscopo {
  return {
    numero: '01',
    titulo: 'Pauta do mês',
    periodo: 'ANTES DA CAPTAÇÃO',
    resumo: 'Ao fim da fase, a pauta do mês está fechada e a captação tem data.',
    itens: [
      {
        titulo: 'Temas do mês',
        descricao: 'Você chega com os assuntos do mês, e o conteúdo técnico é todo seu.',
      },
      {
        titulo: 'Apoio de estrutura',
        descricao:
          'Oriento o que faz o vídeo performar: gancho, ordem da fala, tom de voz e postura. O conteúdo continua seu.',
      },
      {
        titulo: 'Agenda do mês',
        descricao: `Data marcada com pelo menos ${ANTECEDENCIA_AGENDAMENTO_DIAS_UTEIS} dias úteis de antecedência, dentro da agenda do mês.`,
        limite: `${ANTECEDENCIA_AGENDAMENTO_DIAS_UTEIS} dias úteis de antecedência`,
      },
    ],
  }
}

/** Fase de captação, comum a qualquer perfil: o mês é gravado de uma vez. */
export function faseCaptacaoMensal(numero: string, onde: string): FaseEscopo {
  return {
    numero,
    titulo: 'Captação do mês',
    periodo: 'DIA COMBINADO',
    resumo: 'Ao fim da fase, o material do mês está gravado.',
    itens: [
      {
        titulo: 'Bloco de captação',
        descricao: `Uma visita única e contínua, ${onde}, com a câmera rodando por até ${HORAS_BLOCO_CAPTACAO} horas.`,
        limite: `visita única, até ${HORAS_BLOCO_CAPTACAO} horas`,
      },
      {
        titulo: 'Conteúdo até a próxima captação',
        descricao:
          'O bloco é dimensionado pra render o mês inteiro. O limite é o tempo do bloco, não um número fechado de peças.',
      },
      {
        titulo: 'Direção de fala',
        descricao:
          'Conduzo cada gravação pra sair natural e direto ao ponto, sem repetir tomada atrás de tomada.',
      },
    ],
  }
}

/**
 * Fase de edição, comum a qualquer perfil: o mês chega pronto pra publicar.
 * Sem `nivel`, a fase descreve os dois níveis, para proposta que oferece os dois.
 */
export function faseEdicaoMensal(numero: string, nivel?: 'básica' | 'avançada'): FaseEscopo {
  const titulo = nivel ? `Edição ${nivel}` : 'Edição no nível escolhido'

  let descricao =
    'Na básica: corte, legenda, cor e transição. Na avançada, entra também efeito sonoro, animação e b-roll.'
  if (nivel === 'básica') descricao = 'Corte, legenda, cor e transição.'
  if (nivel === 'avançada')
    descricao = 'Corte, legenda, cor e transição, com efeito sonoro, animação e b-roll.'
  return {
    numero,
    titulo: 'Edição e mês pronto',
    periodo: 'APÓS A CAPTAÇÃO',
    resumo: 'Ao fim da fase, cada vídeo está pronto pra postar, organizado por semana.',
    itens: [
      { titulo, descricao },
      {
        titulo: 'Organizado por semana',
        descricao: 'Tudo entregue já separado pro mês, sem você gastar tempo planejando a ordem.',
      },
      {
        titulo: 'Entrega escalonada',
        descricao:
          'Por link, em MP4. Os primeiros vídeos chegam enquanto o resto ainda está em edição.',
        limite: 'primeiros vídeos na semana seguinte',
      },
    ],
  }
}

// ------------------------------------------------------------------- prazos

export function prazosConteudoMensal(): ItemPrazo[] {
  return [
    {
      texto: `A captação do mês é agendada com antecedência mínima de ${ANTECEDENCIA_AGENDAMENTO_DIAS_UTEIS} dias úteis, conforme disponibilidade.`,
      bold: `antecedência mínima de ${ANTECEDENCIA_AGENDAMENTO_DIAS_UTEIS} dias úteis`,
    },
    {
      texto:
        'Nas opções anuais, a permanência é de 12 meses contados a partir da primeira captação.',
      bold: 'permanência é de 12 meses',
    },
    {
      texto:
        'Os primeiros vídeos são entregues na semana seguinte à captação; o restante segue em edição e chega ao longo do mês.',
      bold: 'na semana seguinte à captação',
    },
    {
      texto: `O pedido de ajuste é feito em até 7 dias corridos após a entrega, e a correção volta em até 2 dias úteis.`,
      bold: 'até 7 dias corridos',
    },
  ]
}

// ----------------------------------------------------------------- contrato

export interface OpcoesContratoConteudoMensal {
  /** Onde a captação acontece sem custo, ex: "Joinville". */
  local: string
  /** Frase pronta sobre unidades fora do local, quando existirem. */
  deslocamento?: string
  /** Regra do setor que o conteúdo obriga a respeitar, ex: publicidade médica. */
  regraDeSetor?: string
  /** Rodadas de ajuste por vídeo. Padrão novo: 1. */
  rodadasAjuste?: number
}

export function contratoConteudoMensal(opcoes: OpcoesContratoConteudoMensal): TermoColuna[] {
  const { local, deslocamento, regraDeSetor, rodadasAjuste = 1 } = opcoes

  const condicoes = [
    `O bloco de captação é uma visita única e contínua de até ${HORAS_BLOCO_CAPTACAO} horas, sem fracionamento em mais de um encontro no mesmo dia. Encerrar antes do tempo não gera crédito nem horas a compensar em outra data.`,
    `Cada vídeo entregue sai em formato Reels ou Shorts, de até ${TETO_VIDEO}. Vídeo longo é outro serviço, orçado à parte.`,
    `Cancelamento ou reagendamento com menos de ${ANTECEDENCIA_CANCELAMENTO_HORAS} horas de antecedência perde a captação do mês, sem reposição.`,
    'A trilha sonora usada nas edições é licenciada, sem risco de direito autoral. Uma vez aprovada, não pode ser trocada sem orçamento novo.',
    'O tema, o roteiro e o conteúdo de cada vídeo são de responsabilidade da contratante.',
  ]

  if (deslocamento) condicoes.push(deslocamento)
  else condicoes.push(`A captação acontece em ${local}, sem custo de deslocamento.`)
  if (regraDeSetor) condicoes.push(regraDeSetor)

  condicoes.push(regraAlteracaoVideo(rodadasAjuste))

  return [
    {
      titulo: 'Contrato e Entrega',
      itens: [
        'O pagamento é cobrado no início de cada ciclo, para reserva da agenda do mês.',
        'A captação é agendada depois do pagamento confirmado.',
        'Os vídeos são entregues por link, em MP4, organizados por semana.',
        'Nas opções mês a mês não há permanência contratada nem multa de cancelamento.',
        'Nas opções anuais, o contrato tem permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
      ],
    },
    { titulo: 'Condições Gerais', itens: condicoes },
  ]
}

// ---------------------------------------------------------------------- FAQ

export interface OpcoesFaqConteudoMensal {
  valorBlocoExtra: number
  /** Perguntas próprias do perfil, entram depois das genéricas. */
  extras?: ItemFAQ[]
}

export function faqConteudoMensal(opcoes: OpcoesFaqConteudoMensal): ItemFAQ[] {
  const { valorBlocoExtra, extras = [] } = opcoes
  const precoExtra = formatarReais(valorBlocoExtra)

  const base: ItemFAQ[] = [
    {
      pergunta: 'Quantos vídeos saem por mês?',
      resposta: `Não tem número fechado. O limite é o tempo do bloco de captação, de até ${HORAS_BLOCO_CAPTACAO} horas, e o bloco é dimensionado pra render o mês até a próxima captação. Todo vídeo que couber nele é editado e entregue pronto pra postar.`,
    },
    {
      pergunta: 'Qual a diferença entre a edição básica e a avançada?',
      resposta:
        'A básica entrega corte, legenda, cor e transição. A avançada soma efeito sonoro, animação e b-roll, com banco de imagens incluso quando você não tiver material de apoio próprio.',
    },
    {
      pergunta: 'Os vídeos servem pro YouTube também?',
      resposta: `Sim, em formato Shorts, com o mesmo teto de ${TETO_VIDEO}. Vídeo longo de YouTube é outro serviço, com escopo e valor próprios.`,
    },
    {
      pergunta: 'O bloco de captação pode ser dividido em dois dias ou dois horários?',
      resposta:
        'Não. A captação é uma visita única e contínua. Isso mantém o formato de prestação de serviço combinado, e não uma disponibilidade fracionada ao longo do dia.',
    },
    {
      pergunta: 'Quem escreve o roteiro dos vídeos?',
      resposta:
        'O tema, o roteiro e o conteúdo são seus. Durante a gravação eu oriento estrutura, gancho, tom de voz e postura pro vídeo performar melhor, mas escrever roteiro não é escopo contratado.',
    },
    {
      pergunta: 'E se eu precisar de mais de uma captação no mês?',
      resposta: `O plano já inclui uma. Cada bloco extra custa ${precoExtra}, com prioridade na agenda por já ser cliente, e é cobrado na data da captação.`,
    },
    {
      pergunta: 'Existe fidelidade?',
      resposta:
        'Depende do plano. As opções mês a mês não têm permanência. As opções anuais têm permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
    },
    {
      pergunta: 'Quando a captação é agendada?',
      resposta: `Depois do pagamento confirmado, com pelo menos ${ANTECEDENCIA_AGENDAMENTO_DIAS_UTEIS} dias úteis de antecedência, conforme a disponibilidade da agenda.`,
    },
  ]

  return [...base, ...extras]
}

// -------------------------------------------------- o que muda por perfil

export interface PerfilConteudoDetalhe {
  /** Nome do perfil, como aparece na conversa. */
  nome: string
  /** A ideia que abre o cenário. Uma frase, sem número inventado. */
  angulo: string
  /** O que o cliente compra, dito em uma frase. */
  compra: string
  /** Quem decide, no vocabulário do perfil. */
  publico: string
  /** O que trava hoje e faz ele procurar conteúdo. */
  trava: string
  /** Formatos que cabem no bloco do mês. Vira a fase de formatos da proposta. */
  formatos: { titulo: string; descricao: string }[]
  /** O que nunca prometer nesse perfil. */
  naoPrometer: string[]
  /** Sinal real de que o mês pede mais de um bloco, ou outro tier. */
  sinalDeMaisVolume: string
}

/**
 * Guia de adaptação por tipo de cliente. Decisão de 12/11/2026: mesmo corpo,
 * cenário trocado. O que muda de um perfil para outro é o cenário, o público,
 * o desafio, a fase de formatos e os exemplos de vídeo. Fases, prazos,
 * contrato, FAQ e planos são os mesmos.
 */
export const PERFIS_CLIENTE_CONTEUDO: Record<PerfilConteudo, PerfilConteudoDetalhe> = {
  profissional: {
    nome: 'Profissional que fala na câmera',
    angulo:
      'Autoridade se constrói em repetição. Quem pesquisa antes de marcar compara quem explica com quem sumiu do feed.',
    compra: 'Um mês de explicação técnica no ar, sem tirar tempo do atendimento.',
    publico: 'Quem pesquisa no Instagram e no YouTube antes de marcar a primeira consulta.',
    trava: 'Produzir conteúdo sozinho compete direto com a agenda de atendimento.',
    formatos: [
      { titulo: 'Fala direta', descricao: 'Você explica um tema olhando pra câmera, em vídeo curto.' },
      { titulo: 'Resposta a dúvida', descricao: 'A pergunta que mais se repete no atendimento, respondida em vídeo.' },
      { titulo: 'Como é o atendimento', descricao: 'O passo a passo da primeira consulta, pra tirar o medo de quem nunca passou por isso.' },
      { titulo: 'Quem atende', descricao: 'Apresentação de quem vai receber a pessoa, com nome e função.' },
      { titulo: 'Tour pelo espaço', descricao: 'Apresentação do lugar em plano aberto, pra quem quer conhecer antes de chegar.' },
    ],
    naoPrometer: [
      'Resultado clínico, jurídico ou de qualquer natureza técnica',
      'Agenda cheia como consequência do conteúdo',
      'Antes e depois, quando o conselho do setor proíbe',
    ],
    sinalDeMaisVolume: 'lançamento, campanha sazonal, evento ou abertura de unidade nova',
  },
  clinica: {
    nome: 'Clínica ou escritório com equipe',
    angulo:
      'A pessoa não escolhe só o profissional, escolhe o lugar onde vai ser atendida. Equipe e espaço aparecem antes da primeira visita.',
    compra: 'Um mês mostrando quem atende, como funciona o processo e o que esperar da primeira visita.',
    publico: 'Quem está decidindo entre duas ou três clínicas e quer reduzir o medo de chegar.',
    trava: 'Vários profissionais, uma agenda só, e ninguém com tempo para cuidar de conteúdo.',
    formatos: [
      { titulo: 'Apresentação da equipe', descricao: 'Cada profissional com nome, especialidade e o que atende.' },
      { titulo: 'Como funciona a visita', descricao: 'O caminho da chegada ao resultado, passo a passo, sem prometer desfecho.' },
      { titulo: 'Tour pelas unidades', descricao: 'Cada endereço apresentado por dentro, pra quem escolhe pela estrutura.' },
      { titulo: 'Bastidor da equipe', descricao: 'O dia a dia de quem atende, humaniza sem expor paciente.' },
      { titulo: 'Dúvida frequente', descricao: 'A pergunta que a recepção mais escuta, respondida por quem atende.' },
    ],
    naoPrometer: [
      'Imagem de paciente sem autorização por escrito',
      'Antes e depois, quando o conselho do setor proíbe',
      'Número de pacientes ou de avaliações',
    ],
    sinalDeMaisVolume: 'equipe grande, mais de uma unidade, ou agenda que não cabe em um bloco de 3 horas',
  },
  empresa: {
    nome: 'Empresa ou marca de produto',
    angulo:
      'Quem nunca viu o produto funcionando compra pelo preço, e preço é onde a margem morre.',
    compra: 'Um mês de produto em uso, bastidor e prova de quem já usa.',
    publico: 'Quem compara fornecedores e decide pelo que consegue ver funcionando.',
    trava: 'O feed virou catálogo parado, com institucional demais e produto de menos.',
    formatos: [
      { titulo: 'Produto em uso', descricao: 'O produto resolvendo o problema, no lugar onde ele é usado.' },
      { titulo: 'Bastidor de produção', descricao: 'Como a empresa faz o que faz, do pedido à entrega.' },
      { titulo: 'Depoimento de cliente', descricao: 'Quem já usa contando o que mudou, gravado com autorização.' },
      { titulo: 'Diferença entre linhas', descricao: 'Por que existe mais de um modelo, explicado sem catálogo técnico.' },
      { titulo: 'Tour pela operação', descricao: 'Estrutura, equipe e capacidade, pra tirar a dúvida de quem compra de empresa pequena.' },
    ],
    naoPrometer: [
      'Depoimento escrito por nós ou encenado por ator',
      'Número de venda ou de faturamento gerado pelo conteúdo',
      'Garantia de resultado de campanha',
    ],
    sinalDeMaisVolume: 'linha nova, feira, data comercial ou lançamento com prazo',
  },
  creator: {
    nome: 'Creator ou marca pessoal',
    angulo:
      'Quem já grava não precisa de mais gravação, precisa de constância na edição e de um padrão que sustente a identidade.',
    compra: 'Um mês editado no seu padrão, sem você parar de gravar.',
    publico: 'Quem já acompanha o perfil e espera publicação nova com frequência.',
    trava: 'Gravar é fácil, editar todo dia não é: o material acumula e o perfil esfria.',
    formatos: [
      { titulo: 'Corte de vídeo longo', descricao: 'O melhor de uma gravação já feita, em peças curtas.' },
      { titulo: 'Reaproveitamento', descricao: 'Podcast, live ou aula que já existe virando conteúdo do mês.' },
      { titulo: 'Fala direta', descricao: 'Gravação nova no seu tom, para o que é do momento.' },
      { titulo: 'Série de um tema', descricao: 'Um assunto quebrado em partes, publicado ao longo do mês.' },
      { titulo: 'Bastidor', descricao: 'O processo por trás do conteúdo, que sustenta proximidade.' },
    ],
    naoPrometer: [
      'Crescimento de seguidores ou alcance como resultado',
      'Viralização',
      'Quantidade fixa de peças por mês',
    ],
    sinalDeMaisVolume:
      'volume alto de corte, sem necessidade de captação nova, pede o tier de só edição (Básica ou Avançada)',
  },
}
