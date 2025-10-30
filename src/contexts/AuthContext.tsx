import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { User, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc, getFirestore } from 'firebase/firestore';
import { auth, db, isFirebaseEnabled } from '../config/firebase';

interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  avatar?: string;
  createdAt: Date;
  lastActive: Date;
  settings: {
    language: string;
    notifications: boolean;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
  };
  stats: {
    totalWords: number;
    correctAnswers: number;
    incorrectAnswers: number;
    streak: number;
    longestStreak: number;
    testsTaken: number;
    averageAccuracy: number;
  };
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, displayName: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseEnabled || !auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await loadUserProfile(user.uid);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const loadUserProfile = async (uid: string) => {
    if (!db) return;
    
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      } else {
        // Create new user profile
        const newProfile: UserProfile = {
          uid,
          email: user?.email || '',
          displayName: user?.displayName || user?.email?.split('@')[0] || 'User',
          createdAt: new Date(),
          lastActive: new Date(),
          settings: {
            language: 'en',
            notifications: true,
            difficulty: 'beginner'
          },
          stats: {
            totalWords: 0,
            correctAnswers: 0,
            incorrectAnswers: 0,
            streak: 0,
            longestStreak: 0,
            testsTaken: 0,
            averageAccuracy: 0
          }
        };
        await setDoc(docRef, newProfile);
        setProfile(newProfile);
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  const signInWithGoogle = async () => {
    if (!auth || !isFirebaseEnabled) throw new Error('Firebase not configured - please check your environment variables');
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signInWithEmail = async (email: string, password: string) => {
    if (!auth || !isFirebaseEnabled) throw new Error('Firebase not configured - please check your environment variables');
    
    console.log('🔐 Attempting email/password sign-in...');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('✅ Email/password sign-in successful');
    } catch (error: any) {
      console.error('❌ Email/password sign-in failed:', error.code, error.message);
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, password: string, _displayName: string) => {
    if (!auth || !isFirebaseEnabled) throw new Error('Firebase not configured - please check your environment variables');
    await createUserWithEmailAndPassword(auth, email, password);
    // Profile will be created in the auth state change listener
  };

  const logout = async () => {
    if (!auth || !isFirebaseEnabled) throw new Error('Firebase not configured - please check your environment variables');
    await signOut(auth);
  };

  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    if (!user || !profile || !db) return;
    
    const updatedProfile = { ...profile, ...updates, lastActive: new Date() };
    const docRef = doc(db, 'users', user.uid);
    await setDoc(docRef, updatedProfile);
    setProfile(updatedProfile);
  };

  const refreshProfile = useCallback(async () => {
    if (!user || !isFirebaseEnabled) return;
    
    try {
      // Get fresh Firestore instance to avoid dependency issues
      const firestore = db || getFirestore();
      const docRef = doc(firestore, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      }
    } catch (error) {
      console.error('Error refreshing profile:', error);
    }
  }, [user]); // Remove db dependency to fix React error #310

  const value: AuthContextType = {
    user,
    profile,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logout,
    updateUserProfile,
    refreshProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};