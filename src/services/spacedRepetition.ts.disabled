// Advanced Learning Analytics and Spaced Repetition System
import { Timestamp } from 'firebase/firestore';

export interface WordPerformance {
  wordId: string;
  word: string;
  article: string;
  // Performance metrics
  totalAttempts: number;
  correctAttempts: number;
  incorrectAttempts: number;
  accuracy: number; // percentage
  // Spaced repetition data
  easinessFactor: number; // SM-2 algorithm factor (1.3 to 2.5)
  interval: number; // days until next review
  repetitions: number; // number of successful repetitions
  nextReviewDate: Date;
  lastReviewDate: Date;
  // Learning state
  learningState: 'new' | 'learning' | 'graduated' | 'review';
  difficulty: 'easy' | 'medium' | 'hard';
  // Session tracking
  firstSeenDate: Date;
  lastAttemptDate: Date;
  averageResponseTime: number; // milliseconds
  // Streak data
  consecutiveCorrect: number;
  consecutiveIncorrect: number;
  bestStreak: number;
}

export interface LearningSession {
  sessionId: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  wordsStudied: string[]; // word IDs
  totalAttempts: number;
  correctAttempts: number;
  accuracy: number;
  sessionType: 'quick_test' | 'practice' | 'review' | 'challenge';
  duration: number; // seconds
}

export interface LearningAnalytics {
  userId: string;
  // Overall stats
  totalWordsLearned: number; // accuracy >= 80%
  totalWordsSeen: number;
  overallAccuracy: number;
  totalStudyTime: number; // minutes
  // Streaks
  currentStreak: number; // days
  longestStreak: number;
  lastStudyDate: Date;
  // Progress tracking
  wordsLearnedToday: number;
  wordsLearnedThisWeek: number;
  wordsLearnedThisMonth: number;
  // Review schedule
  wordsReviewToday: number;
  wordsReviewTomorrow: number;
  wordsReviewThisWeek: number;
  // Performance trends
  weeklyAccuracy: number[];
  weeklyWordsLearned: number[];
  difficultyDistribution: {
    easy: number;
    medium: number;
    hard: number;
  };
  // Article mastery
  articleAccuracy: {
    der: number;
    die: number;
    das: number;
  };
}

// Spaced Repetition Algorithm (SuperMemo 2)
export class SpacedRepetitionSystem {
  /**
   * Calculate next review interval based on user performance
   * @param quality - User performance quality (0-5)
   *   5: Perfect response
   *   4: Correct response after hesitation
   *   3: Correct response with serious difficulty
   *   2: Incorrect response; correct answer seemed easy to recall
   *   1: Incorrect response; correct answer remembered
   *   0: Complete blackout
   */
  static calculateNextReview(
    quality: number,
    easinessFactor: number = 2.5,
    interval: number = 1,
    repetitions: number = 0
  ): { easinessFactor: number; interval: number; repetitions: number } {
    let newEasinessFactor = easinessFactor;
    let newInterval = interval;
    let newRepetitions = repetitions;

    // Update easiness factor
    newEasinessFactor = Math.max(
      1.3,
      easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );

    if (quality >= 3) {
      // Correct response
      newRepetitions += 1;
      
      if (newRepetitions === 1) {
        newInterval = 1;
      } else if (newRepetitions === 2) {
        newInterval = 6;
      } else {
        newInterval = Math.round(interval * newEasinessFactor);
      }
    } else {
      // Incorrect response
      newRepetitions = 0;
      newInterval = 1;
    }

    return {
      easinessFactor: newEasinessFactor,
      interval: newInterval,
      repetitions: newRepetitions
    };
  }

  /**
   * Convert user accuracy to SM-2 quality score
   */
  static accuracyToQuality(isCorrect: boolean, responseTime: number, averageTime: number): number {
    if (!isCorrect) {
      return Math.random() < 0.3 ? 0 : Math.random() < 0.7 ? 1 : 2;
    }

    // Base quality for correct answer
    let quality = 3;

    // Bonus for fast response
    if (responseTime < averageTime * 0.7) {
      quality = 5; // Perfect response
    } else if (responseTime < averageTime * 1.2) {
      quality = 4; // Good response
    }

    return quality;
  }

  /**
   * Get words due for review today
   */
  static getWordsForReview(performances: WordPerformance[], maxWords: number = 20): WordPerformance[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return performances
      .filter(perf => {
        const reviewDate = new Date(perf.nextReviewDate);
        reviewDate.setHours(0, 0, 0, 0);
        return reviewDate <= today;
      })
      .sort((a, b) => {
        // Prioritize by: overdue words first, then by difficulty
        const aOverdue = Math.floor((today.getTime() - new Date(a.nextReviewDate).getTime()) / (1000 * 60 * 60 * 24));
        const bOverdue = Math.floor((today.getTime() - new Date(b.nextReviewDate).getTime()) / (1000 * 60 * 60 * 24));
        
        if (aOverdue !== bOverdue) return bOverdue - aOverdue;
        
        // Then by difficulty (hard words first)
        const difficultyOrder = { hard: 3, medium: 2, easy: 1 };
        return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
      })
      .slice(0, maxWords);
  }

  /**
   * Suggest new words to learn based on user progress
   */
  static suggestNewWords(
    performances: WordPerformance[], 
    allWords: any[], 
    maxNew: number = 5,
    userLevel: 'beginner' | 'intermediate' | 'advanced' = 'beginner'
  ): any[] {
    const learnedWordIds = new Set(performances.map(p => p.wordId));
    const availableWords = allWords.filter(word => !learnedWordIds.has(word.word));

    // Simple difficulty classification based on word length and common articles
    const getWordDifficulty = (word: any): 'easy' | 'medium' | 'hard' => {
      const commonDerWords = ['der', 'Mann', 'Hund', 'Tisch'];
      const commonDieWords = ['die', 'Frau', 'Katze', 'Schule'];
      const commonDasWords = ['das', 'Kind', 'Haus', 'Auto'];
      
      if (word.word.length <= 5) return 'easy';
      if (word.word.length <= 8) return 'medium';
      return 'hard';
    };

    // Filter by user level
    const levelMapping = {
      beginner: ['easy'],
      intermediate: ['easy', 'medium'],
      advanced: ['easy', 'medium', 'hard']
    };

    return availableWords
      .filter(word => levelMapping[userLevel].includes(getWordDifficulty(word)))
      .sort(() => Math.random() - 0.5) // Randomize
      .slice(0, maxNew);
  }
}