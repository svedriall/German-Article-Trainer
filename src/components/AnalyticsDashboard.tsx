import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SimpleAnalyticsService, SimpleAnalytics } from '../services/simpleAnalytics';

interface AnalyticsDashboardProps {
  onClose: () => void;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ onClose }) => {
  const { language } = useLanguage();
  
  const [analytics, setAnalytics] = useState<SimpleAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnalytics = () => {
      try {
        setLoading(true);
        const analyticsData = SimpleAnalyticsService.getAnalytics();
        setAnalytics(analyticsData);
      } catch (error) {
        console.error('Error loading analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-600 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-600 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getStreakEmoji = (streak: number) => {
    if (streak >= 30) return '🔥';
    if (streak >= 7) return '⭐';
    if (streak >= 3) return '✨';
    return '📈';
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 90) return 'text-green-400';
    if (accuracy >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            📊 {language === 'tr' ? 'Öğrenme Analitikleri' : 'Learning Analytics'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {analytics ? (
          <>
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {/* Current Streak */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">
                      {language === 'tr' ? 'Güncel Seri' : 'Current Streak'}
                    </p>
                    <p className="text-2xl font-bold">{analytics.streak}</p>
                  </div>
                  <div className="text-3xl">
                    {getStreakEmoji(analytics.streak)}
                  </div>
                </div>
              </div>

              {/* Words Learned */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">
                      {language === 'tr' ? 'Öğrenilen Kelimeler' : 'Words Learned'}
                    </p>
                    <p className="text-2xl font-bold">{analytics.wordsLearned}</p>
                  </div>
                  <div className="text-3xl">🎯</div>
                </div>
              </div>

              {/* Overall Accuracy */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">
                      {language === 'tr' ? 'Genel Doğruluk' : 'Overall Accuracy'}
                    </p>
                    <p className={`text-2xl font-bold ${getAccuracyColor(analytics.accuracy)}`}>
                      {Math.round(analytics.accuracy)}%
                    </p>
                  </div>
                  <div className="text-3xl">🎪</div>
                </div>
              </div>

              {/* Total Attempts */}
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">
                      {language === 'tr' ? 'Toplam Deneme' : 'Total Attempts'}
                    </p>
                    <p className="text-2xl font-bold">{analytics.totalAttempts}</p>
                  </div>
                  <div className="text-3xl">⏰</div>
                </div>
              </div>
            </div>

            {/* Simple Stats */}
            <div className="bg-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                📊 {language === 'tr' ? 'İstatistikler' : 'Statistics'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-lg font-bold text-white">
                    {language === 'tr' ? 'Doğru Cevaplar' : 'Correct Answers'}
                  </div>
                  <div className="text-3xl font-bold text-green-400">
                    {analytics.correctAnswers}
                  </div>
                  <div className="text-sm text-gray-300">
                    {language === 'tr' ? `${analytics.totalAttempts} deneme` : `out of ${analytics.totalAttempts} attempts`}
                  </div>
                </div>
                
                <div>
                  <div className="text-4xl mb-2">🔥</div>
                  <div className="text-lg font-bold text-white">
                    {language === 'tr' ? 'En İyi Seri' : 'Current Streak'}
                  </div>
                  <div className="text-3xl font-bold text-orange-400">
                    {analytics.streak}
                  </div>
                  <div className="text-sm text-gray-300">
                    {language === 'tr' ? 'ardışık doğru' : 'consecutive correct'}
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Progress Chart Placeholder */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                📈 {language === 'tr' ? 'Haftalık İlerleme' : 'Weekly Progress'}
              </h3>
              <div className="h-32 bg-gray-600 rounded flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div>{language === 'tr' ? 'Grafik yakında gelecek' : 'Chart coming soon'}</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-white mb-2">
              {language === 'tr' ? 'Henüz veri yok' : 'No data yet'}
            </h3>
            <p className="text-gray-400">
              {language === 'tr' 
                ? 'Öğrenmeye başlayın ve ilerlemenizi burada görün!'
                : 'Start learning and see your progress here!'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsDashboard;