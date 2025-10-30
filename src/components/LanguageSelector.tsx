import React from 'react';
import { Language } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { setLanguage } = useLanguage();

  const handleLanguageSelect = (selectedLang: Language) => {
    setLanguage(selectedLang);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">🇩🇪</h1>
          <h2 className="text-xl font-bold text-white mb-2">German Article Trainer</h2>
          <p className="text-gray-300 text-sm">Choose your interface language</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-3"
          >
            <span className="text-2xl">🇺🇸</span>
            <span>English</span>
          </button>
          
          <button
            onClick={() => handleLanguageSelect('tr')}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-3"
          >
            <span className="text-2xl">🇹🇷</span>
            <span>Türkçe</span>
          </button>
        </div>

        <p className="text-gray-400 text-xs mt-6">
          You can change this later in the settings
        </p>
      </div>
    </div>
  );
};

export default LanguageSelector;