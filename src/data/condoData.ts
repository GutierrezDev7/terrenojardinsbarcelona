import type { AmenityItem, FaqItem } from '../types';

const imageDirectory = '/assets/aistudio';

export const CONDO_IMAGES = {
  logo: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.18.jpeg`,
  entranceAerial: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.18 (1).jpeg`,
  condoPanoramic: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.19 (1).jpeg`,
  tennisClay: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.19 (2).jpeg`,
  soccerFields: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.19 (3).jpeg`,
  communityCenterAerial: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.19 (4).jpeg`,
  communityBuilding: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.19.jpeg`,
  cliffMirante: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.20 (1).jpeg`,
  lakeDeck: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.20 (2).jpeg`,
  petPlace: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.20 (3).jpeg`,
  outdoorCourt: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.20 (4).jpeg`,
  fitnessGym: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.20 (5).jpeg`,
  communityPlaza: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.20.jpeg`,
  indoorLounge: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.21 (1).jpeg`,
  forestTrailSign: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.21 (2).jpeg`,
  masterplan: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.21 (3).jpeg`,
  gourmetKiosk: `${imageDirectory}/WhatsApp Image 2026-11-03 at 16.03.21.jpeg`,
} as const;

export const LOT_DETAILS = {
  condoName: 'Jardins Barcelona',
  subtitle: 'Condomínio Horizontal FGR',
  estimatedArea: '300 m²',
  askingPrice: 'R$ 290.000',
  frontage: '12 m de frente por 25 m de profundidade',
  topography: 'Aclive suave na parte frontal, conforme informado pelo vendedor.',
  sunPosition: 'Orientação para o sol da manhã, conforme informado pelo vendedor.',
  registryStatus: 'Consulte o vendedor e solicite a documentação atualizada do lote.',
};

const sellerWhatsAppNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5562982772393'
).replace(/\D/g, '');

const nationalPhoneNumber = sellerWhatsAppNumber.startsWith('55')
  ? sellerWhatsAppNumber.slice(2)
  : sellerWhatsAppNumber;

export const SELLER_PHONE_DISPLAY =
  nationalPhoneNumber.length === 11
    ? `(${nationalPhoneNumber.slice(0, 2)}) ${nationalPhoneNumber.slice(2, 7)}-${nationalPhoneNumber.slice(7)}`
    : nationalPhoneNumber;

export const SELLER_PHONE_HREF = `tel:+${sellerWhatsAppNumber}`;

export const getWhatsAppHref = (message: string) =>
  `https://wa.me/${sellerWhatsAppNumber}?text=${encodeURIComponent(message)}`;

