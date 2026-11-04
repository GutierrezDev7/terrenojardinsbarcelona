export interface AmenityItem {
  id: string;
  title: string;
  category: 'esportes' | 'clube' | 'natureza' | 'saude' | 'familia';
  image: string;
  tag: string;
  description: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
