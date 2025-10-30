import React, { useState, useCallback, useMemo } from 'react';
import { wordList } from './services/wordlist';
import { Word, Language, InputMode, Article } from './types';
import Header from './components/Header';
import WordDisplay from './components/WordDisplay';
import ArticleSelector from './components/ArticleSelector';
import SentenceDisplay from './components/SentenceDisplay';
import AuthComponent from './components/AuthComponent';
import QuickTest from './components/QuickTest';
import UserStatsBar from './components/UserStatsBar';
import { translations } from './services/translations';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProgressService } from './services/progressService';
import { VERSION } from './version';

const MainApp: React.FC = () => {
  const { user, refreshProfile } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [inputMode, setInputMode] = useState<InputMode>('select');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledWords, setShuffledWords] = useState<Word[]>(() => [...wordList].sort(() => Math.random() - 0.5));
  const [showQuickTest, setShowQuickTest] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const currentWord = useMemo(() => shuffledWords[currentIndex], [shuffledWords, currentIndex]);
  const uiText = useMemo(() => translations[selectedLanguage], [selectedLanguage]);

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
    if (user) {
      await ProgressService.recordAnswer(user.uid, currentWord.word, isCorrectAnswer);
      // Refresh profile to get updated stats
      setTimeout(() => refreshProfile(), 100); // Small delay to ensure DB is updated
    }
  }, [currentWord, user]);
  
  const shuffleWords = () => {
    setShuffledWords(prevWords => [...prevWords].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setShowResult(false);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white pb-20">
      <div className="container mx-auto p-4 relative">
        {showQuickTest && <QuickTest onClose={() => setShowQuickTest(false)} />}
        {showAuth && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Account</h2>
                <button
                  onClick={() => setShowAuth(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <AuthComponent />
            </div>
          </div>
        )}

      <div className="w-full max-w-2xl mx-auto">
        {/* Top Bar with Auth and Test Buttons */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setShowAuth(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            {user ? '👤 Profile' : '🔒 Sign In'}
          </button>
          
          <button
            onClick={() => setShowQuickTest(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
          >
            ⚡ Quick Test
          </button>
        </div>

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
        <footer className="text-center mt-8 text-gray-500 text-sm space-y-1">
          <p>{uiText.footerText}</p>
          <p className="text-xs opacity-60">v{VERSION} • Enhanced Authentication & Real-time Stats</p>
        </footer>
      </div>
      <UserStatsBar />
      </div>
    </div>
  );
};

// Main App wrapper with AuthProvider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default App;