import { Language } from '../types';

interface UITranslations {
  // App.tsx
  nextWordButton: string;
  footerText: string;

  // Header.tsx
  appTitle: string;
  selectButton: string;
  writeButton: string;
  shuffleButtonTitle: string;

  // ArticleSelector.tsx
  inputPlaceholder: string;

  // SentenceDisplay.tsx
  exampleSentencesTitle: string;
  nominativCase: string;
  akkusativCase: string;
}

export const translations: Record<Language, UITranslations> = {
  en: {
    nextWordButton: 'Next Word',
    footerText: 'Learn German articles with fun and ease.',
    appTitle: 'German Article Trainer',
    selectButton: 'Select',
    writeButton: 'Write',
    shuffleButtonTitle: 'Shuffle Words',
    inputPlaceholder: 'Type der, die, or das...',
    exampleSentencesTitle: 'Example Sentences',
    nominativCase: 'Nominativ',
    akkusativCase: 'Akkusativ',
  },
  tr: {
    nextWordButton: 'Sonraki Kelime',
    footerText: 'Almanca artikelleri eğlenerek ve kolayca öğrenin.',
    appTitle: 'Almanca Artikel Alıştırması',
    selectButton: 'Seç',
    writeButton: 'Yaz',
    shuffleButtonTitle: 'Kelimeleri Karıştır',
    inputPlaceholder: 'der, die, ya da das yazın...',
    exampleSentencesTitle: 'Örnek Cümleler',
    nominativCase: 'Nominativ (Yalın Hal)',
    akkusativCase: 'Akkusativ (-i Hali)',
  },
};
