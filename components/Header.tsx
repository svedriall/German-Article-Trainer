
import React from 'react';
import { Language, InputMode } from '../types';
import { translations } from '../services/translations';

interface HeaderProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  inputMode: InputMode;
  onInputModeChange: (mode: InputMode) => void;
  onShuffle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  selectedLanguage,
  onLanguageChange,
  inputMode,
  onInputModeChange,
  onShuffle
}) => {
  const uiText = translations[selectedLanguage];
  
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center w-full p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm">
      <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-4 sm:mb-0">
        {uiText.appTitle}
      </h1>
      <div className="flex items-center space-x-2 sm:space-x-4">
         <button onClick={onShuffle} title={uiText.shuffleButtonTitle} className="p-2 rounded-full hover:bg-gray-700 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>
        <div className="flex bg-gray-700 p-1 rounded-lg">
          {(['select', 'write'] as InputMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => onInputModeChange(mode)}
              className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
                inputMode === mode
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-gray-600'
              }`}
            >
              {mode === 'select' ? uiText.selectButton : uiText.writeButton}
            </button>
          ))}
        </div>

        <div className="flex bg-gray-700 p-1 rounded-lg">
          {(['en', 'tr'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
                selectedLanguage === lang
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-gray-600'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;