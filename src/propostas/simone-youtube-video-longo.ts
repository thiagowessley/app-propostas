import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao, regraAlteracaoVideo, prazoAlteracaoVideo } from '../lib/copy-padrao'

// Vídeo longo para YouTube, proposta separada da diária de conteúdo.
// Estrutura decidida por ele em 12/11/2026: R$ 297 por vídeo de até 10 minutos,
// diária de captação cobrada à parte (R$ 997 no mês a mês, R$ 797 no anual), e a
// quantidade de diárias fica a critério da cliente (uma de 3h ou duas emendadas, 6h).
// Preço por unidade veio dele, mesmo depois de a pesquisa de mercado apontar o piso
// em R$ 497 por vídeo. Número mantido por decisão dele.
export const simoneYoutubeVideoLongo: PropostaData = {
  slug: 'simone-youtube-video-longo',
  estilo: 'dossie',
  dossie: {
    retrato: { src: '/img/portfolio/natalia-merheb.jpg', alt: 'Profissional falando direto para a câmera em vídeo de conteúdo', largura: 720, altura: 1280, foco: '50% 24%', mira: ['50%', '31%'] },
    galeria: [
      { src: '/img/portfolio/video-podcast-fabiana-golembiewski.jpg', alt: 'Profissional em gravação de conteúdo', largura: 720, altura: 405, foco: '50% 30%' },
      { src: '/img/portfolio/patricia-gurgel.jpg', alt: 'Profissional em vídeo de conteúdo', largura: 405, altura: 720, foco: '50% 30%' },
    ],
    titulo: { fino: 'Dra. Simone Correia:', grosso: 'vídeo longo no canal toda semana, gravado numa data só por mês.' },
    lede: 'A gravação é cobrada por diária, com até 5 vídeos longos por visita, e a edição é cobrada por vídeo entregue, avulsa ou em pacote fechado de 10. Você monta o volume do mês a partir disso, e cada vídeo sai pronto para subir no canal.',
    documento: 'Proposta comercial',
    duracao: 'a cada mês',
    base: { provas: [], produtos: [] },
    linha: {
      titulo: 'Um mês, da pauta ao vídeo no canal',
      nota: 'O ciclo se repete todo mês. A diária é agendada com pelo menos 5 dias úteis de antecedência, e os primeiros vídeos chegam na semana seguinte à gravação.',
      inicio: 'Pauta do mês',
      fim: 'Vídeo no canal',
    },
    marcos: [
      { dia: 'Semana 1', nome: 'Pauta e roteiro' },
      { dia: 'Semana 2', nome: 'Diária de captação' },
      { dia: 'Semana 3', nome: 'Primeira leva editada' },
      { dia: 'Semana 4', nome: 'Vídeos no canal' },
    ],
    teste: [
      { etapa: 'Pauta', nome: 'Temas e estrutura de fala' },
      { etapa: 'Diária', nome: 'Gravação numa data só' },
      { etapa: 'Edição', nome: 'Corte, ritmo, legenda e cor' },
      { etapa: 'Entrega', nome: 'Por link, em MP4' },
      { etapa: 'Publicação', nome: 'No canal, no seu ritmo' },
    ],
    paineis: [
      { tipo: 'teste', titulo: 'Como cada mês roda', legenda: 'Da pauta ao vídeo publicado.' },
      null,
      null,
      null,
    ],
    secoesExtras: ['sobre'],
    fecho: 'Canal com vídeo novo toda semana, gravado numa data só.',
    depois: 'Depois do primeiro mês, a diária de conteúdo de Reels usa a mesma visita de gravação para os cortes do Instagram.',
  },
  cliente: 'Dra. Simone Correia',
  segmento: 'Clínica de tricologia, Joinville e Florianópolis/SC',
  servico: 'Vídeo Longo para YouTube',
  responsavel: 'Dra. Simone Correia',
  validade: '2026-11-19',
  envio: '2026-11-12',
  intro_capa: 'Esta proposta apresenta o vídeo longo para o YouTube da Clínica Recupere, da Dra. Simone Correia, especializada em queda de cabelo e couro cabeludo: vídeos de até 10 minutos, com a captação cobrada por diária (até 5 vídeos por visita) e a edição cobrada por vídeo, avulsa ou em pacote fechado de 10. Há também a opção de contratar tudo junto, num pacote único. O escopo, o processo, os prazos, as condições e o investimento estão descritos abaixo.',
  valor: {
    principal: 297,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Fechar o pacote de vídeo longo',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  secoes: {
    cenario: {
      problema: 'Quem procura tratamento para queda de cabelo pesquisa muito antes de marcar avaliação, e no YouTube a pessoa assiste dez minutos de alguém explicando o assunto. Esse tempo de fala é o que constrói confiança. O problema é que vídeo longo custa bem mais produção que Reels, e a maioria dos consultórios para no terceiro vídeo.',
      publico: 'Pessoas pesquisando no YouTube sobre queda de cabelo, alopecia e alterações do couro cabeludo, antes de marcar uma avaliação na Recupere.',
      desafio: 'Sustentar vídeo novo no canal toda semana sem virar produtora do próprio conteúdo e sem tirar tempo do atendimento nas quatro unidades.',
      entregas: [
        'Captação em diária de 3 horas, com até 5 vídeos longos por visita',
        'Duas diárias emendadas no mesmo dia somam 6 horas e cobrem até 10 vídeos',
        'A edição de cada vídeo, comprada por unidade ou em pacote fechado de 10',
        'Arquivos em MP4, prontos para subir no canal',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Pauta e roteiro',
        periodo: 'ANTES DA DIÁRIA',
        resumo: 'Ao fim da fase, os temas do mês estão fechados e cada vídeo tem a estrutura de fala definida.',
        itens: [
          { titulo: 'Temas do mês', descricao: 'Você traz os assuntos, e o conteúdo técnico é todo seu. Eu ajudo a ordenar o que entra em cada vídeo.' },
          { titulo: 'Estrutura de fala', descricao: 'Gancho nos primeiros segundos, desenvolvimento e fechamento com o próximo passo, combinados antes da gravação.' },
          { titulo: 'Roteiro é seu', descricao: 'O texto e a informação são de responsabilidade sua. Meu apoio é de estrutura e condução, não de conteúdo médico.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Diária de captação',
        periodo: 'DIA COMBINADO',
        resumo: 'Ao fim da fase, o material do mês está gravado.',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Uma visita única e contínua, no espaço que combinarmos, com a câmera rodando por até 3 horas e até 5 vídeos longos gravados.', limite: 'até 5 vídeos por diária' },
          { titulo: 'Tudo numa data só', descricao: 'Duas diárias emendadas somam 6 horas de gravação e cobrem até 10 vídeos num único dia.', limite: '2 diárias, 6 horas' },
          { titulo: 'Direção de fala', descricao: 'Conduzo cada gravação para sair natural e no ritmo certo, sem repetir tomada atrás de tomada.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Edição do vídeo longo',
        periodo: 'APÓS A DIÁRIA',
        resumo: 'Ao fim da fase, cada vídeo está montado e pronto para o canal.',
        itens: [
          { titulo: 'Corte e ritmo', descricao: 'Removo pausa, repetição e erro de gravação. Vídeo longo vive de ritmo, senão a pessoa abandona no minuto dois.' },
          { titulo: 'Legenda, cor e transição', descricao: 'Acabamento padrão em todos os vídeos, com legenda para quem assiste sem som.' },
          { titulo: 'Trilha licenciada', descricao: 'A música usada é licenciada, sem risco de direito autoral, e uma vez aprovada não muda sem orçamento novo.' },
        ],
      },
      {
        numero: '04',
        titulo: 'Entrega',
        periodo: 'APÓS A EDIÇÃO',
        resumo: 'Ao fim da fase, os arquivos estão com você e o calendário de publicação está definido.',
        itens: [
          { titulo: 'Arquivo em MP4', descricao: 'Entrega por link, em MP4, na resolução do canal.' },
          { titulo: 'Data sugerida de publicação', descricao: 'Cada vídeo sai com a data sugerida, para o canal não ficar parado entre uma leva e outra.' },
          { titulo: 'Capa é serviço à parte', descricao: 'Arte de capa e thumbnail não estão inclusas. São orçadas quando você quiser.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Captação',
        resumo: 'A gravação, por diária',
        itens: [
          'Uma diária de 3 horas, visita única e contínua',
          'Até 5 vídeos longos de 10 minutos por diária',
          'Duas diárias emendadas no mesmo dia somam 6 horas e cobrem até 10 vídeos, por R$ 1.994',
          'Em Joinville, sem custo de deslocamento',
        ],
        valor: 997,
        periodo: '/diária',
        rodape: 'No plano anual, R$ 797 por diária, com permanência de 12 meses.',
      },
      {
        nome: 'Edição',
        resumo: 'Cobrada por vídeo',
        itens: [
          'Até 10 minutos de duração final por vídeo',
          'Corte, ritmo, legenda, cor e transição',
          'Trilha licenciada, sem risco de direito autoral',
          'Entrega em MP4, por link, com data sugerida de publicação',
        ],
        valor: 297,
        periodo: '/vídeo',
        rodape: 'Pacote fechado de 10 vídeos: R$ 2.500. Acima disso, cada vídeo volta a R$ 297.',
      },
      {
        nome: 'Pacote completo',
        resumo: 'A gravação e a edição juntas',
        itens: [
          'Captação de 10 vídeos, em duas diárias emendadas de 6 horas',
          'A edição dos 10 vídeos, de até 10 minutos cada',
          'Uma data de gravação por mês, sem voltar ao estúdio',
          'Entrega em MP4, por link, com data sugerida de publicação',
        ],
        valor: 3000,
        periodo: '/mês',
        rodape: 'No plano anual, R$ 2.800 por ciclo, com permanência de 12 meses.',
      },
    ],
    prazos: [
      { texto: 'A diária do mês é agendada com antecedência mínima de 5 dias úteis, conforme disponibilidade.', bold: 'antecedência mínima de 5 dias úteis' },
      { texto: 'Os vídeos são entregues em até 7 dias úteis por lote de até 10 vídeos, contados do fim da captação.', bold: 'em até 7 dias úteis por lote' },
      { texto: 'Nas opções anuais, a permanência é de 12 meses contados a partir da primeira diária.', bold: 'permanência é de 12 meses' },
      prazoAlteracaoVideo(),
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é cobrado no início de cada ciclo, para reserva da agenda.',
          'A diária é agendada depois do pagamento confirmado.',
          'Os vídeos são entregues por link, em MP4, com a data sugerida de publicação.',
          'Nas opções mês a mês não há permanência contratada nem multa de cancelamento.',
          'Nas opções anuais, o contrato tem permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'Cada vídeo entregue tem até 10 minutos de duração final. Passou disso, é um vídeo novo, cobrado como unidade adicional.',
          'A diária cobre a captação, não a edição. Ela entrega até 5 vídeos longos por visita, é uma visita única e contínua, e quando forem duas no mesmo dia elas são emendadas e somam 6 horas de gravação.',
          'A edição é contratada por vídeo, avulsa ou em pacote fechado de 10. Ela não está inclusa na diária de captação, com uma única exceção: o pacote completo, que já traz a captação de 10 vídeos e a edição dos 10.',
          'Cancelamento ou reagendamento com menos de 48 horas de antecedência perde a diária do mês, sem reposição.',
          'A trilha sonora usada nas edições é licenciada. Uma vez aprovada, não pode ser trocada sem orçamento novo.',
          'O tema, o roteiro e o conteúdo de cada vídeo são de responsabilidade da contratante.',
          'A diária acontece em Joinville, sem custo de deslocamento. Nas demais unidades (Florianópolis, Curitiba e São Paulo), o deslocamento é orçado à parte, com passagem, hospedagem e alimentação por conta da contratante.',
          'Capa, thumbnail, cortes para Reels e publicação no canal não estão incluídos neste escopo.',
          'O conteúdo respeita as regras de publicidade médica: sem antes e depois, sem promessa de resultado e sem imagem de paciente.',
          regraAlteracaoVideo(1),
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Edição, por vídeo', descricao: 'R$ 297 por vídeo entregue. Em pacote fechado de 10, sai por R$ 2.500.' },
        { titulo: 'Captação, por diária', descricao: 'R$ 997 por diária de 3 horas, com até 5 vídeos longos. Duas emendadas cobrem 10 vídeos e somam R$ 1.994.' },
        { titulo: 'Pacote completo', descricao: 'A captação de 10 vídeos e a edição dos 10, numa data só por mês, por R$ 3.000. No plano anual, R$ 2.800.' },
        { titulo: 'Deslocamento', descricao: 'Joinville não tem custo. Florianópolis, Curitiba e São Paulo são orçados à parte.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'Quantos vídeos saem por diária?',
        resposta: 'Até 5 vídeos longos de 10 minutos por diária de 3 horas. Cada vídeo precisa de tempo para sair inteiro, sem correria. Duas diárias emendadas cobrem até 10.',
      },
      {
        pergunta: 'Dá para gravar oito vídeos num dia só?',
        resposta: 'Dá, com duas diárias emendadas, somando 6 horas. A conta é sempre de até 5 vídeos por diária, e oito cabe nas duas.',
      },
      {
        pergunta: 'Quanto fica por mês?',
        resposta: 'O pacote completo, com 10 vídeos gravados e editados, fica R$ 3.000 no mês a mês, ou R$ 2.800 no plano anual. Quatro vídeos com uma diária ficam R$ 2.185.',
      },
      {
        pergunta: 'Os cortes para Reels estão inclusos?',
        resposta: 'Não. O vídeo longo é entregue inteiro, sem os cortes verticais. Os cortes fazem parte da diária de conteúdo, que é uma proposta separada.',
      },
      {
        pergunta: 'Quem escreve o roteiro?',
        resposta: 'O tema, o roteiro e a informação são seus. Antes da gravação eu ajudo a definir gancho, ordem da fala e fechamento, mas escrever roteiro não é escopo contratado.',
      },
      {
        pergunta: 'Posso gravar fora de Joinville?',
        resposta: 'Sim. A diária acontece em Joinville sem custo. Nas unidades de Florianópolis, Curitiba e São Paulo, o deslocamento é orçado à parte.',
      },
      {
        pergunta: 'E se eu quiser mais vídeos num mês?',
        resposta: 'Cada vídeo avulso custa R$ 297. Acima de 5 vídeos gravados no mês, entra uma diária adicional de R$ 997.',
      },
      {
        pergunta: 'Existe fidelidade?',
        resposta: 'Depende do plano. O mês a mês não tem permanência. O plano anual tem permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: temas e estrutura de fala definidos, diária agendada',
      'Semana 2: diária de captação',
      'Semana 3: primeira leva editada e entregue',
      'Semana 4: restante dos vídeos no canal',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente à Dra. Simone Correia. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Segue a proposta do pacote de vídeo longo para o YouTube.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
