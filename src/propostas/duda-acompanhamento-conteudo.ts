import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const dudaAcompanhamentoConteudo: PropostaData = {
  slug: 'duda-acompanhamento-conteudo',
  ogImagem: '/og/duda-acompanhamento.jpg',
  cliente: 'Maria Eduarda Longatto',
  segmento: 'Nutricionista, saúde da mulher e saúde capilar',
  servico: 'Edição de Vídeo e Fechamento da Diária',
  validade: '2026-11-10',
  envio: '2026-11-03',
  intro_capa: 'Esta proposta reúne o fechamento de novembro, com as duas últimas diárias e a mentoria de gravação, e os dois formatos de edição para seguir publicando de Campinas.',
  valor: {
    principal: 997,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Confirmar o fechamento',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  portfolio: {
    intro: [
      'Os vídeos que estão no ar hoje no seu perfil saíram do mesmo processo de edição que este acompanhamento mantém.',
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
      problema: 'Mudar de cidade no meio de um contrato de conteúdo deixa duas pontas soltas: a captação presencial acaba, e a rotina de publicação não pode acabar junto.',
      publico: 'Mulheres que te acompanham pelo Instagram antes de marcar consulta, presencial ou online, e que passam a te encontrar também pela saúde capilar.',
      desafio: 'Fechar a parte presencial sem perder o que já foi construído, e sair sabendo gravar e publicar do lugar novo.',
      entregas: [
        'As duas últimas diárias, com material gravado para os meses seguintes',
        'Você gravando sozinha, com enquadramento, luz e som resolvidos',
        'Vídeo editado chegando todo mês, sem fila acumulada',
        'Nenhum contrato novo com prazo que você ainda não sabe se vai cumprir',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'O fechamento',
        periodo: 'NOVEMBRO',
        itens: [
          { titulo: 'Diária de outubro', descricao: 'A diária que você já pagou e não usou, feita antes da mudança.', resultado: 'Outubro fecha sem pendência' },
          { titulo: 'Última diária de captação', descricao: 'O último dia de gravação presencial, no seu espaço, antes de você ir.', limite: 'visita única' },
          { titulo: 'Mentoria de gravação', descricao: 'Quatro horas em dois encontros: onde apoiar o celular, como resolver luz e som, enquadramento e como falar olhando para a lente.', limite: '4 horas, dois encontros', resultado: 'Você grava sozinha no consultório novo' },
        ],
        resumo: 'Você sai de Joinville com material gravado e sabendo gravar o próximo',
      },
      {
        numero: '02',
        titulo: 'A rotina de edição',
        periodo: 'DEZEMBRO EM DIANTE',
        itens: [
          { titulo: 'Material bruto por link', descricao: 'Você grava no seu espaço e envia pelo endereço que eu criar. Não precisa editar nada.', limite: 'até 10 vídeos por mês' },
          { titulo: 'Edição e entrega', descricao: 'Corte, ritmo, legenda e cor. O vídeo volta pronto para postar.', limite: 'até 5 dias úteis por lote' },
          { titulo: 'Sem fidelidade', descricao: 'Mês a mês. No mês em que não houver material, não há cobrança.' },
        ],
        resumo: 'O perfil publica sem depender de eu estar na cidade',
      },
      {
        numero: '03',
        titulo: 'Quando o volume crescer',
        periodo: 'CONFORME A CLÍNICA PEDIR',
        itens: [
          { titulo: 'Lote extra', descricao: 'Material acima de 10 vídeos no mês é orçado antes de ser produzido.' },
          { titulo: 'Edição avançada', descricao: 'Efeitos, animação e imagens de apoio quando o vídeo pedir mais que corte e legenda.' },
          { titulo: 'Sem surpresa', descricao: 'Nada começa sem valor combinado antes.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Fechamento de novembro',
        destaque: true,
        resumo: 'Entrega única, antes da mudança',
        itens: [
          'A diária de outubro que você já pagou, realizada',
          'A última diária de captação presencial',
          'Mentoria de gravação: 4 horas em dois encontros',
          'Edição do lote das duas diárias, até 20 vídeos',
          'Entrega em até 5 dias úteis por lote',
          'Uma rodada de alteração por vídeo',
          'Encerra o contrato atual sem multa',
        ],
        valor: 997,
        periodo: 'entrega única',
        rodape: 'Realizado em novembro, antes da mudança',
      },
      {
        nome: 'Edição Básica',
        resumo: 'Vídeo pronto a partir do seu material',
        itens: [
          'Até 10 vídeos editados por mês',
          'Corte, ritmo, legenda e cor',
          'Legenda pronta de cada vídeo, com hashtag e chamada',
          'Trilha licenciada, sem risco de direito autoral',
          'Entrega em até 5 dias úteis por lote',
          'Uma rodada de alteração por vídeo',
          'Mês a mês, sem fidelidade',
        ],
        valor: 397,
        periodo: '/mês',
        rodape: 'Sobre o material que você gravar',
      },
      {
        nome: 'Edição Avançada',
        resumo: 'Edição com efeitos e animação',
        itens: [
          'Tudo da edição básica',
          'Efeitos, animação e imagens de apoio',
          'Até 10 vídeos editados por mês',
          'Entrega em até 5 dias úteis por lote',
          'Mês a mês, sem fidelidade',
        ],
        valor: 697,
        periodo: '/mês',
        rodape: 'Sobre o material que você gravar',
      },
    ],
    prazos: [
      { texto: 'O fechamento acontece em novembro, com as duas diárias na mesma janela, antes da mudança.', bold: 'antes da mudança' },
      { texto: 'Os vídeos do fechamento são entregues em até 5 dias úteis depois de cada diária.', bold: 'até 5 dias úteis' },
      { texto: 'Na edição mensal, o prazo é de até 5 dias úteis por lote recebido.', bold: 'por lote recebido' },
      { texto: 'Cada vídeo tem uma rodada de alteração, pedida em até 7 dias corridos após a entrega e devolvida em até 2 dias úteis.', bold: 'uma rodada de alteração' },
      { texto: 'A edição mensal não tem fidelidade: o mês sem material não é cobrado.', bold: 'não tem fidelidade' },
    ],
    contrato: [
      {
        titulo: 'Escopo e entrega',
        itens: [
          'O fechamento cobre duas diárias de captação, a mentoria de 4 horas e a edição de até 20 vídeos, somando as duas diárias.',
          'A edição mensal cobre até 10 vídeos por mês. Acima disso, o lote extra é orçado antes.',
          'A edição inclui corte, ritmo, legenda, cor e transição. Efeitos e animação entram na edição avançada.',
        ],
      },
      {
        titulo: 'Conteúdo e responsabilidade',
        itens: [
          'Gancho, estrutura e chamada são meus. A informação técnica, a checagem e a responsabilidade pelo que é dito são suas, como especialista.',
          'Capa de vídeo, gestão de redes e tráfego pago não fazem parte deste acompanhamento e podem ser orçados à parte.',
          'A trilha usada nas edições é licenciada, sem risco de direito autoral.',
        ],
      },
      {
        titulo: 'Pagamento e encerramento',
        itens: [
          'O fechamento é pago antes da primeira diária, via Pix ou transferência, com nota fiscal.',
          'A edição mensal é cobrada até o 5º dia útil de cada mês.',
          'Com o fechamento quitado, o contrato anterior é encerrado sem multa.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Fechamento', descricao: 'R$ 997, pago antes da primeira diária, via Pix ou transferência, com nota fiscal.' },
        { titulo: 'Edição mensal', descricao: 'R$ 397 na básica ou R$ 697 na avançada, até o 5º dia útil de cada mês.' },
        { titulo: 'Arquivos', descricao: 'Os vídeos finais ficam disponíveis por 12 meses. O material bruto, por 60 dias.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'Preciso saber gravar?',
        resposta: 'Não. A mentoria de 4 horas cobre onde apoiar o celular, luz, som e enquadramento, com uma gravação de teste entre os dois encontros.',
      },
      {
        pergunta: 'Quantos vídeos eu recebo?',
        resposta: 'Até 10 por mês na edição mensal. No fechamento, até 20, somando as duas diárias.',
      },
      {
        pergunta: 'E se eu gravar mais de 10 vídeos no mês?',
        resposta: 'O excedente vira lote extra, orçado antes de ser produzido.',
      },
      {
        pergunta: 'Preciso manter contrato depois de novembro?',
        resposta: 'Não. A edição é mês a mês, sem fidelidade. No mês sem material, não há cobrança.',
      },
      {
        pergunta: 'E a diária de outubro que eu já paguei?',
        resposta: 'É realizada em novembro, junto com a última, sem custo adicional.',
      },
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente a você. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o fechamento, a edição e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Duda, segue a proposta do fechamento de novembro e da edição para seguir de Campinas.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
