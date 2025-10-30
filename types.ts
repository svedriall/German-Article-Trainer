
export type Article = 'der' | 'die' | 'das';
export type Language = 'en' | 'tr';
export type InputMode = 'select' | 'write';

interface Translation {
  de: string;
  en: string;
  tr: string;
}

export interface Word {
  word: string;
  article: Article;
  translations: {
    en: string;
    tr: string;
  };
  sentences: {
    nominativ: Translation;
    akkusativ: Translation;
  };
}