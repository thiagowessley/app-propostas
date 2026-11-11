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
    // Sem foto na abertura: ele ainda não tem vídeo longo no portfólio, e imagem de outro
    // formato daria a entender que existe referência do serviço (pedido dele em 12/11/2026).
    titulo: { fino: 'Dra. Simone Correia:', grosso: 'vídeo longo para o YouTube todo mês, com o canal trabalhando enquanto você atende.' },
    lede: 'Pacotes mensais de 4, 8 ou 10 vídeos de até 10 minutos, com a gravação e a edição já inclusas. Você escolhe o volume do mês, e cada vídeo chega pronto para subir no canal.',
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
      { dia: 'Semana 3', nome: 'Primeiros vídeos entregues' },
      { dia: 'Semana 4', nome: 'Pacote fechado' },
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
    fecho: 'Canal ativo toda semana, com o vídeo atendendo por você.',
    depois: 'Depois do primeiro mês, os cortes para o Instagram saem do mesmo material, pagando só a edição.',
  },
  cliente: 'Dra. Simone Correia',
  segmento: 'Clínica de tricologia, Joinville e Florianópolis/SC',
  servico: 'Vídeo Longo para YouTube',
  responsavel: 'Dra. Simone Correia',
  validade: '2026-11-19',
  envio: '2026-11-12',
  intro_capa: 'Esta proposta apresenta o vídeo longo para o YouTube da Clínica Recupere, da Dra. Simone Correia, especializada em queda de cabelo e couro cabeludo: pacotes mensais de 4, 8 ou 10 vídeos de até 10 minutos, com a gravação e a edição inclusas. O escopo, o processo, os prazos, as condições e o investimento estão descritos abaixo.',
  valor: {
    principal: 1797,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Confirmar o pacote de vídeo longo',
  ctaSecundario: { rotulo: 'Prefiro tirar uma dúvida antes', mensagem: 'Oi Thiago, tenho uma dúvida sobre a proposta de vídeo longo' },

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  secoes: {
    cenario: {
      problema: 'Quem procura tratamento para queda de cabelo pesquisa muito antes de marcar avaliação, e no YouTube a pessoa assiste dez minutos de alguém explicando o assunto. Esse tempo de fala é o que constrói confiança. O problema é que vídeo longo custa bem mais produção que Reels, e a maioria dos consultórios para no terceiro vídeo.',
      publico: 'Pessoas pesquisando no YouTube sobre queda de cabelo, alopecia e alterações do couro cabeludo, antes de marcar uma avaliação na Recupere.',
      desafio: 'Sustentar vídeo novo no canal toda semana sem virar produtora do próprio conteúdo e sem tirar tempo do atendimento nas quatro unidades.',
      entregas: [
        '4, 8 ou 10 vídeos de até 10 minutos por mês, no pacote que você escolher',
        'Gravação e edição já inclusas no pacote, sem diária cobrada à parte',
        'Uma data de gravação por mês, com os vídeos entregues ao longo das semanas seguintes',
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
          { titulo: 'Captação em vídeo', descricao: 'Uma visita única e contínua, no espaço que combinarmos, com a câmera rodando até o material do mês fechar.', limite: 'visita única' },
          { titulo: 'Uma ou duas diárias', descricao: 'O pacote de 4 vídeos cabe numa diária de 3 horas. Os de 8 e 10 ocupam duas diárias, emendadas no mesmo dia.', limite: 'até 6 horas no mesmo dia' },
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
        nome: 'Pacote de 4 vídeos',
        resumo: 'Entrada no canal',
        itens: [
          'R$ 449 por vídeo, com a gravação inclusa',
          '4 vídeos de até 10 minutos por mês',
          'Gravação inclusa, numa diária de 3 horas',
          'Edição completa: corte, ritmo, legenda, cor e transição',
          'Entrega de 2 vídeos por semana, fechando em duas semanas',
        ],
        valor: 1797,
        periodo: '/mês',
        rodape: 'Plano de 12 meses. No mês a mês, R$ 1.997.',
      },
      {
        nome: 'Pacote de 8 vídeos',
        resumo: 'Um vídeo novo a cada semana',
        itens: [
          'R$ 312 por vídeo, com a gravação inclusa',
          '8 vídeos de até 10 minutos por mês',
          'Gravação inclusa, em duas diárias emendadas de 3 horas',
          'Edição completa: corte, ritmo, legenda, cor e transição',
          'Entrega de 2 vídeos por semana, fechando em quatro semanas',
        ],
        valor: 2497,
        periodo: '/mês',
        rodape: 'Plano de 12 meses. No mês a mês, R$ 2.797.',
      },
      {
        nome: 'Pacote de 10 vídeos',
        resumo: 'Canal com dois vídeos por semana',
        itens: [
          'R$ 270 por vídeo, com a gravação inclusa',
          '10 vídeos de até 10 minutos por mês',
          'Gravação inclusa, em duas diárias emendadas de 3 horas',
          'Edição completa: corte, ritmo, legenda, cor e transição',
          'Entrega de 3 vídeos por semana, fechando em quatro semanas',
        ],
        valor: 2697,
        periodo: '/mês',
        destaque: true,
        selo: 'Melhor valor por vídeo',
        rodape: 'Plano de 12 meses. No mês a mês, R$ 2.997.',
      },
    ],
    combo: {
      titulo: 'Somando com a diária de conteúdo',
      texto: 'Os cortes para Reels saem do mesmo material que já foi gravado no pacote, então não existe captação de novo. Você paga só a edição dos cortes.',
      itens: [
        'Edição básica dos cortes: R$ 397 por mês, em vez de R$ 997 da diária de conteúdo',
        'Edição avançada dos cortes: R$ 697 por mês, com b-roll e animação',
        'O mesmo dia de gravação serve o canal e o Instagram',
      ],
    },
    notaPlanos: 'No mercado, editar um vídeo de 10 minutos custa de R$ 600 a R$ 1.200, sem a gravação. Os valores acima já incluem captação e edição.',
    prazos: [
      { texto: 'A diária do mês é agendada com antecedência mínima de 5 dias úteis, conforme disponibilidade.', bold: 'antecedência mínima de 5 dias úteis' },
      { texto: 'A entrega fecha em até quatro semanas: 2 vídeos por semana nos pacotes de 4 e 8, e 3 por semana no pacote de 10.', bold: 'em até quatro semanas' },
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
          'O ritmo de entrega é de 2 vídeos por semana nos pacotes de 4 e 8, e de 3 por semana no pacote de 10, sempre a partir da semana seguinte à captação.',
          'Nas opções mês a mês não há permanência contratada nem multa de cancelamento.',
          'Nas opções anuais, o contrato tem permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'Cada vídeo entregue tem até 10 minutos de duração final. Passou disso, é um vídeo novo, cobrado como unidade adicional.',
          'Cada pacote já inclui a gravação e a edição dos vídeos daquele volume. Não existe diária cobrada à parte dentro do pacote.',
          'A gravação é uma visita única e contínua. Quando o pacote pede duas diárias, elas são emendadas no mesmo dia e somam 6 horas de gravação.',
          'Vídeo além do volume do pacote custa R$ 297 e entra conforme a agenda do mês.',
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
        { titulo: 'Plano de 12 meses', descricao: 'R$ 1.797 no de 4 vídeos, R$ 2.497 no de 8 e R$ 2.697 no de 10, cobrados por mês, com valor fixo o ano inteiro. Gravação e edição já estão dentro.' },
        { titulo: 'Mês a mês', descricao: 'R$ 1.997, R$ 2.797 e R$ 2.997 por mês, na mesma ordem, sem permanência contratada.' },
        { titulo: 'Vídeo além do pacote', descricao: 'R$ 297 por vídeo, cobrado junto com a mensalidade do mês em que ele entrar.' },
        { titulo: 'Deslocamento', descricao: 'Joinville não tem custo. Florianópolis, Curitiba e São Paulo são orçados à parte.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'Como funciona a gravação?',
        resposta: 'O pacote de 4 vídeos cabe numa diária de 3 horas. Os de 8 e 10 ocupam duas diárias emendadas, somando 6 horas. Em todos, a gravação do mês acontece numa data só.',
      },
      {
        pergunta: 'Dá para gravar tudo num dia só?',
        resposta: 'Dá. A gravação é sempre uma visita única e contínua, e quando o pacote pede duas diárias elas são emendadas na mesma data.',
      },
      {
        pergunta: 'Quanto fica por mês?',
        resposta: 'R$ 1.797 no pacote de 4 vídeos, R$ 2.497 no de 8 e R$ 2.697 no de 10, no plano de 12 meses. No mês a mês, R$ 1.997, R$ 2.797 e R$ 2.997, na mesma ordem.',
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
        pergunta: 'O que eu preciso preparar para o dia da gravação?',
        resposta: 'Você chega com os temas definidos, que são seus. Eu levo câmera, luz e áudio e cuido do enquadramento e do som. Roupa e cenário a gente combina antes da data.',
      },
      {
        pergunta: 'Vocês emitem nota fiscal?',
        resposta: 'Sim. A nota fiscal é emitida todo mês junto com a cobrança, no nome da clínica que você indicar.',
      },
      {
        pergunta: 'Posso gravar fora de Joinville?',
        resposta: 'Sim. A diária acontece em Joinville sem custo. Nas unidades de Florianópolis, Curitiba e São Paulo, o deslocamento é orçado à parte.',
      },
      {
        pergunta: 'E se eu quiser mais vídeos num mês?',
        resposta: 'Cada vídeo extra custa R$ 297, desde que caiba na agenda do mês.',
      },
      {
        pergunta: 'Quando os vídeos ficam prontos?',
        resposta: 'Em até quatro semanas: 2 vídeos por semana nos pacotes de 4 e 8, e 3 por semana no pacote de 10.',
      },
      {
        pergunta: 'Existe fidelidade?',
        resposta: 'Depende do plano. O mês a mês não tem permanência. O plano anual tem permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: temas e estrutura de fala definidos, gravação agendada',
      'Semana 2: gravação do mês',
      'Semana 3: primeiros vídeos entregues',
      'Semana 4: pacote do mês fechado',
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
