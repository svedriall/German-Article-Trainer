import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../services/translations';
import { EnhancedProgressService } from '../services/enhancedProgress';
import { WordPerformance, LearningAnalytics } from '../services/spacedRepetition';

interface AnalyticsDashboardProps {
  onClose: () => void;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ onClose }) => {
  const { user } = useAuth();
  const { language } = useLanguage();
  
  const [analytics, setAnalytics] = useState<LearningAnalytics | null>(null);
  const [reviewSchedule, setReviewSchedule] = useState<{
    today: WordPerformance[];
    tomorrow: WordPerformance[];
    thisWeek: WordPerformance[];
  }>({ today: [], tomorrow: [], thisWeek: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnalytics = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const [analyticsData, scheduleData] = await Promise.all([
          EnhancedProgressService.getLearningAnalytics(user.uid),
          EnhancedProgressService.getReviewSchedule(user.uid)
        ]);
        
        setAnalytics(analyticsData);
        setReviewSchedule(scheduleData);
      } catch (error) {
        console.error('Error loading analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnalytics();
  }, [user]);

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
                    <p className="text-2xl font-bold">{analytics.currentStreak} days</p>
                  </div>
                  <div className="text-3xl">
                    {getStreakEmoji(analytics.currentStreak)}
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
                    <p className="text-2xl font-bold">{analytics.totalWordsLearned}</p>
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
                    <p className={`text-2xl font-bold ${getAccuracyColor(analytics.overallAccuracy)}`}>
                      {Math.round(analytics.overallAccuracy)}%
                    </p>
                  </div>
                  <div className="text-3xl">🎪</div>
                </div>
              </div>

              {/* Review Today */}
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">
                      {language === 'tr' ? 'Bugün Tekrar' : 'Review Today'}
                    </p>
                    <p className="text-2xl font-bold">{reviewSchedule.today.length}</p>
                  </div>
                  <div className="text-3xl">⏰</div>
                </div>
              </div>
            </div>

            {/* Article Mastery */}
            <div className="bg-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                🎯 {language === 'tr' ? 'Artikel Ustalığı' : 'Article Mastery'}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔵</div>
                  <div className="text-lg font-bold text-blue-400">DER</div>
                  <div className={`text-xl font-bold ${getAccuracyColor(analytics.articleAccuracy.der)}`}>
                    {Math.round(analytics.articleAccuracy.der)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔴</div>
                  <div className="text-lg font-bold text-pink-400">DIE</div>
                  <div className={`text-xl font-bold ${getAccuracyColor(analytics.articleAccuracy.die)}`}>
                    {Math.round(analytics.articleAccuracy.die)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🟡</div>
                  <div className="text-lg font-bold text-yellow-400">DAS</div>
                  <div className={`text-xl font-bold ${getAccuracyColor(analytics.articleAccuracy.das)}`}>
                    {Math.round(analytics.articleAccuracy.das)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Review Schedule */}
            <div className="bg-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                📅 {language === 'tr' ? 'Tekrar Programı' : 'Review Schedule'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-600 rounded p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📅</span>
                    <span className="font-bold text-white">
                      {language === 'tr' ? 'Bugün' : 'Today'}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {reviewSchedule.today.length}
                  </div>
                  <div className="text-sm text-gray-300">
                    {language === 'tr' ? 'kelime tekrarı' : 'words to review'}
                  </div>
                </div>
                
                <div className="bg-gray-600 rounded p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📆</span>
                    <span className="font-bold text-white">
                      {language === 'tr' ? 'Yarın' : 'Tomorrow'}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">
                    {reviewSchedule.tomorrow.length}
                  </div>
                  <div className="text-sm text-gray-300">
                    {language === 'tr' ? 'kelime tekrarı' : 'words to review'}
                  </div>
                </div>
                
                <div className="bg-gray-600 rounded p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🗓️</span>
                    <span className="font-bold text-white">
                      {language === 'tr' ? 'Bu Hafta' : 'This Week'}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">
                    {reviewSchedule.thisWeek.length}
                  </div>
                  <div className="text-sm text-gray-300">
                    {language === 'tr' ? 'kelime tekrarı' : 'words to review'}
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