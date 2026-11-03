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
    principal: 697,
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
      desafio: 'Resolver as duas sem perder o que já foi construído, e decidir com clareza se vale seguir publicando.',
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
        periodo: 'ENTRE 6 E 19 DE NOVEMBRO',
        itens: [
          { titulo: 'O que já está pago', descricao: 'A diária de outubro de 2026 foi paga e não foi realizada. Ela acontece antes da sua mudança, sem custo adicional.', resultado: 'Outubro fecha sem pendência' },
          { titulo: 'A captação do dia', descricao: 'Um dia de gravação no seu espaço, com o material que você já separou, no mesmo formato das diárias anteriores.' },
          { titulo: 'Se não der tempo', descricao: 'Não sendo realizada até 19 de novembro, o valor fica como crédito de edição para usar quando quiser.' },
        ],
        resumo: 'A pendência de outubro fica resolvida antes de você ir',
      },
      {
        numero: '02',
        titulo: 'O que vem depois',
        periodo: 'DEZEMBRO EM DIANTE',
        itens: [
          { titulo: 'Caminho 1: continuar', descricao: 'Contrato de edição de 12 meses a R$ 697 por mês. Você grava, envia por link e recebe o vídeo pronto.', limite: 'até 10 vídeos por mês' },
          { titulo: 'Caminho 2: encerrar', descricao: 'Encerramento do contrato atual ao fim de outubro, com a multa de 50% das mensalidades restantes prevista nele.', limite: 'multa do contrato atual' },
          { titulo: 'O que muda em cada um', descricao: 'Assinando o contrato novo, a multa deixa de existir. Não assinando, o encerramento acontece com ela.' },
        ],
        resumo: 'Você escolhe entre pagar a multa ou continuar com a edição',
      },
    ],
    planos: [
      {
        nome: 'Continuar com edição Avançada',
        destaque: true,
        resumo: 'Contrato de 12 meses, multa zerada',
        itens: [
          'Até 10 vídeos editados por mês',
          'Corte, ritmo, legenda dinâmica, correção de cor e transição',
          'Efeitos sonoros, animação e b-roll',
          'Entrega em MP4, pronta para postar, em até 10 dias úteis por lote',
          'Uma rodada de alteração por vídeo',
          'A multa do contrato atual deixa de existir',
        ],
        valor: 697,
        periodo: '/mês',
        rodape: 'Contrato de 12 meses, a partir de dezembro',
        video: { youtubeId: 'JNHSNxgJT1s', label: 'Exemplo de edição avançada, Camila Oliveira' },
      },
      {
        nome: 'Encerrar o contrato',
        resumo: 'Saída antes do fim do contrato',
        itens: [
          'A diária de outubro, já paga, realizada',
          'Contrato encerrado ao fim de outubro de 2026',
          'Multa de 50% sobre as 9 mensalidades que faltavam',
          'Em 4 vezes de R$ 671,63',
        ],
        valor: 2686.5,
        periodo: 'multa de saída',
        rodape: 'Novembro de 2026 a julho de 2027',
      },
    ],
    prazos: [
      { texto: 'A diária de outubro é realizada entre 6 e 19 de novembro, antes da sua mudança.', bold: 'entre 6 e 19 de novembro' },
      { texto: 'Na edição mensal, a entrega é de até 10 dias úteis por lote recebido.', bold: 'até 10 dias úteis' },
      { texto: 'Cada vídeo tem uma rodada de alteração, pedida em até 7 dias corridos após a entrega e devolvida em até 2 dias úteis.', bold: 'uma rodada de alteração' },
      { texto: 'Assinando o contrato de edição de 12 meses, a multa do contrato atual deixa de existir.', bold: 'deixa de existir' },
      { texto: 'Não assinando, o encerramento acontece com a multa de 50% das mensalidades restantes prevista no contrato atual.', bold: 'com a multa' },
    ],
    contrato: [
      {
        titulo: 'A diária de outubro',
        itens: [
          'A diária de outubro de 2026 já foi paga e não foi realizada. Ela acontece em novembro, sem cobrança adicional, e é o que quita esse mês.',
          'Não sendo realizada até 19 de novembro de 2026, o valor de R$ 597,00 fica como crédito de edição em favor da CONTRATANTE.',
        ],
      },
      {
        titulo: 'Como a multa é calculada',
        itens: [
          'O contrato tem 12 mensalidades, de agosto de 2026 a julho de 2027, no valor de R$ 597,00 cada.',
          'Agosto, setembro e outubro já foram pagos. Restam 9 mensalidades, de novembro de 2026 a julho de 2027, somando R$ 5.373,00.',
          'A multa é de 50% sobre esse valor: R$ 2.686,50, em 4 vezes de R$ 671,63, com a primeira na assinatura.',
          'Com o contrato de edição assinado, essa multa não existe.',
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
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Diária de outubro', descricao: 'Já paga em outubro de 2026. A entrega em novembro quita esse mês, então não há nada a pagar.' },
        { titulo: 'Contrato de edição', descricao: 'R$ 697 por mês, cobrados até o 5º dia útil de cada mês, com nota fiscal.' },
        { titulo: 'Encerramento', descricao: 'R$ 2.686,50, que é 50% das 9 mensalidades restantes, de novembro de 2026 a julho de 2027. Em 4 vezes de R$ 671,63, com a primeira na assinatura do encerramento.' },
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
        resposta: 'O valor de R$ 597,00 fica como crédito de edição, para usar quando quiser.',
      },
      {
        pergunta: 'O que eu pago se quiser continuar?',
        resposta: 'R$ 697 por mês, em contrato de 12 meses, e a multa do contrato atual deixa de existir.',
      },
      {
        pergunta: 'O que eu pago se quiser encerrar?',
        resposta: 'R$ 2.686,50, que é 50% das 9 mensalidades que faltavam, de novembro de 2026 a julho de 2027. Em 4 vezes de R$ 671,63, com a primeira na assinatura do encerramento.',
      },
      {
        pergunta: 'Preciso pagar novembro se eu encerrar?',
        resposta: 'Não. O contrato se encerra ao fim de outubro, e novembro entra na conta da multa como mês restante. A diária pendente é a de outubro, já paga.',
      },
      {
        pergunta: 'Quantos vídeos por mês e em quanto tempo?',
        resposta: 'Até 10 vídeos, entregues em até 10 dias úteis por lote recebido, com uma rodada de alteração por vídeo.',
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
