import React, { useState, useEffect } from 'react';
import { InputMode, Article, Language } from '../types';
import { translations } from '../services/translations';

interface ArticleSelectorProps {
  mode: InputMode;
  onGuess: (guess: Article) => void;
  isCorrect: boolean | null;
  disabled: boolean;
  correctArticle: Article;
  language: Language;
}

const ArticleSelector: React.FC<ArticleSelectorProps> = ({ mode, onGuess, isCorrect, disabled, correctArticle, language }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (disabled) {
      setInputValue(correctArticle);
    } else {
      setInputValue('');
    }
  }, [disabled, correctArticle]);

  const uiText = translations[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    if (['der', 'die', 'das'].includes(value)) {
      onGuess(value as Article);
    }
  };

  const getShakeClass = () => {
    return isCorrect === false ? 'animate-shake' : '';
  };
  
  const baseButtonClasses = "w-full text-white font-bold py-3 text-lg rounded-lg transition-all transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800";
  const hoverClasses = "hover:scale-105 hover:shadow-lg";

  return (
    <div className={`w-full ${getShakeClass()}`}>
      {mode === 'select' ? (
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <button
            onClick={() => onGuess('der')}
            disabled={disabled}
            className={`${baseButtonClasses} bg-der/90 hover:bg-der focus:ring-blue-400 ${disabled ? 'opacity-50 cursor-not-allowed' : hoverClasses}`}
          >
            der
          </button>
          <button
            onClick={() => onGuess('die')}
            disabled={disabled}
            className={`${baseButtonClasses} bg-die/90 hover:bg-die focus:ring-red-400 ${disabled ? 'opacity-50 cursor-not-allowed' : hoverClasses}`}
          >
            die
          </button>
          <button
            onClick={() => onGuess('das')}
            disabled={disabled}
            className={`${baseButtonClasses} bg-das/90 hover:bg-das focus:ring-green-400 ${disabled ? 'opacity-50 cursor-not-allowed' : hoverClasses}`}
          >
            das
          </button>
        </div>
      ) : (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          disabled={disabled}
          placeholder={uiText.inputPlaceholder}
          className={`w-full p-3 text-lg text-center bg-gray-700 border-2 rounded-lg outline-none transition-colors duration-300
            ${disabled ? 'border-gray-600' : 'border-gray-500 focus:border-indigo-500'}
            ${isCorrect === true ? 'border-green-500' : ''}
            ${isCorrect === false ? 'border-red-500' : ''}
          `}
          autoCapitalize="off"
          autoCorrect="off"
          autoFocus
        />
      )}
    </div>
  );
};

// Add shake animation keyframes to Tailwind config or a style tag if needed.
// For simplicity here, we can add it to index.html or rely on a CSS-in-JS solution.
// Let's add it via a simple style tag in the component (not ideal but works for this setup).
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}`;
document.head.appendChild(style);


export default ArticleSelector;