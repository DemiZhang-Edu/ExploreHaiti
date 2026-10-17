import ileARatImg from '../assets/ile-a-rat.webp';

export interface ShowcasePage {
  id: number;
  slug: string;
  pageNumberLabel: string;
  title: string;
  rawText: string;
  sentences: string[];
  imageUrl: string;
  imageAlt: string;
  fallbackTheme: 'nature' | 'portrait' | 'fortress' | 'art';
}

export const SHOWCASE_PAGES: ShowcasePage[] = [
  {
    id: 1,
    slug: 'page-1',
    pageNumberLabel: 'Page 1',
    title: 'L’introduction',
    rawText: 'C’est Haïti. Haïti se trouve en Europe/Amérique/Afrique/Océanie/Asie. On y parle français. La capitale s’appelle Port au Prince. Il y a 11.5 millions de personnes.',
    sentences: [
      'C’est Haïti.',
      'Haïti se trouve en Europe/Amérique/Afrique/Océanie/Asie.',
      'On y parle français.',
      'La capitale s’appelle Port au Prince.',
      'Il y a 11.5 millions de personnes.'
    ],
    imageUrl: ileARatImg,
    imageAlt: 'Île-à-Rat, Haïti',
    fallbackTheme: 'nature'
  },
  {
    id: 2,
    slug: 'page-2',
    pageNumberLabel: 'Page 2',
    title: 'la vedette',
    rawText: "C’est Wyclef Jean. Il/elle est chanteur. Il/elle a 57 ans. Il/elle est pleine d'énergie et expressif. Il/elle est Haïtien.",
    sentences: [
      'C’est Wyclef Jean.',
      'Il/elle est chanteur.',
      'Il/elle a 57 ans.',
      "Il/elle est pleine d'énergie et expressif.",
      'Il/elle est Haïtien.'
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wyclef_Jean_2011.jpg/480px-Wyclef_Jean_2011.jpg',
    imageAlt: 'Wyclef Jean',
    fallbackTheme: 'portrait'
  },
  {
    id: 3,
    slug: 'page-3',
    pageNumberLabel: 'Page 3',
    title: 'L’endroit intéressant',
    rawText: 'C’est Bassin Bleu. Bassin Bleu se trouve à (city/region name). Il/elle est belle et superbe. On y peut nager et y regarder.',
    sentences: [
      'C’est Bassin Bleu.',
      'Bassin Bleu se trouve à (city/region name).',
      'Il/elle est belle et superbe.',
      'On y peut nager et y regarder.'
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bassin_Bleu_Jacmel.jpg/640px-Bassin_Bleu_Jacmel.jpg',
    imageAlt: 'Bassin Bleu',
    fallbackTheme: 'nature'
  },
  {
    id: 4,
    slug: 'page-4',
    pageNumberLabel: 'Page 4',
    title: 'L’objet culturel',
    rawText: 'C’est a chaise. Il/elle s\'appelle Taino Duho. Il/elle est en bois et décoré.',
    sentences: [
      'C’est a chaise.',
      "Il/elle s'appelle Taino Duho.",
      'Il/elle est en bois et décoré.'
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ta%C3%ADno_duho_%28wooden_stool%29%2C_Dominican_Republic%2C_1000-1500_AD%2C_wood_-_British_Museum_-_DSC05934.JPG/640px-Ta%C3%ADno_duho_%28wooden_stool%29%2C_Dominican_Republic%2C_1000-1500_AD%2C_wood_-_British_Museum_-_DSC05934.JPG',
    imageAlt: 'Taino Duho',
    fallbackTheme: 'art'
  }
];
