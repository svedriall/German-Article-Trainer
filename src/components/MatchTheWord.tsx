import React, { useState, useEffect, useCallback } from 'react';
import { Word } from '../types';
import { wordList } from '../services/wordlist';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

import { SimpleAnalyticsService } from '../services/simpleAnalytics';
import { ProgressService } from '../services/progressService';

interface MatchTheWordProps {
  onClose: () => void;
}

interface WordPair {
  id: string;
  germanWord: string;
  translatedWord: string;
  originalWord: Word;
  isMatched: boolean;
}



const MatchTheWord: React.FC<MatchTheWordProps> = ({ onClose }) => {
  const { language } = useLanguage();
  const { user } = useAuth();

  const [germanWords, setGermanWords] = useState<WordPair[]>([]);
  const [translatedWords, setTranslatedWords] = useState<WordPair[]>([]);
  const [selectedGerman, setSelectedGerman] = useState<string | null>(null);
  const [selectedTranslated, setSelectedTranslated] = useState<string | null>(null);

  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [totalWordsMatched, setTotalWordsMatched] = useState(0);

  // Generate random words for matching
  const generateWordPairs = useCallback(() => {
    const shuffledWords = [...wordList].sort(() => Math.random() - 0.5).slice(0, 6);
    
    const germanWordPairs: WordPair[] = shuffledWords.map((word, index) => ({
      id: `german-${index}`,
      germanWord: `${word.article} ${word.word}`,
      translatedWord: word.translations[language],
      originalWord: word,
      isMatched: false
    }));

    const translatedWordPairs: WordPair[] = shuffledWords.map((word, index) => ({
      id: `translated-${index}`,
      germanWord: `${word.article} ${word.word}`,
      translatedWord: word.translations[language],
      originalWord: word,
      isMatched: false
    }));

    // Shuffle the translated words to randomize positions
    const shuffledTranslated = [...translatedWordPairs].sort(() => Math.random() - 0.5);

    setGermanWords(germanWordPairs);
    setTranslatedWords(shuffledTranslated);
  }, [language]);

  // Renew matched words with fresh ones when only 3 remain
  const renewMatchedWords = useCallback(() => {
    const matchedCount = germanWords.filter(w => w.isMatched).length;
    const unmatchedCount = 6 - matchedCount;
    
    if (unmatchedCount === 3 && matchedCount === 3) {
      // Get new random words that aren't already in current set
      const currentWordTexts = germanWords.map(w => w.originalWord.word);
      const availableWords = wordList.filter(w => !currentWordTexts.includes(w.word));
      const newWords = [...availableWords].sort(() => Math.random() - 0.5).slice(0, 3);
      
      // Create new word pairs for the matched positions
      let newIndex = 0;
      const updatedGermanWords = germanWords.map(word => {
        if (word.isMatched && newIndex < 3) {
          const newWord = newWords[newIndex++];
          return {
            ...word,
            germanWord: `${newWord.article} ${newWord.word}`,
            translatedWord: newWord.translations[language],
            originalWord: newWord,
            isMatched: false
          };
        }
        return word;
      });
      
      // Update translated words similarly
      newIndex = 0;
      const updatedTranslatedWords = translatedWords.map(word => {
        if (word.isMatched && newIndex < 3) {
          const newWord = newWords[newIndex++];
          return {
            ...word,
            germanWord: `${newWord.article} ${newWord.word}`,
            translatedWord: newWord.translations[language],
            originalWord: newWord,
            isMatched: false
          };
        }
        return word;
      });
      
      // Shuffle the translated words again
      const shuffledNewTranslated = [...updatedTranslatedWords].sort(() => Math.random() - 0.5);
      
      setGermanWords(updatedGermanWords);
      setTranslatedWords(shuffledNewTranslated);
    }
  }, [germanWords, translatedWords, language]);

  // Initialize the game
  useEffect(() => {
    generateWordPairs();
    setIsTimerRunning(true);
  }, [generateWordPairs]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            setIsCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft]);

  // Handle word selection
  const handleGermanWordSelect = (wordId: string) => {
    if (germanWords.find(w => w.id === wordId)?.isMatched) return;
    
    // If clicking the same word, deselect it
    if (selectedGerman === wordId) {
      setSelectedGerman(null);
      return;
    }
    
    setSelectedGerman(wordId);
    
    // Only attempt match if both words are selected
    if (selectedTranslated) {
      checkMatch(wordId, selectedTranslated);
    }
  };

  const handleTranslatedWordSelect = (wordId: string) => {
    if (translatedWords.find(w => w.id === wordId)?.isMatched) return;
    
    // If clicking the same word, deselect it
    if (selectedTranslated === wordId) {
      setSelectedTranslated(null);
      return;
    }
    
    setSelectedTranslated(wordId);
    
    // Only attempt match if both words are selected
    if (selectedGerman) {
      checkMatch(selectedGerman, wordId);
    }
  };

  // Check if selected words match
  const checkMatch = (germanId: string, translatedId: string) => {
    const germanWord = germanWords.find(w => w.id === germanId);
    const translatedWord = translatedWords.find(w => w.id === translatedId);
    
    if (!germanWord || !translatedWord) return;

    const isCorrect = germanWord.germanWord === translatedWord.germanWord;
    setAttempts(prev => prev + 1);

    if (isCorrect) {
      // Correct match
      setScore(prev => prev + 1);
      setTotalWordsMatched(prev => prev + 1);
      
      // Mark words as matched
      setGermanWords(prev => prev.map(w => 
        w.id === germanId ? { ...w, isMatched: true } : w
      ));
      setTranslatedWords(prev => prev.map(w => 
        w.id === translatedId ? { ...w, isMatched: true } : w
      ));

      setShowFeedback('✅ Correct!');
      
      // Record progress for authenticated users
      if (user) {
        ProgressService.recordAnswer(user.uid, germanWord.originalWord.word, true);
      }
      
      // Record analytics
      SimpleAnalyticsService.recordAttempt(germanWord.originalWord.word, true);

      // Trigger word renewal after a short delay to allow UI update
      setTimeout(() => {
        renewMatchedWords();
      }, 1000);
    } else {
      // Incorrect match - shorter, less intrusive feedback
      setShowFeedback('❌');
      
      // Record progress for authenticated users
      if (user) {
        ProgressService.recordAnswer(user.uid, germanWord.originalWord.word, false);
      }
      
      // Record analytics
      SimpleAnalyticsService.recordAttempt(germanWord.originalWord.word, false);
      
      // Clear selections immediately for incorrect matches so user can try again
      setTimeout(() => {
        setSelectedGerman(null);
        setSelectedTranslated(null);
      }, 100);
    }

    // Clear feedback and handle selections based on result
    setTimeout(() => {
      setShowFeedback(null);
      if (isCorrect) {
        // Clear selections only on correct matches
        setSelectedGerman(null);
        setSelectedTranslated(null);
      }
      // For incorrect matches, keep selections so user can try again
    }, isCorrect ? 800 : 300); // Even faster for wrong answers to reduce disruption
  };

  // Reset the game
  const resetGame = () => {
    setSelectedGerman(null);
    setSelectedTranslated(null);
    setScore(0);
    setAttempts(0);
    setTotalWordsMatched(0);
    setIsCompleted(false);
    setShowFeedback(null);
    setTimeLeft(60);
    setIsTimerRunning(true);
    generateWordPairs();
  };

  // Format time for display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Get word styling based on state
  const getWordStyling = (wordId: string, isGerman: boolean) => {
    const isSelected = isGerman ? selectedGerman === wordId : selectedTranslated === wordId;
    const isMatched = isGerman 
      ? germanWords.find(w => w.id === wordId)?.isMatched 
      : translatedWords.find(w => w.id === wordId)?.isMatched;
    
    let classes = "p-3 rounded-lg border-2 cursor-pointer transition-all transform hover:scale-105 text-center font-medium ";
    
    if (isMatched) {
      classes += "bg-green-500 border-green-400 text-white cursor-not-allowed opacity-75";
    } else if (isSelected) {
      classes += "bg-blue-500 border-blue-400 text-white scale-105 shadow-lg";
    } else {
      classes += "bg-gray-700 border-gray-600 text-white hover:bg-gray-600";
    }
    
    return classes;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-indigo-400">⚡ Word Matching Blitz</h2>
            <p className="text-gray-300 mt-1">
              Match German words with {language === 'en' ? 'English' : 'Turkish'} translations as fast as you can!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-lg font-semibold text-green-400">Total Matched: {totalWordsMatched}</div>
              <div className="text-sm text-gray-400">Current: {score}/{germanWords.length}</div>
              <div className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-blue-400'}`}>
                ⏱️ {formatTime(timeLeft)}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl p-2"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Game Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {!isCompleted ? (
            <>
              {/* Instructions */}
              <div className="bg-gray-700/50 rounded-lg p-4 mb-6 text-center">
                <p className="text-gray-300 mb-2">
                  🎯 <strong>Blitz Mode:</strong> Match as many words as possible in 60 seconds!
                </p>
                <p className="text-gray-300 text-sm">
                  Click German word → click translation. When 3 words remain, new ones appear!
                </p>
              </div>

              {/* Fixed Feedback - doesn't affect layout */}
              <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
                {showFeedback && (
                  <div className={`px-4 py-2 rounded-lg text-lg font-bold transition-all duration-300 ${
                    showFeedback.includes('✅') ? 'bg-green-500' : 'bg-red-500'
                  } text-white shadow-lg animate-bounce`}>
                    {showFeedback}
                  </div>
                )}
              </div>

              {/* Word Lists */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* German Words */}
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">🇩🇪 German</h3>
                  <div className="space-y-3">
                    {germanWords.map((word) => {
                      const article = word.originalWord.article;
                      const wordOnly = word.originalWord.word;
                      
                      // Get article color based on gender
                      const articleColor = 
                        article === 'der' ? 'text-blue-400' :
                        article === 'die' ? 'text-red-400' :
                        'text-green-400'; // das
                      
                      return (
                        <div
                          key={word.id}
                          onClick={() => handleGermanWordSelect(word.id)}
                          className={getWordStyling(word.id, true)}
                        >
                          <span className={`font-bold ${articleColor}`}>{article}</span>
                          <span className="ml-2">{wordOnly}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Translated Words */}
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4 text-center">
                    {language === 'en' ? '🇺🇸 English' : '🇹🇷 Turkish'}
                  </h3>
                  <div className="space-y-3">
                    {translatedWords.map((word) => (
                      <div
                        key={word.id}
                        onClick={() => handleTranslatedWordSelect(word.id)}
                        className={getWordStyling(word.id, false)}
                      >
                        {word.translatedWord}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Completion Screen */
            <div className="text-center py-12">
              <div className="text-6xl mb-4">{timeLeft === 0 ? '⏰' : '🎉'}</div>
              <h3 className="text-3xl font-bold text-green-400 mb-4">
                {timeLeft === 0 ? 'Time\'s Up!' : 'Game Complete!'}
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                {timeLeft === 0 
                  ? `You matched ${totalWordsMatched} words in 60 seconds!`
                  : `Amazing! You completed the challenge!`
                }
              </p>
              <div className="bg-gray-700 rounded-lg p-6 mb-8 inline-block">
                <div className="text-2xl font-bold text-white mb-2">Blitz Results</div>
                <div className="text-4xl font-bold text-green-400 mb-2">{totalWordsMatched}</div>
                <div className="text-lg text-gray-300 mb-2">Total Words Matched</div>
                <div className="text-sm text-gray-400">
                  Accuracy: {attempts > 0 ? Math.round((totalWordsMatched / attempts) * 100) : 0}%
                </div>
                <div className="text-sm text-gray-400">
                  Time: {timeLeft === 0 ? '1:00' : formatTime(60 - timeLeft)}
                </div>
              </div>
              <div className="space-x-4">
                <button
                  onClick={resetGame}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  🔄 Play Again
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  📚 Back to Main
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        {!isCompleted && (
          <div className="p-6 border-t border-gray-700 flex justify-between">
            <button
              onClick={resetGame}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-bold transition-colors"
            >
              🔄 New Game
            </button>
            <div className="text-gray-400 text-sm self-center">
              Select one word from each column to match them
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchTheWord;