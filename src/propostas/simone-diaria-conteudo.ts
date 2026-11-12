import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'
import {
  MARCOS_DO_MES,
  PRIMEIROS_30_DIAS,
  TESTE_DO_MES,
  contratoConteudoMensal,
  faqConteudoMensal,
  faseCaptacaoMensal,
  faseEdicaoMensal,
  fasePautaMensal,
  prazosConteudoMensal,
  formatarReais,
  PERFIS_CLIENTE_CONTEUDO,
} from '../lib/conteudo-mensal'

// Entrega de conteúdo mensal em vídeo, com dois níveis de edição (básica e avançada).
// A narrativa vende o MÊS, não a diária: o bloco de captação é como o mês é
// produzido, não o que a cliente compra. Decisão do Thiago em 12/11/2026.
// Área de atuação da cliente não é mencionada na proposta, por decisão de 10/11/2026.
// Perfil: profissional que fala na câmera, com equipe e unidades no caso dela.

const TAXA_UNIDADE_FORA = 500
const VALOR_BLOCO_EXTRA = 1497

export const simoneDiariaConteudo: PropostaData = {
  slug: 'simone-diaria-conteudo',
  estilo: 'dossie',
  dossie: {
    retrato: { src: '/img/portfolio/natalia-merheb.jpg', alt: 'Profissional falando direto pra câmera em vídeo de conteúdo', largura: 720, altura: 1280, foco: '50% 24%', mira: ['50%', '31%'] },
    galeria: [
      { src: '/img/portfolio/camila-oliveira.jpg', alt: 'Profissional em vídeo de depoimento', largura: 405, altura: 720, foco: '50% 26%' },
      { src: '/img/portfolio/patricia-gurgel.jpg', alt: 'Profissional em vídeo curto de conteúdo', largura: 405, altura: 720, foco: '50% 30%' },
    ],
    titulo: { fino: 'Dra. Simone Correia:', grosso: 'conteúdo novo no ar todo mês, sem parar o atendimento pra produzir.' },
    lede: 'Um ciclo por mês: a pauta fechada com você, um bloco de captação de até 3 horas e a edição no nível que você escolher. Você grava tudo de uma vez e recebe o mês pronto pra publicar.',
    documento: 'Proposta comercial',
    duracao: 'a cada mês',
    base: { provas: [], produtos: [] },
    linha: {
      titulo: 'Um mês, da pauta ao conteúdo no ar',
      nota: 'O ciclo se repete todo mês. A captação é agendada com pelo menos 5 dias úteis de antecedência, e os primeiros vídeos chegam na semana seguinte.',
      inicio: 'Pauta do mês',
      fim: 'Conteúdo no ar',
    },
    marcos: MARCOS_DO_MES,
    teste: TESTE_DO_MES,
    videos: [
      { youtubeId: 'qMZPZTCJ8S8', titulo: 'Exemplo de edição: conteúdo para redes', poster: '/img/portfolio/patricia-gurgel.jpg' },
      { youtubeId: 'w-TK32qXD4M', titulo: 'Exemplo de edição: podcast em cortes', poster: '/img/portfolio/video-podcast-fabiana-golembiewski.jpg' },
      { youtubeId: 'WoZp2Lk3ETQ', titulo: 'Exemplo de edição: fala direta', poster: '/img/portfolio/natalia-merheb.jpg' },
    ],
    paineis: [
      { tipo: 'teste', titulo: 'Como cada mês roda', legenda: 'Da pauta ao vídeo pronto pra postar.' },
      null,
      null,
      { tipo: 'videos', titulo: 'Padrão de edição', legenda: 'Exemplo de vídeo editado no formato Reels.' },
    ],
    secoesExtras: ['sobre'],
    fecho: 'Um mês inteiro de conteúdo no ar, sem tirar você do atendimento.',
    depois: 'Depois do primeiro mês, o bloco extra cobre lançamento, campanha ou semana de evento fora do calendário.',
  },
  cliente: 'Dra. Simone Correia',
  segmento: 'Clínica de tricologia, Joinville e Florianópolis/SC',
  servico: 'Conteúdo Mensal em Vídeo',
  responsavel: 'Dra. Simone Correia',
  validade: '2026-11-17',
  envio: '2026-11-10',
  intro_capa: 'Esta proposta apresenta a entrega de conteúdo mensal em vídeo pra Clínica Recupere, da Dra. Simone Correia, especializada em queda de cabelo e couro cabeludo: um bloco de captação de até 3 horas por mês, com os vídeos editados e entregues prontos pra publicar ao longo do mês. São dois níveis de edição, básica e avançada, com escopo, processo, prazos, condições e investimento descritos abaixo.',
  valor: {
    principal: 797,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Começar o conteúdo do mês',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  secoes: {
    cenario: {
      problema: 'Queda de cabelo e problema de couro cabeludo levam a pessoa a pesquisar muito antes de marcar uma avaliação. Ela vê dezenas de perfis, compara explicações e decide por quem mostra segurança no assunto. Perfil parado há semanas some dessa comparação.',
      publico: 'Homens e mulheres com queda de cabelo, alopecia ou alteração no couro cabeludo, que pesquisam no Instagram e no YouTube antes de agendar uma avaliação na Recupere.',
      desafio: 'Sustentar explicação de tricologia em vídeo toda semana, sem virar produtora do próprio conteúdo e sem tirar tempo do atendimento nas unidades.',
      entregas: [
        'Conteúdo até a próxima captação: o mês começa com vídeo pronto, sem depender de sobrar tempo na agenda',
        'Uma captação rendendo vários vídeos, em vez de um vídeo por ideia',
        'O mesmo material servindo Instagram e YouTube, sem gravar duas vezes',
        'Perfil ativo enquanto você atende: quem pesquisa encontra conteúdo deste mês',
      ],
    },
    fases: [
      fasePautaMensal(),
      faseCaptacaoMensal('02', 'no espaço que combinarmos'),
      {
        numero: '03',
        titulo: 'Formatos que entram no mês',
        periodo: 'DURANTE A CAPTAÇÃO',
        resumo:
          'Os formatos abaixo cabem na mesma captação, combinados na pauta do mês. Nenhum deles usa imagem de paciente.',
        itens: PERFIS_CLIENTE_CONTEUDO.profissional.formatos,
      },
      faseEdicaoMensal('04'),
    ],
    planos: [
      {
        nome: 'Edição Básica',
        resumo: 'O mês de conteúdo, com edição essencial',
        itens: [
          'O mês inteiro de conteúdo, gravado em um bloco de captação de até 3 horas',
          'Quantos vídeos couberem no bloco, sem número fechado de peças',
          'Edição básica: corte, legenda, cor e transição',
          'Primeiros vídeos na semana seguinte à captação, o restante ao longo do mês',
          'Permanência de 12 meses, com valor fixo o ano inteiro',
        ],
        valor: 797,
        periodo: '/mês',
        rodape: 'Plano de 12 meses. No mês a mês, R$ 997',
        video: { youtubeId: 'V5lMb2SksPs', label: 'Exemplo de edição básica: Maria Eduarda' },
      },
      {
        nome: 'Edição Avançada',
        resumo: 'O mês de conteúdo, com acabamento completo',
        itens: [
          'O mês inteiro de conteúdo, gravado em um bloco de captação de até 3 horas',
          'Quantos vídeos couberem no bloco, sem número fechado de peças',
          'Edição avançada: tudo da básica mais efeito sonoro, animação e b-roll',
          'Banco de imagens e vídeos de apoio incluso, quando você não tiver material próprio',
          'Permanência de 12 meses, com valor fixo o ano inteiro',
        ],
        valor: 1297,
        periodo: '/mês',
        rodape: 'Plano de 12 meses. No mês a mês, R$ 1.497',
        video: { youtubeId: 'JNHSNxgJT1s', label: 'Exemplo de edição avançada: Camila Oliveira' },
      },
    ],
    prazos: prazosConteudoMensal(),
    contrato: contratoConteudoMensal({
      local: 'Joinville',
      deslocamento: `A captação em Joinville não tem custo de deslocamento. Nas demais unidades, cada captação custa ${formatarReais(TAXA_UNIDADE_FORA)}, taxa fixa que cobre a ida e a volta, com data combinada junto com a agenda do mês.`,
      regraDeSetor:
        'O conteúdo respeita as regras de publicidade médica: sem antes e depois, sem promessa de resultado e sem imagem de paciente.',
      rodadasAjuste: 1,
    }),
    pagamento: {
      blocos: [
        { titulo: 'Conteúdo do mês', descricao: 'Cobrado no início de cada ciclo, via Pix ou transferência. Inclui um bloco de captação de até 3 horas por mês e a edição dos vídeos no nível escolhido.' },
        { titulo: 'Bloco extra', descricao: `${formatarReais(VALOR_BLOCO_EXTRA)} por captação avulsa além da já incluída no mês, cobrada na data da captação.` },
        { titulo: 'Captação fora de Joinville', descricao: `${formatarReais(TAXA_UNIDADE_FORA)} por captação, taxa fixa que cobre a ida e a volta, cobrada junto com a mensalidade.` },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: faqConteudoMensal({
      valorBlocoExtra: VALOR_BLOCO_EXTRA,
      extras: [
        {
          pergunta: 'E nas outras unidades, como funciona?',
          resposta: `A captação em Joinville não tem custo de deslocamento. Em Florianópolis, Curitiba ou São Paulo, a taxa é fixa de R$ ${TAXA_UNIDADE_FORA} por captação, cobrindo a ida e a volta, com a data combinada junto com a agenda do mês.`,
        },
        {
          pergunta: 'E vídeo longo pro YouTube, vocês gravam?',
          resposta:
            'É outro serviço. Vídeo de 10 a 20 minutos tem roteiro antes, mais tempo de gravação e bem mais edição, e sai em proposta própria, com preço por pacote de volume.',
        },
      ],
    }),
    primeiros_30_dias: PRIMEIROS_30_DIAS,
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente à Dra. Simone Correia. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Segue a proposta do conteúdo mensal em vídeo.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
