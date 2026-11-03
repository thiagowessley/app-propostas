import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const dudaAcompanhamentoConteudo: PropostaData = {
  slug: 'duda-acompanhamento-conteudo',
  estilo: 'dossie',
  dossie: {
    retrato: { src: '/img/portfolio/camila-oliveira.jpg', alt: 'Nutricionista falando direto pra câmera em Reels educativo', largura: 720, altura: 1280, foco: '50% 24%', mira: ['50%', '31%'] },
    galeria: [
      { src: '/img/portfolio/natalia-merheb.jpg', alt: 'Especialista em vídeo educativo sobre saúde', largura: 405, altura: 720, foco: '50% 26%' },
      { src: '/img/portfolio/patricia-gurgel.jpg', alt: 'Especialista em vídeo de depoimento', largura: 405, altura: 720, foco: '50% 30%' },
    ],
    titulo: { fino: 'Conteúdo toda semana,', grosso: 'gravado no seu espaço e editado aqui, com pauta e legenda prontas.' },
    lede: 'Um acompanhamento mensal para o perfil publicar toda semana sem depender de estúdio, de deslocamento ou de aprender a editar: você grava no seu espaço, envia o material por link e recebe o vídeo pronto, com legenda, calendário e direção.',
    documento: 'Proposta comercial',
    duracao: 'a cada mês',
    base: { provas: [], produtos: [] },
    linha: {
      titulo: 'Do material bruto ao mês coberto',
      nota: 'O ciclo se repete todo mês, contado a partir da chegada do material bruto. A entrega tem prazo escrito, para o calendário não depender de sobra de agenda.',
      inicio: 'Calendário do mês',
      fim: 'Mês coberto',
    },
    marcos: [
      { dia: 'Semana 1', nome: 'Calendário e pauta' },
      { dia: 'Semana 2', nome: 'Gravação e envio' },
      { dia: 'Semana 3', nome: 'Vídeos editados' },
      { dia: 'Semana 4', nome: 'Legenda e carrossel' },
    ],
    teste: [
      { etapa: 'Pauta', nome: 'Gancho e estrutura, comigo' },
      { etapa: 'Gravação', nome: 'No seu espaço, com o guia' },
      { etapa: 'Envio', nome: 'Por link, direto do celular' },
      { etapa: 'Edição', nome: 'Corte, ritmo e legenda' },
      { etapa: 'Publicação', nome: 'No ritmo que você escolher' },
    ],
    videos: [
      { youtubeId: 'V5lMb2SksPs', titulo: 'Exemplo de edição: Maria Eduarda', poster: '/img/portfolio/camila-oliveira.jpg' },
    ],
    paineis: [
      { tipo: 'teste', titulo: 'Como o mês roda', legenda: 'Do calendário ao vídeo pronto para postar.' },
      null,
      { tipo: 'videos', titulo: 'Padrão de edição', legenda: 'Exemplo de vídeo editado no formato Reels.' },
    ],
    secoesExtras: ['sobre', 'referencias'],
    fecho: 'O perfil publica toda semana, com você gravando vinte minutos no seu espaço.',
    depois: 'Quando o volume de vídeo crescer, o próximo degrau é a gravação assistida ao vivo, no plano Direção.',
  },
  cliente: 'Maria Eduarda Longatto',
  segmento: 'Nutricionista, saúde da mulher e saúde capilar',
  servico: 'Acompanhamento de Conteúdo',
  validade: '2026-11-10',
  envio: '2026-11-03',
  intro_capa: 'Este acompanhamento mantém o seu perfil publicando semanalmente sem depender de estúdio nem de deslocamento: você grava no seu espaço e recebe o vídeo editado, com legenda e pauta prontas.',
  valor: {
    principal: 997,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Confirmar o acompanhamento',

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
      problema: 'Produzir vídeo a distância costuma falhar no mesmo ponto: o material fica no celular, a legenda fica para depois e o perfil passa semanas sem publicar, justamente quando mais precisa aparecer.',
      publico: 'Mulheres que te acompanham pelo Instagram antes de marcar consulta, presencial ou online, e que passam a te encontrar também pela saúde capilar.',
      desafio: 'Manter a publicação constante numa rotina nova, em outra cidade, sem equipe, sem estúdio e sem parar o atendimento para editar.',
      entregas: [
        'Vídeo pronto para postar toda semana, sem fila de edição acumulada',
        'Legenda, hashtag e chamada escritas, prontas para colar',
        'Gravação de 20 minutos no seu espaço, com o resto resolvido aqui',
        'Comunicação ajustada para a virada de nutrição para saúde capilar',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Boas-vindas e direção',
        periodo: 'PRIMEIRAS DUAS SEMANAS',
        itens: [
          { titulo: 'Guia de gravação do seu espaço', descricao: 'Onde apoiar o celular, como resolver a luz da sala e o som, o enquadramento que funciona no seu consultório.', resultado: 'Um lugar de gravação testado, que não precisa ser montado de novo a cada vídeo' },
          { titulo: 'Padrão visual do perfil', descricao: 'Paleta, fontes, capa de Reels, carrossel e capa de destaques, no mesmo desenho em toda peça.', resultado: 'Perfil com cara de marca, não de vídeo solto' },
          { titulo: 'Calendário do mês', descricao: 'Pauta do mês com o dia de cada publicação, separando nutrição e saúde capilar.', resultado: 'Você sabe o que gravar antes de ligar a câmera' },
        ],
        resumo: 'Você grava sem improvisar e sabe o que publicar no mês inteiro',
      },
      {
        numero: '02',
        titulo: 'Rotina de produção',
        periodo: 'TODO MÊS',
        itens: [
          { titulo: 'Captação no seu espaço, edição aqui', descricao: 'O material bruto chega por link e volta editado, com corte, ritmo, legenda e cor.', limite: 'até 10 vídeos por mês' },
          { titulo: 'Legenda pronta', descricao: 'Copy, hashtag e chamada de cada vídeo, escritas para o seu público, não genéricas.' },
          { titulo: 'Entrega em até 5 dias úteis', descricao: 'Lote recebido tem prazo escrito para voltar. Nada fica parado esperando.', limite: '5 dias úteis por lote' },
        ],
        resumo: 'O perfil publica toda semana sem você editar nada',
      },
      {
        numero: '03',
        titulo: 'Ajuste e crescimento',
        periodo: 'TODO MÊS',
        itens: [
          { titulo: 'Call de 1 hora', descricao: 'O que funcionou, o que cortar, e o que muda no mês seguinte. A call não acumula para o mês seguinte.', limite: '1 call por mês' },
          { titulo: 'Carrossel a partir do vídeo', descricao: 'Um dos vídeos do mês vira carrossel, para o mesmo assunto render mais de uma publicação.', limite: '1 carrossel por mês' },
          { titulo: 'Cortes para stories', descricao: 'Três cortes verticais prontos para usar nos stories, sem precisar reeditar.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Kit de Conteúdo',
        resumo: 'Arquivo pronto, sem reunião',
        itens: [
          'Até 10 vídeos editados por mês, com corte, legenda, cor e transição',
          'Legenda pronta de cada vídeo, com hashtag e chamada',
          'Calendário editorial do mês, com pautas e datas',
          'Guia de gravação em PDF, feito para o seu espaço',
          'Checklist de gravação de uma página',
          'Um template de capa de Reels no seu padrão',
          'Três cortes verticais para stories por mês',
          'Revisão de bio, destaques e link do perfil, uma vez',
          'Trilha licenciada, sem risco de direito autoral',
          'Entrega em até 5 dias úteis após receber o bruto',
          'Uma rodada de alteração por vídeo',
          'Arquivos finais disponíveis por 12 meses',
        ],
        valor: 597,
        periodo: '/mês',
        rodape: 'Permanência de 6 meses',
        colunasItens: 2,
      },
      {
        nome: 'Acompanhamento',
        destaque: true,
        resumo: 'Material pronto mais direção mensal',
        itens: [
          'Tudo do Kit de Conteúdo',
          'Uma call de 1 hora por mês, com pauta e correção de rota',
          'Mentoria de gravação: 4 horas em dois encontros',
          'Design do seu padrão visual: paleta, fontes, capa, carrossel e destaques',
          'Biblioteca com 50 ganchos prontos',
          'Um carrossel por mês, a partir de um dos vídeos',
          'Uma diária de captação presencial de boas-vindas',
        ],
        valor: 997,
        periodo: '/mês',
        rodape: 'Permanência de 4 meses',
        colunasItens: 2,
      },
      {
        nome: 'Direção',
        resumo: 'Edição avançada e gravação assistida',
        itens: [
          'Tudo do Acompanhamento, com edição avançada',
          'Edição avançada: efeitos, animação e imagens de apoio',
          'Gravação assistida: 2 horas por chamada, uma vez por mês, você grava e eu corrijo na hora',
          'Análise do perfil a cada trimestre, com o que repetir e o que parar',
        ],
        valor: 1497,
        periodo: '/mês',
        rodape: 'Permanência de 3 meses',
        colunasItens: 2,
      },
    ],
    prazos: [
      { texto: 'Os vídeos são entregues em até 5 dias úteis depois que o material bruto chega.', bold: 'até 5 dias úteis' },
      { texto: 'Cada vídeo tem uma rodada de alteração, pedida em até 7 dias corridos após a entrega e devolvida em até 2 dias úteis.', bold: 'uma rodada de alteração' },
      { texto: 'O calendário do mês seguinte é enviado até o dia 25 do mês corrente, para você gravar com antecedência.', bold: 'até o dia 25' },
      { texto: 'A call mensal acontece dentro do mês da mensalidade e não acumula para o mês seguinte.', bold: 'não acumula' },
      { texto: 'A mentoria de gravação acontece em dois encontros de 2 horas, no primeiro mês.', bold: 'dois encontros de 2 horas' },
      { texto: 'A diária de boas-vindas é presencial, em Joinville ou região, no primeiro mês do acompanhamento.', bold: 'no primeiro mês' },
    ],
    contrato: [
      {
        titulo: 'Escopo e entrega',
        itens: [
          'A edição cobre corte, ritmo, legenda, cor e transição. Efeitos, animação e imagens de apoio entram na edição avançada.',
          'São até 10 vídeos por mês. Material acima disso entra como lote extra, orçado antes de ser produzido.',
          'Os arquivos finais ficam disponíveis por 12 meses. O material bruto fica em backup por 60 dias e pode ser descartado depois.',
          'Capa de vídeo, gestão de redes sociais, tráfego pago e cobertura de evento não fazem parte deste acompanhamento e podem ser orçados à parte.',
        ],
      },
      {
        titulo: 'Conteúdo e responsabilidade',
        itens: [
          'Gancho, estrutura e chamada são meus. A informação técnica, a checagem e a responsabilidade pelo que é dito são suas, como especialista.',
          'Posso recusar a edição de conteúdo que viole a lei, direito de terceiros ou o código de ética da sua profissão, sem que isso configure descumprimento.',
          'A trilha sonora usada nas edições é licenciada, sem risco de direito autoral.',
        ],
      },
      {
        titulo: 'Permanência e pagamento',
        itens: [
          'A mensalidade é cobrada até o 5º dia útil de cada mês, via Pix ou transferência, com nota fiscal.',
          'Cada plano tem permanência mínima própria. Antes desse prazo, o encerramento tem multa de 50% das mensalidades restantes.',
          'Material bruto enviado com atraso desloca a entrega na mesma proporção.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Mensalidade', descricao: 'Cobrada até o 5º dia útil de cada mês, via Pix ou transferência, para reserva do mês na agenda de edição.' },
        { titulo: 'Lote extra', descricao: 'Material acima de 10 vídeos no mês é orçado antes e cobrado junto da mensalidade seguinte.' },
        { titulo: 'Nota fiscal', descricao: 'Emitida todo mês e enviada por e-mail junto do comprovante.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'Preciso saber gravar?',
        resposta: 'Não. A mentoria de 4 horas cobre o essencial: onde apoiar o celular, como resolver luz e som, enquadramento e como falar olhando para a lente. No Kit de Conteúdo, o guia em PDF faz esse papel.',
      },
      {
        pergunta: 'Como envio o material bruto?',
        resposta: 'Por link, direto do celular ou do computador, na pasta que eu criar. Você recebe o endereço de envio no primeiro dia e usa sempre o mesmo.',
      },
      {
        pergunta: 'Quantos vídeos eu recebo no mês?',
        resposta: 'Até 10 vídeos editados, com legenda pronta. É o teto de todos os planos, e ele existe para a entrega manter o prazo.',
      },
      {
        pergunta: 'E se eu gravar mais de 10 vídeos no mês?',
        resposta: 'O excedente entra como lote extra, orçado antes de ser produzido. Você decide se quer produzir naquele mês ou guardar o material.',
      },
      {
        pergunta: 'Quem escreve o que eu falo?',
        resposta: 'O gancho, a estrutura e a chamada são meus. A informação técnica, a checagem e a responsabilidade pelo que é dito continuam suas, como especialista.',
      },
      {
        pergunta: 'A edição fica igual à dos vídeos anteriores?',
        resposta: 'Sim. Mesmo padrão de corte, ritmo e legenda que você já recebe. A diferença é o caminho: o material chega por link em vez de sair de uma diária presencial.',
      },
      {
        pergunta: 'Posso voltar a fazer diária presencial?',
        resposta: 'Sim, como diária extra, orçada à parte e marcada conforme deslocamento. A diária de boas-vindas, no primeiro mês, já está inclusa nos planos Acompanhamento e Direção.',
      },
      {
        pergunta: 'A call mensal acumula se eu não usar?',
        resposta: 'Não. A call vale dentro do mês da mensalidade. O que não for usado não passa para o mês seguinte.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: boas-vindas, guia de gravação e calendário do primeiro mês',
      'Semana 2: diária de captação presencial e mentoria de gravação',
      'Semana 3: primeiros vídeos entregues, com legenda pronta',
      'Semana 4: restante do lote, carrossel do mês e primeira call',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente a você. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o acompanhamento, os planos e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Duda, segue a proposta do acompanhamento de conteúdo para você continuar publicando de Campinas.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
