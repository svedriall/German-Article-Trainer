import React, { useState, useCallback, useMemo } from 'react';
import { wordList } from './services/wordlist';
import { Word, InputMode, Article } from './types';
import Header from './components/Header';
import WordDisplay from './components/WordDisplay';
import ArticleSelector from './components/ArticleSelector';
import SentenceDisplay from './components/SentenceDisplay';
import AuthComponent from './components/AuthComponent';
import QuickTest from './components/QuickTest';
import UserStatsBar from './components/UserStatsBar';
import LanguageSelector from './components/LanguageSelector';
import { translations } from './services/translations';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ProgressService } from './services/progressService';
import { VERSION } from './version';

const MainApp: React.FC = () => {
  const { user, refreshProfile } = useAuth();
  const { language, isLanguageSelected } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputMode, setInputMode] = useState<InputMode>('select');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledWords, setShuffledWords] = useState<Word[]>(() => [...wordList].sort(() => Math.random() - 0.5));
  const [showQuickTest, setShowQuickTest] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const currentWord = useMemo(() => shuffledWords[currentIndex], [shuffledWords, currentIndex]);
  const uiText = useMemo(() => translations[language], [language]);

  // Show language selector if language not selected yet
  if (!isLanguageSelected) {
    return <LanguageSelector />;
  }

  const handleNextWord = useCallback(() => {
    setShowResult(false);
    setIsCorrect(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledWords.length);
  }, [shuffledWords.length]);

  const handleGuess = useCallback(async (guess: Article) => {
    const isCorrectAnswer = guess.toLowerCase() === currentWord.article;
    
    if (isCorrectAnswer) {
      setIsCorrect(true);
      setShowResult(true);
    } else {
      setIsCorrect(false);
      setTimeout(() => setIsCorrect(null), 500); // Reset incorrect feedback
    }

    // Record progress if user is logged in
    if (user && refreshProfile) {
      await ProgressService.recordAnswer(user.uid, currentWord.word, isCorrectAnswer);
      // Refresh profile to get updated stats
      setTimeout(() => refreshProfile(), 100); // Small delay to ensure DB is updated
    }
  }, [currentWord, user, refreshProfile]);
  
  const shuffleWords = useCallback(() => {
    setShuffledWords(prevWords => [...prevWords].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setShowResult(false);
    setIsCorrect(null);
  }, []);

  const closeQuickTest = useCallback(() => setShowQuickTest(false), []);
  const closeAuth = useCallback(() => setShowAuth(false), []);
  const openAuth = useCallback(() => setShowAuth(true), []);
  const openQuickTest = useCallback(() => setShowQuickTest(true), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="flex flex-col min-h-screen">
        {showQuickTest && <QuickTest onClose={closeQuickTest} />}
        {showAuth && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">{uiText.account}</h2>
                <button
                  onClick={closeAuth}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <AuthComponent />
            </div>
          </div>
        )}

      <div className="flex-1 container mx-auto p-4 max-w-2xl">
        {/* Top Bar with Auth and Test Buttons */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <button
            onClick={openAuth}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-sm sm:px-4 sm:text-base rounded transition-colors"
          >
            {user ? uiText.profileButton : uiText.signInButton}
          </button>
          
          <button
            onClick={openQuickTest}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm sm:px-4 sm:text-base rounded transition-colors"
          >
            {uiText.quickTestButton}
          </button>
        </div>

        <Header
          selectedLanguage={language}
          inputMode={inputMode}
          onInputModeChange={setInputMode}
          onShuffle={shuffleWords}
        />
        <main className="mt-4 sm:mt-8 bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center transition-all duration-300">
          <WordDisplay
            word={currentWord}
            language={language}
            showResult={showResult}
          />
          <div className="mt-6 sm:mt-8 w-full max-w-md">
            <ArticleSelector
              mode={inputMode}
              onGuess={handleGuess}
              isCorrect={isCorrect}
              disabled={showResult}
              correctArticle={currentWord.article}
              language={language}
            />
          </div>
          {showResult && (
            <>
              <SentenceDisplay
                word={currentWord}
                language={language}
              />
              <button
                onClick={handleNextWord}
                className="mt-6 sm:mt-8 w-full max-w-md bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-base sm:text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                {uiText.nextWordButton}
              </button>
            </>
          )}
        </main>
        
        <footer className="text-center mt-4 sm:mt-8 text-gray-500 text-sm space-y-1">
          <p className="text-xs sm:text-sm">{uiText.footerText}</p>
          <p className="text-xs opacity-60">v{VERSION} • Enhanced Authentication & Real-time Stats</p>
        </footer>
      </div>
      
      <UserStatsBar />
      </div>
    </div>
  );
};

// Main App wrapper with providers
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;