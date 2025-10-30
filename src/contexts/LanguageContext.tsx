import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  isLanguageSelected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const LANGUAGE_STORAGE_KEY = 'german-article-trainer-language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
      setLanguageState(savedLanguage);
      setIsLanguageSelected(true);
      console.log('🌐 Loaded saved language preference:', savedLanguage);
    } else {
      console.log('🌐 No language preference found, showing language selector');
      setIsLanguageSelected(false);
    }
  }, []);

  const setLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage);
    setIsLanguageSelected(true);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
    console.log('🌐 Language preference saved:', newLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLanguageSelected }}>
      {children}
    </LanguageContext.Provider>
  );
};