import { doc, updateDoc, increment, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface WordProgress {
  wordId: string;
  correct: number;
  incorrect: number;
  lastSeen: Date;
  difficulty: number; // Spaced repetition difficulty
  nextReview: Date;
}

export interface TestResult {
  id: string;
  date: Date;
  type: 'quick' | 'timed' | 'review';
  duration: number; // in seconds
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
  wordsUsed: string[];
}

export class ProgressService {
  static async recordAnswer(userId: string, wordId: string, isCorrect: boolean) {
    const userRef = doc(db, 'users', userId);
    
    // Update user stats
    await updateDoc(userRef, {
      'stats.totalWords': increment(1),
      [`stats.${isCorrect ? 'correctAnswers' : 'incorrectAnswers'}`]: increment(1),
      'stats.streak': isCorrect ? increment(1) : 0,
      lastActive: new Date()
    });

    // Update word-specific progress
    const progressRef = doc(db, 'users', userId, 'progress', wordId);
    const difficulty = await this.calculateSpacedRepetition(wordId, isCorrect);
    
    await updateDoc(progressRef, {
      [`${isCorrect ? 'correct' : 'incorrect'}`]: increment(1),
      lastSeen: new Date(),
      difficulty,
      nextReview: this.calculateNextReview(difficulty)
    });
  }

  static async recordTestResult(userId: string, testResult: TestResult) {
    const userRef = doc(db, 'users', userId);
    
    await updateDoc(userRef, {
      'stats.testsTaken': increment(1),
      'stats.averageAccuracy': testResult.accuracy, // This should be calculated as running average
      lastActive: new Date()
    });

    // Store detailed test result
    const testRef = doc(db, 'users', userId, 'tests', testResult.id);
    await setDoc(testRef, { ...testResult });
  }

  static async getWordsForReview(_userId: string): Promise<string[]> {
    // This would query words that need review based on spaced repetition
    // Implementation depends on your specific algorithm
    return [];
  }

  private static async calculateSpacedRepetition(_wordId: string, isCorrect: boolean): Promise<number> {
    // Simple spaced repetition algorithm
    // In a real implementation, you'd fetch current difficulty and adjust
    return isCorrect ? 1.3 : 0.8;
  }

  private static calculateNextReview(difficulty: number): Date {
    // Calculate next review date based on difficulty
    const days = Math.round(difficulty * 2);
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + days);
    return nextReview;
  }
}