import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const dudaAcompanhamentoConteudo: PropostaData = {
  slug: 'duda-acompanhamento-conteudo',
  ogImagem: '/og/duda-acompanhamento.jpg',
  cliente: 'Maria Eduarda Longatto',
  segmento: 'Nutricionista, saúde da mulher e saúde capilar',
  servico: 'Diária de Outubro e Contrato de Edição',
  validade: '2026-11-10',
  envio: '2026-11-03',
  intro_capa: 'Esta proposta resolve a diária de outubro, que já foi paga e não foi usada, e coloca na mesa os dois caminhos possíveis: seguir com um contrato de edição de 12 meses, ou encerrar o contrato atual com a multa prevista.',
  valor: {
    principal: 397,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Escolher o caminho',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  portfolio: {
    intro: [
      'Os vídeos que estão no ar hoje no seu perfil saíram do mesmo processo de edição que este contrato mantém.',
      'A diferença é que agora o material bruto chega por link, em vez de sair de uma diária presencial.',
      'O padrão de corte, ritmo e legenda continua o mesmo.',
    ],
    link: { label: 'Ver portfólio completo', url: 'https://thiagowessley.com.br/' },
    itens: [
      { titulo: 'Camila Oliveira', categoria: 'Nutricionista', imagem: '/img/portfolio/camila-oliveira.jpg' },
      { titulo: 'Natalia Merheb', categoria: 'Dermatologista', imagem: '/img/portfolio/natalia-merheb.jpg' },
      { titulo: 'Patricia Gurgel', categoria: 'Cirurgiã Ginecológica', imagem: '/img/portfolio/patricia-gurgel.jpg' },
      { titulo: 'App Serasa', categoria: 'Divulgação de App', imagem: '/img/portfolio/app-serasa.jpg' },
      { titulo: 'Type Family', categoria: 'Entrevista', imagem: '/img/portfolio/type-family.jpg' },
      { titulo: 'Dimas Neto', categoria: 'Depoimento em vídeo', imagem: '/img/portfolio/p9.jpg' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'Um contrato de conteúdo presencial não sobrevive a uma mudança de cidade. Quando ele termina no meio, sobram duas coisas para resolver: uma diária já paga e não usada, e a multa da saída antecipada.',
      publico: 'Mulheres que te acompanham pelo Instagram antes de marcar consulta, presencial ou online, e que passam a te encontrar também pela saúde capilar.',
      desafio: 'Resolver as duas sem perder o que já foi construído, e decidir com clareza se vale seguir publicando de Campinas.',
      entregas: [
        'A diária de outubro entregue antes da mudança, sem cobrança nova',
        'Dois caminhos com número na mesa, nenhum deles em aberto',
        'Se seguir, o vídeo pronto todo mês sem depender de eu estar na cidade',
        'Se encerrar, nada pendurado depois da assinatura',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'A diária de outubro',
        periodo: 'ENTRE 9 E 19 DE NOVEMBRO',
        itens: [
          { titulo: 'O que já está pago', descricao: 'A diária de outubro de 2026 foi paga e não foi realizada. Ela acontece antes da sua mudança, sem custo adicional.', resultado: 'Outubro fecha sem pendência' },
          { titulo: 'A captação do dia', descricao: 'Um dia de gravação no seu espaço, com o material que você já separou, no mesmo formato das diárias anteriores.' },
          { titulo: 'Se não der tempo', descricao: 'Não sendo realizada até 19 de novembro, o valor é convertido em crédito de edição ou devolvido, à sua escolha.' },
        ],
        resumo: 'A pendência de outubro fica resolvida antes de você ir',
      },
      {
        numero: '02',
        titulo: 'O que vem depois',
        periodo: 'DEZEMBRO EM DIANTE',
        itens: [
          { titulo: 'Caminho 1: continuar', descricao: 'Contrato de edição de 12 meses a R$ 397 por mês. Você grava em Campinas, envia por link e recebe o vídeo pronto.', limite: 'até 10 vídeos por mês' },
          { titulo: 'Caminho 2: encerrar', descricao: 'Encerramento do contrato atual em novembro, com a multa de 50% das mensalidades restantes prevista nele.', limite: 'multa do contrato atual' },
          { titulo: 'O que muda em cada um', descricao: 'Assinando o contrato novo, a multa deixa de existir. Não assinando, o encerramento acontece com ela.' },
        ],
        resumo: 'Você escolhe entre pagar a multa ou continuar com a edição',
      },
    ],
    planos: [
      {
        nome: 'Continuar com edição',
        destaque: true,
        resumo: 'Contrato de 12 meses, multa zerada',
        itens: [
          'Até 10 vídeos editados por mês',
          'Corte, ritmo, legenda e cor',
          'Legenda pronta de cada vídeo, com hashtag e chamada',
          'Trilha licenciada, sem risco de direito autoral',
          'Entrega em até 14 dias úteis por lote',
          'Uma rodada de alteração por vídeo',
          'Mentoria de gravação: 2 horas, em um encontro',
          'A multa do contrato atual deixa de existir',
        ],
        valor: 397,
        periodo: '/mês',
        rodape: 'Contrato de 12 meses, a partir de dezembro',
      },
      {
        nome: 'Encerrar em novembro',
        resumo: 'Saída pelo contrato atual',
        itens: [
          'A diária de outubro, já paga, realizada',
          'Encerramento do contrato atual em 30 de novembro',
          'Multa de 50% das mensalidades restantes',
          'Parcelamento em até 4 vezes',
        ],
        valor: 2388,
        periodo: 'multa de saída',
        rodape: 'Valor referente à saída em novembro de 2026',
      },
    ],
    prazos: [
      { texto: 'A diária de outubro é realizada entre 9 e 19 de novembro, antes da sua mudança.', bold: 'entre 9 e 19 de novembro' },
      { texto: 'Na edição mensal, a entrega é de até 14 dias úteis por lote recebido.', bold: 'até 14 dias úteis' },
      { texto: 'Cada vídeo tem uma rodada de alteração, pedida em até 7 dias corridos após a entrega e devolvida em até 2 dias úteis.', bold: 'uma rodada de alteração' },
      { texto: 'Assinando o contrato de edição de 12 meses, a multa do contrato atual deixa de existir.', bold: 'deixa de existir' },
      { texto: 'Não assinando, o encerramento acontece com a multa de 50% das mensalidades restantes prevista no contrato atual.', bold: 'com a multa' },
    ],
    contrato: [
      {
        titulo: 'A diária de outubro',
        itens: [
          'A diária de outubro de 2026 já foi paga e não foi realizada. Ela acontece em novembro, sem cobrança adicional.',
          'A entrega dessa diária em novembro e a mensalidade de novembro de 2026 se anulam: você não paga novembro, e eu entrego a diária que já estava paga. Nenhuma das partes fica devendo nada por esse mês.',
          'Não sendo realizada até 19 de novembro de 2026, o valor de R$ 597,00 é convertido em crédito de edição ou devolvido, à escolha da CONTRATANTE, e a mensalidade de novembro volta a ser devida.',
        ],
      },
      {
        titulo: 'O contrato de edição',
        itens: [
          'Prazo de 12 meses, com início em 1 de dezembro de 2026.',
          'Até 10 vídeos por mês. Acima disso, o lote extra é orçado antes de ser produzido.',
          'Saída antes dos 12 meses tem multa de 50% das mensalidades restantes.',
        ],
      },
      {
        titulo: 'Conteúdo e responsabilidade',
        itens: [
          'Gancho, estrutura e chamada são meus. A informação técnica, a checagem e a responsabilidade pelo que é dito são suas, como especialista.',
          'Capa de vídeo, gestão de redes e tráfego pago não fazem parte deste contrato e podem ser orçados à parte.',
          'A trilha usada nas edições é licenciada, sem risco de direito autoral.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Diária de outubro', descricao: 'Já paga em outubro de 2026. A entrega em novembro substitui a cobrança da mensalidade de novembro, então não há nada a pagar.' },
        { titulo: 'Contrato de edição', descricao: 'R$ 397 por mês, cobrados até o 5º dia útil de cada mês, com nota fiscal.' },
        { titulo: 'Encerramento', descricao: 'Multa de 50% das mensalidades restantes do contrato atual, podendo ser parcelada em até 4 vezes.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'A diária de outubro tem algum custo?',
        resposta: 'Não. Ela já foi paga na mensalidade de outubro de 2026 e é realizada em novembro, sem cobrança nova.',
      },
      {
        pergunta: 'E se eu não conseguir gravar antes de ir?',
        resposta: 'O valor de R$ 597,00 é convertido em crédito de edição ou devolvido, à sua escolha.',
      },
      {
        pergunta: 'O que eu pago se quiser continuar?',
        resposta: 'R$ 397 por mês, em contrato de 12 meses, e a multa do contrato atual deixa de existir.',
      },
      {
        pergunta: 'O que eu pago se quiser encerrar?',
        resposta: 'A multa de 50% das mensalidades restantes do contrato atual, que pode ser parcelada em até 4 vezes.',
      },
      {
        pergunta: 'Quantos vídeos por mês e em quanto tempo?',
        resposta: 'Até 10 vídeos, entregues em até 14 dias úteis por lote recebido, com uma rodada de alteração por vídeo.',
      },
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente a você. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('a diária de outubro, os dois caminhos e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Duda, segue a proposta com a diária de outubro e os dois caminhos para o contrato.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