export const AMENITIES_LIST: AmenityItem[] = [
  {
    id: 'quadras-tenis',
    title: 'Quadras de tênis em saibro',
    category: 'esportes',
    image: CONDO_IMAGES.tennisClay,
    tag: 'Esportes',
    description: 'Imagem das quadras de tênis com piso de saibro.',
    features: ['Quadras em saibro'],
  },
  {
    id: 'campo-futebol',
    title: 'Campo de futebol',
    category: 'esportes',
    image: CONDO_IMAGES.soccerFields,
    tag: 'Esportes',
    description: 'Campo gramado cercado, conforme aparece na imagem.',
    features: ['Campo gramado', 'Área cercada'],
  },
  {
    id: 'quadra-externa',
    title: 'Quadra esportiva externa',
    category: 'esportes',
    image: CONDO_IMAGES.outdoorCourt,
    tag: 'Esportes',
    description: 'Quadra verde ao lado de uma área recreativa.',
    features: ['Quadra externa', 'Área recreativa próxima'],
  },
  {
    id: 'area-esportiva',
    title: 'Vista aérea da área esportiva',
    category: 'esportes',
    image: CONDO_IMAGES.communityCenterAerial,
    tag: 'Vista aérea',
    description: 'Vista aérea de uma quadra e dos espaços ao redor.',
    features: ['Quadra esportiva', 'Área externa'],
  },
  {
    id: 'academia',
    title: 'Academia',
    category: 'saude',
    image: CONDO_IMAGES.fitnessGym,
    tag: 'Espaço interno',
    description: 'Ambiente interno equipado para atividades físicas.',
    features: ['Equipamentos de exercício'],
  },
  {
    id: 'lago',
    title: 'Lago com deck',
    category: 'natureza',
    image: CONDO_IMAGES.lakeDeck,
    tag: 'Natureza',
    description: 'Lago com deck de madeira na margem.',
    features: ['Lago', 'Deck de madeira'],
  },
  {
    id: 'mirante',
    title: 'Deck junto à formação rochosa',
    category: 'natureza',
    image: CONDO_IMAGES.cliffMirante,
    tag: 'Natureza',
    description: 'Deck de madeira sobre terreno rochoso, com vegetação ao redor.',
    features: ['Deck de madeira', 'Vegetação'],
  },
  {
    id: 'espaco-gourmet',
    title: 'Espaço gourmet coberto',
    category: 'clube',
    image: CONDO_IMAGES.gourmetKiosk,
    tag: 'Convivência',
    description: 'Área coberta com mesas, cadeiras e churrasqueira.',
    features: ['Área coberta', 'Mesas e cadeiras', 'Churrasqueira'],
  },
  {
    id: 'trilha',
    title: 'Trilha sinalizada',
    category: 'natureza',
    image: CONDO_IMAGES.forestTrailSign,
    tag: 'Natureza',
    description: 'Caminho em meio à vegetação com placa de sinalização.',
    features: ['Caminho em área verde', 'Placa de sinalização'],
  },
  {
    id: 'pet-place',
    title: 'Área cercada para pets',
    category: 'familia',
    image: CONDO_IMAGES.petPlace,
    tag: 'Área externa',
    description: 'Espaço gramado cercado com obstáculos para animais.',
    features: ['Área cercada', 'Obstáculos para pets'],
  },
  {
    id: 'ambiente-interno',
    title: 'Ambiente interno de convivência',
    category: 'clube',
    image: CONDO_IMAGES.indoorLounge,
    tag: 'Espaço interno',
    description: 'Ambiente interno com assentos e áreas envidraçadas.',
    features: ['Assentos', 'Área envidraçada'],
  },
  {
    id: 'portaria',
    title: 'Acesso ao condomínio',
    category: 'clube',
    image: CONDO_IMAGES.entranceAerial,
    tag: 'Acesso',
    description: 'Vista da entrada e da estrutura de acesso do condomínio.',
    features: ['Estrutura de acesso'],
  },
  {
    id: 'edificio-convivencia',
    title: 'Edifício de convivência',
    category: 'clube',
    image: CONDO_IMAGES.communityBuilding,
    tag: 'Área comum',
    description: 'Edifício envidraçado junto à área de circulação.',
    features: ['Edifício envidraçado'],
  },
  {
    id: 'praca',
    title: 'Praça e área de convivência',
    category: 'familia',
    image: CONDO_IMAGES.communityPlaza,
    tag: 'Área externa',
    description: 'Área externa ajardinada com caminhos e espaços de estar.',
    features: ['Paisagismo', 'Caminhos'],
  },
  {
    id: 'vista-loteamento',
    title: 'Vista aérea do loteamento',
    category: 'natureza',
    image: CONDO_IMAGES.condoPanoramic,
    tag: 'Vista aérea',
    description: 'Vista aérea de ruas e lotes do empreendimento.',
    features: ['Ruas internas', 'Lotes'],
  },
  {
    id: 'planta',
    title: 'Planta ilustrativa do empreendimento',
    category: 'clube',
    image: CONDO_IMAGES.masterplan,
    tag: 'Planta',
    description:
      'Planta geral ilustrativa. A imagem não identifica a localização exata do lote à venda.',
    features: ['Planta geral'],
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Negociação',
    question: 'Posso oferecer um veículo como parte do pagamento?',
    answer:
      'A possibilidade de permuta e as condições dependem de avaliação e acordo com o vendedor. Envie modelo, ano e versão para iniciar a conversa.',
  },
  {
    category: 'Negociação',
    question: 'Como são avaliados veículos ou outros bens?',
    answer:
      'A avaliação e o valor aceito são definidos diretamente entre as partes. Consulte o vendedor sobre critérios, documentação e condições antes de fechar negócio.',
  },
  {
    category: 'Construção',
    question: 'O terreno está liberado para construir?',
    answer:
      'As regras e licenças podem variar. Confirme a situação atual com o vendedor, a administração do condomínio e os órgãos responsáveis antes de iniciar qualquer obra.',
  },
  {
    category: 'Documentação',
    question: 'Quais documentos devo conferir?',
    answer:
      'Solicite a matrícula atualizada e os demais documentos do imóvel. A análise deve ser feita junto ao Cartório de Registro de Imóveis e, se necessário, com orientação profissional.',
  },
  {
    category: 'Condomínio',
    question: 'Qual é o valor atual da taxa de condomínio?',
    answer:
      'O valor e os serviços incluídos podem mudar. Consulte a administração do condomínio para obter a taxa atualizada e confirmar o que ela cobre.',
  },
  {
    category: 'Visitas',
    question: 'Como posso conhecer o terreno?',
    answer:
      'Entre em contato com o vendedor para confirmar a localização exata do lote e combinar uma visita ao local.',
  },
];
