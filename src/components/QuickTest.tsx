import React, { useState, useEffect, useCallback } from 'react';
import { Word } from '../types';
import { wordList } from '../services/wordlist';
import { useAuth } from '../contexts/AuthContext';
import { ProgressService } from '../services/progressService';

interface QuickTestProps {
  onClose: () => void;
}

interface TestQuestion {
  word: Word;
  options: string[];
  correctAnswer: string;
}

const QuickTest: React.FC<QuickTestProps> = ({ onClose }) => {
  const { user, updateUserProfile } = useAuth();
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds
  const [isCompleted, setIsCompleted] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const generateQuestions = useCallback(() => {
    const shuffled = [...wordList].sort(() => Math.random() - 0.5);
    const testQuestions: TestQuestion[] = shuffled.slice(0, 10).map(word => {
      const articles = ['der', 'die', 'das'];
      const correctAnswer = word.article;
      const wrongAnswers = articles.filter(a => a !== correctAnswer);
      const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
      
      return {
        word,
        options,
        correctAnswer
      };
    });
    setQuestions(testQuestions);
  }, []);

  useEffect(() => {
    generateQuestions();
  }, [generateQuestions]);

  useEffect(() => {
    if (timeLeft > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      completeTest();
    }
  }, [timeLeft, isCompleted]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = async () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    // Record progress if user is logged in
    if (user) {
      await ProgressService.recordAnswer(
        user.uid,
        questions[currentQuestion].word.word,
        isCorrect
      );
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      completeTest();
    }
  };

  const completeTest = async () => {
    setIsCompleted(true);
    
    if (user) {
      const testResult = {
        id: Date.now().toString(),
        date: new Date(),
        type: 'quick' as const,
        duration: 60 - timeLeft,
        totalQuestions: questions.length,
        correctAnswers: score,
        accuracy: (score / questions.length) * 100,
        wordsUsed: questions.map(q => q.word.word)
      };

      await ProgressService.recordTestResult(user.uid, testResult);
      
      // Update streak
      if (user) {
        const newStreak = answers.every(Boolean) ? (user as any).stats?.streak + 1 : 0;
        await updateUserProfile({
          stats: {
            ...((user as any).stats || {}),
            streak: newStreak,
            longestStreak: Math.max(newStreak, (user as any).stats?.longestStreak || 0)
          }
        } as any);
      }
    }
  };

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="text-white">Loading test...</div>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    const accuracy = Math.round((score / questions.length) * 100);
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Test Complete!</h2>
          
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-green-400">{accuracy}%</div>
            <div className="text-white">
              You got {score} out of {questions.length} questions correct
            </div>
            <div className="text-gray-400">
              Time taken: {60 - timeLeft} seconds
            </div>
            
            {accuracy >= 80 && (
              <div className="text-yellow-400 text-lg">🎉 Excellent work!</div>
            )}
            {accuracy >= 60 && accuracy < 80 && (
              <div className="text-blue-400 text-lg">👍 Good job!</div>
            )}
            {accuracy < 60 && (
              <div className="text-orange-400 text-lg">💪 Keep practicing!</div>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
          >
            Continue Learning
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <div className="text-white text-lg">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="text-red-400 text-lg font-bold">
            ⏱️ {timeLeft}s
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-white mb-2">
            {currentQ.word.word}
          </div>
          <div className="text-gray-400">
            {currentQ.word.translations.en}
          </div>
        </div>

        <div className="space-y-3">
          {currentQ.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full p-3 rounded text-left transition-colors ${
                selectedAnswer === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors"
          >
            Cancel
          </button>
          
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className={`py-2 px-4 rounded transition-colors ${
              selectedAnswer
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTest;