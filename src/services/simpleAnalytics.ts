// Simplified Analytics Service (without Firebase dependencies for now)
import { wordList } from './wordlist';

export interface SimpleWordPerformance {
  wordId: string;
  word: string;
  article: string;
  totalAttempts: number;
  correctAttempts: number;
  accuracy: number;
  lastSeen: Date;
}

export interface SimpleAnalytics {
  totalWords: number;
  correctAnswers: number;
  totalAttempts: number;
  accuracy: number;
  streak: number;
  wordsLearned: number; // words with >80% accuracy
}

export class SimpleAnalyticsService {
  private static STORAGE_KEY = 'german-trainer-analytics';
  
  /**
   * Get analytics from localStorage
   */
  static getAnalytics(): SimpleAnalytics {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading analytics:', error);
    }
    
    return {
      totalWords: 0,
      correctAnswers: 0,
      totalAttempts: 0,
      accuracy: 0,
      streak: 0,
      wordsLearned: 0
    };
  }
  
  /**
   * Record a word attempt
   */
  static recordAttempt(_wordId: string, isCorrect: boolean): void {
    try {
      const analytics = this.getAnalytics();
      
      analytics.totalAttempts += 1;
      if (isCorrect) {
        analytics.correctAnswers += 1;
      }
      
      analytics.accuracy = (analytics.correctAnswers / analytics.totalAttempts) * 100;
      
      // Update streak
      if (isCorrect) {
        analytics.streak += 1;
      } else {
        analytics.streak = 0;
      }
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(analytics));
      
    } catch (error) {
      console.error('Error recording attempt:', error);
    }
  }
  
  /**
   * Get recommended words for practice (simple random selection for now)
   */
  static getRecommendedWords(count: number = 20): any[] {
    return wordList
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }
  
  /**
   * Reset all analytics
   */
  static resetAnalytics(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Error resetting analytics:', error);
    }
  }
}