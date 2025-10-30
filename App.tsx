
import React, { useState, useCallback, useMemo } from 'react';
import { wordList } from './services/wordlist';
import { Word, Language, InputMode, Article } from './types';
import Header from './components/Header';
import WordDisplay from './components/WordDisplay';
import ArticleSelector from './components/ArticleSelector';
import SentenceDisplay from './components/SentenceDisplay';
import { translations } from './services/translations';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [inputMode, setInputMode] = useState<InputMode>('select');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledWords, setShuffledWords] = useState<Word[]>(() => [...wordList].sort(() => Math.random() - 0.5));

  const currentWord = useMemo(() => shuffledWords[currentIndex], [shuffledWords, currentIndex]);
  const uiText = useMemo(() => translations[selectedLanguage], [selectedLanguage]);

  const handleNextWord = useCallback(() => {
    setShowResult(false);
    setIsCorrect(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledWords.length);
  }, [shuffledWords.length]);

  const handleGuess = useCallback((guess: Article) => {
    if (guess.toLowerCase() === currentWord.article) {
      setIsCorrect(true);
      setShowResult(true);
    } else {
      setIsCorrect(false);
      setTimeout(() => setIsCorrect(null), 500); // Reset incorrect feedback
    }
  }, [currentWord]);
  
  const shuffleWords = () => {
    setShuffledWords(prevWords => [...prevWords].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setShowResult(false);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto">
        <Header
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
          inputMode={inputMode}
          onInputModeChange={setInputMode}
          onShuffle={shuffleWords}
        />
        <main className="mt-8 bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300">
          <WordDisplay
            word={currentWord}
            language={selectedLanguage}
            showResult={showResult}
          />
          <div className="mt-8 w-full max-w-md">
            <ArticleSelector
              mode={inputMode}
              onGuess={handleGuess}
              isCorrect={isCorrect}
              disabled={showResult}
              correctArticle={currentWord.article}
              language={selectedLanguage}
            />
          </div>
          {showResult && (
            <>
              <SentenceDisplay
                word={currentWord}
                language={selectedLanguage}
              />
              <button
                onClick={handleNextWord}
                className="mt-8 w-full max-w-md bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                {uiText.nextWordButton}
              </button>
            </>
          )}
        </main>
         <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>{uiText.footerText}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;