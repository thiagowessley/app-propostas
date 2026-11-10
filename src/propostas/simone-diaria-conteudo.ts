import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao, regraAlteracaoVideo, prazoAlteracaoVideo } from '../lib/copy-padrao'

// Diária de conteúdo em vídeo, com dois níveis de edição (básica e avançada).
// Área de atuação da cliente não é mencionada na proposta, por decisão do Thiago em 10/11/2026.
export const simoneDiariaConteudo: PropostaData = {
  slug: 'simone-diaria-conteudo',
  estilo: 'dossie',
  dossie: {
    retrato: { src: '/img/portfolio/natalia-merheb.jpg', alt: 'Profissional falando direto pra câmera em vídeo de conteúdo', largura: 720, altura: 1280, foco: '50% 24%', mira: ['50%', '31%'] },
    galeria: [
      { src: '/img/portfolio/camila-oliveira.jpg', alt: 'Profissional em vídeo de depoimento', largura: 405, altura: 720, foco: '50% 26%' },
      { src: '/img/portfolio/patricia-gurgel.jpg', alt: 'Profissional em vídeo curto de conteúdo', largura: 405, altura: 720, foco: '50% 30%' },
    ],
    titulo: { fino: 'Dra. Simone Correia:', grosso: 'captação e edição de vídeo todo mês, com vídeo novo no ar mesmo em semana cheia.' },
    lede: 'Uma visita de captação de até 3 horas por mês e a edição dos vídeos, no nível que você escolher. Você grava tudo de uma vez, e eu devolvo pronto pra postar.',
    documento: 'Proposta comercial',
    duracao: 'a cada mês',
    base: { provas: [], produtos: [] },
    linha: {
      titulo: 'Um mês, da pauta ao vídeo no ar',
      nota: 'O ciclo se repete todo mês. A diária é agendada com pelo menos 5 dias úteis de antecedência, e os primeiros vídeos chegam na semana seguinte à captação.',
      inicio: 'Pauta do mês',
      fim: 'Conteúdo no ar',
    },
    marcos: [
      { dia: 'Semana 1', nome: 'Pauta e agenda' },
      { dia: 'Semana 2', nome: 'Diária de captação' },
      { dia: 'Semana 3', nome: 'Primeiros vídeos' },
      { dia: 'Semana 4', nome: 'Conteúdo no ar' },
    ],
    teste: [
      { etapa: 'Pauta', nome: 'Temas e roteiro, seus' },
      { etapa: 'Diária', nome: 'Visita única e contínua' },
      { etapa: 'Edição', nome: 'Corte, legenda e acabamento' },
      { etapa: 'Entrega', nome: 'Por link, em MP4' },
      { etapa: 'Publicação', nome: 'No ritmo que você escolher' },
    ],
    videos: [
      { youtubeId: 'qMZPZTCJ8S8', titulo: 'Exemplo de edição: conteúdo para redes', poster: '/img/portfolio/patricia-gurgel.jpg' },
    ],
    paineis: [
      { tipo: 'teste', titulo: 'Como cada mês roda', legenda: 'Da pauta ao vídeo pronto pra postar.' },
      null,
      null,
      { tipo: 'videos', titulo: 'Padrão de edição', legenda: 'Exemplo de vídeo editado no formato Reels.' },
    ],
    secoesExtras: ['sobre'],
    fecho: 'Vídeo no ar todo mês, sem tirar você do atendimento.',
    depois: 'Depois do primeiro mês, a diária extra cobre lançamento, campanha ou semana de evento fora do calendário.',
  },
  cliente: 'Dra. Simone Correia',
  segmento: 'Conteúdo em vídeo para Instagram e YouTube, Joinville/SC',
  servico: 'Diária de Conteúdo em Vídeo',
  responsavel: 'Dra. Simone Correia',
  validade: '2026-11-17',
  envio: '2026-11-10',
  intro_capa: 'Esta proposta apresenta a diária de conteúdo em vídeo pra Dra. Simone Correia: uma visita de captação de até 3 horas por mês, com os vídeos editados e entregues prontos pra postar. São duas opções de edição, básica e avançada, com escopo, processo, prazos, condições e investimento descritos abaixo.',
  valor: {
    principal: 797,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Agendar a diária de conteúdo',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  secoes: {
    cenario: {
      problema: 'Quem atende e toca o próprio negócio grava quando sobra tempo, e nunca sobra. O perfil passa semanas sem nada novo enquanto o trabalho continua acontecendo.',
      publico: 'Quem encontra você pelo Instagram antes de marcar um atendimento, e quem acompanha pelo YouTube pra decidir com calma antes de falar com você.',
      desafio: 'Produzir vídeo com constância sem virar produtora do próprio conteúdo e sem tirar tempo do que gera receita.',
      entregas: [
        'Um bloco de gravação por mês, com vídeo pra até a próxima diária',
        'Vídeos num padrão só, em vez de celular na mão entre um atendimento e outro',
        'O mesmo material servindo Instagram e YouTube, sem gravar duas vezes',
        'Primeiros vídeos no ar na semana seguinte à diária',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Pauta e agenda',
        periodo: 'ANTES DA DIÁRIA',
        resumo: 'Ao fim da fase, a pauta do mês está fechada e a diária tem data.',
        itens: [
          { titulo: 'Temas e roteiro', descricao: 'Você chega com os assuntos do mês, e o conteúdo técnico é todo seu.' },
          { titulo: 'Apoio de estrutura', descricao: 'Oriento o que ajuda o vídeo a performar: gancho, ordem da fala, tom de voz e postura. O conteúdo continua seu.' },
          { titulo: 'Agendamento', descricao: 'Data marcada com pelo menos 5 dias úteis de antecedência, dentro da agenda do mês.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Diária de captação',
        periodo: 'DIA COMBINADO',
        resumo: 'Ao fim da fase, o material do mês está gravado.',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Uma visita única, no espaço que combinarmos, com a câmera rodando por até 3 horas.', limite: 'visita única, até 3 horas' },
          { titulo: 'Quantos vídeos couberem', descricao: 'O limite é o tempo da diária, não um número fechado de peças. Encerra quando você sentir que já é suficiente.' },
          { titulo: 'Direção de fala', descricao: 'Conduzo cada gravação pra sair natural e direto ao ponto, sem repetir tomada atrás de tomada.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Estilos de vídeo que entram',
        periodo: 'DURANTE A DIÁRIA',
        resumo: 'Os cinco formatos abaixo cabem na mesma diária, combinados na pauta do mês.',
        itens: [
          { titulo: 'Fala direta', descricao: 'Você explica um tema olhando pra câmera, em vídeo curto de 30 a 60 segundos.' },
          { titulo: 'Resposta a dúvida', descricao: 'A pergunta que mais se repete no seu atendimento, respondida em vídeo.' },
          { titulo: 'Bastidores', descricao: 'A rotina por trás do que você faz: preparo, organização, o antes e o depois.' },
          { titulo: 'Depoimento', descricao: 'Quem já foi atendido conta o que mudou, gravado no mesmo dia.', limite: 'gravação combinada com antecedência' },
          { titulo: 'Tour pelo espaço', descricao: 'Apresentação do lugar em plano aberto, pra quem quer conhecer antes de chegar.' },
        ],
      },
      {
        numero: '04',
        titulo: 'Edição e entrega',
        periodo: 'APÓS A DIÁRIA',
        resumo: 'Ao fim da fase, cada vídeo está pronto pra postar, organizado por semana.',
        itens: [
          { titulo: 'Edição no nível escolhido', descricao: 'Na básica: corte, legenda, cor e transição. Na avançada, entra também efeito sonoro, animação e b-roll.' },
          { titulo: 'Organização por semana', descricao: 'Tudo entregue já separado pro mês, sem você gastar tempo planejando a ordem.' },
          { titulo: 'Entrega escalonada', descricao: 'Por link, em MP4. Os primeiros vídeos chegam enquanto o resto ainda está em edição.', limite: 'primeiros vídeos na 1ª semana' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Edição Básica',
        resumo: 'Captação e edição essencial',
        itens: [
          '1 diária de captação por mês, visita única de até 3 horas',
          'Quantidade de vídeos livre dentro do tempo da diária',
          'Edição básica: corte, legenda, cor e transição',
          'Primeiros vídeos na semana seguinte à diária',
          'Permanência de 12 meses, com valor fixo o ano inteiro',
        ],
        valor: 797,
        periodo: '/mês',
        rodape: 'Plano anual. Sem permanência, R$ 997 por mês',
        video: { youtubeId: 'V5lMb2SksPs', label: 'Exemplo de edição básica: Maria Eduarda' },
      },
      {
        nome: 'Edição Avançada',
        resumo: 'Captação e edição com acabamento',
        itens: [
          '1 diária de captação por mês, visita única de até 3 horas',
          'Quantidade de vídeos livre dentro do tempo da diária',
          'Edição avançada: tudo da básica mais efeito sonoro, animação e b-roll',
          'Banco de imagens e vídeos de apoio incluso, quando você não tiver material próprio',
          'Permanência de 12 meses, com valor fixo o ano inteiro',
        ],
        valor: 1297,
        periodo: '/mês',
        rodape: 'Plano anual. Sem permanência, R$ 1.497 por mês',
        video: { youtubeId: 'JNHSNxgJT1s', label: 'Exemplo de edição avançada: Camila Oliveira' },
      },
    ],
    prazos: [
      { texto: 'A diária do mês é agendada com antecedência mínima de 5 dias úteis, conforme disponibilidade.', bold: 'antecedência mínima de 5 dias úteis' },
      { texto: 'Nas opções anuais, a permanência é de 12 meses contados a partir da primeira diária.', bold: 'permanência é de 12 meses' },
      { texto: 'Os primeiros vídeos são entregues na semana seguinte à diária; o restante segue em edição e chega ao longo do mês.', bold: 'na semana seguinte à diária' },
      prazoAlteracaoVideo(),
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é cobrado no início de cada ciclo, para reserva da agenda.',
          'A diária é agendada depois do pagamento confirmado.',
          'Os vídeos são entregues por link, em MP4, organizados por semana.',
          'Nas opções mês a mês não há permanência contratada nem multa de cancelamento.',
          'Nas opções anuais, o contrato tem permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'A diária é uma visita única e contínua de até 3 horas, sem fracionamento em mais de um encontro no mesmo dia. Encerrar antes do tempo não gera crédito nem horas a compensar em outra data.',
          'Cada vídeo entregue sai em formato Reels ou Shorts, de até 1 minuto e 30 segundos. Vídeo longo é outro serviço, orçado à parte.',
          'Cancelamento ou reagendamento com menos de 48 horas de antecedência perde a diária do mês, sem reposição.',
          'A trilha sonora usada nas edições é licenciada, sem risco de direito autoral. Uma vez aprovada, não pode ser trocada sem orçamento novo.',
          'O tema, o roteiro e o conteúdo de cada vídeo são de responsabilidade da contratante.',
          'Diária fora de Joinville e região: valor ajustado conforme deslocamento, combinado à parte.',
          regraAlteracaoVideo(1),
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Mensalidade', descricao: 'Cobrada no início de cada ciclo, via Pix ou transferência. Inclui 1 diária de captação por mês e a edição dos vídeos no nível escolhido.' },
        { titulo: 'Diária Extra', descricao: 'R$ 1.497 por diária avulsa além da já incluída no mês, cobrada na data da captação.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'Quantos vídeos saem por diária?',
        resposta: 'Não tem número fechado. O limite é o tempo da diária, de até 3 horas de captação: quantos vídeos couberem nesse bloco, todos editados e prontos pra postar.',
      },
      {
        pergunta: 'Qual a diferença entre a edição básica e a avançada?',
        resposta: 'A básica entrega corte, legenda, cor e transição. A avançada soma efeito sonoro, animação e b-roll, com banco de imagens incluso quando você não tiver material de apoio próprio.',
      },
      {
        pergunta: 'Os vídeos servem pro YouTube também?',
        resposta: 'Sim, em formato Shorts, com o mesmo teto de 1 minuto e 30 segundos. Vídeo longo de YouTube é outro serviço, com escopo e valor próprios.',
      },
      {
        pergunta: 'A diária pode ser dividida em dois dias ou dois horários?',
        resposta: 'Não. A diária é uma visita única e contínua. Isso mantém o formato de prestação de serviço combinado, e não uma disponibilidade fracionada ao longo do dia.',
      },
      {
        pergunta: 'Quem escreve o roteiro dos vídeos?',
        resposta: 'O tema, o roteiro e o conteúdo são seus. Durante a gravação eu oriento estrutura, gancho, tom de voz e postura pro vídeo performar melhor, mas escrever roteiro não é escopo contratado.',
      },
      {
        pergunta: 'E se eu precisar de mais de uma diária no mês?',
        resposta: 'O plano já inclui uma. Cada diária extra custa R$ 1.497, com prioridade na agenda por já ser cliente, e é cobrada na data da captação.',
      },
      {
        pergunta: 'Existe fidelidade?',
        resposta: 'Depende do plano. As opções mês a mês não têm permanência. As opções anuais têm permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
      },
      {
        pergunta: 'Quando a diária é agendada?',
        resposta: 'Depois do pagamento confirmado, com pelo menos 5 dias úteis de antecedência, conforme a disponibilidade da agenda.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: pauta do mês fechada e diária agendada',
      'Semana 2: diária de captação e início da edição',
      'Semana 3: primeiros vídeos entregues e publicados',
      'Semana 4: restante do conteúdo entregue, conteúdo do mês no ar',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente à Dra. Simone Correia. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Segue a proposta da diária de conteúdo em vídeo.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
