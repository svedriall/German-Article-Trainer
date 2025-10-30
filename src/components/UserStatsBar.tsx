import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../services/translations';

const UserStatsBar: React.FC = () => {
  const { user, profile } = useAuth();
  const { language } = useLanguage();
  const uiText = translations[language];

  if (!user || !profile) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 p-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* User Info */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {profile.displayName && profile.displayName !== 'Anonymous' 
                ? profile.displayName[0]?.toUpperCase()
                : user.email?.[0]?.toUpperCase() || 'U'}
            </div>
            <div>
              <div className="text-white text-sm font-medium">
                {profile.displayName && profile.displayName !== 'Anonymous' 
                  ? profile.displayName 
                  : user.displayName || user.email?.split('@')[0] || 'User'}
              </div>
              <div className="text-gray-400 text-xs">{profile.email}</div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm">
            <div className="text-center">
              <div className="text-sm sm:text-lg font-bold text-green-400">{profile.stats.correctAnswers}</div>
              <div className="text-xs text-gray-400">{uiText.correct}</div>
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-lg font-bold text-red-400">{profile.stats.incorrectAnswers || 0}</div>
              <div className="text-xs text-gray-400">{uiText.incorrect}</div>
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-lg font-bold text-blue-400">{profile.stats.streak}</div>
              <div className="text-xs text-gray-400">{uiText.streak}</div>
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-lg font-bold text-purple-400">{profile.stats.testsTaken || 0}</div>
              <div className="text-xs text-gray-400">{uiText.testsCompleted}</div>
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-lg font-bold text-yellow-400">
                {profile.stats.totalWords > 0 
                  ? Math.round((profile.stats.correctAnswers / profile.stats.totalWords) * 100)
                  : 0}%
              </div>
              <div className="text-xs text-gray-400">{uiText.accuracy}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatsBar;