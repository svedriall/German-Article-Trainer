import { Language } from '../types';

interface UITranslations {
  // App.tsx
  nextWordButton: string;
  footerText: string;
  profileButton: string;
  signInButton: string;
  quickTestButton: string;

  // Header.tsx
  appTitle: string;
  selectButton: string;
  writeButton: string;
  shuffleButtonTitle: string;

  // ArticleSelector.tsx
  inputPlaceholder: string;

  // SentenceDisplay.tsx
  exampleSentencesTitle: string;
  nominativCase: string;
  akkusativCase: string;

  // Authentication
  signIn: string;
  signUp: string;
  email: string;
  password: string;
  displayName: string;
  continueWithGoogle: string;
  logout: string;
  account: string;
  
  // Quick Test
  quickTest: string;
  startTest: string;
  question: string;
  correct: string;
  incorrect: string;
  score: string;
  nextQuestion: string;
  finishTest: string;
  
  // User Stats
  totalWords: string;
  accuracy: string;
  streak: string;
  testsCompleted: string;
  
  // Auth Component Messages
  noAccountSignUp: string;
  alreadyHaveAccount: string;
  firstTimeSignUpInfo: string;
}

export const translations: Record<Language, UITranslations> = {
  en: {
    nextWordButton: 'Next Word',
    footerText: 'Learn German articles with fun and ease.',
    profileButton: '👤 Profile',
    signInButton: '🔒 Sign In',
    quickTestButton: '⚡ Quick Test',
    appTitle: 'German Article Trainer',
    selectButton: 'Select',
    writeButton: 'Write',
    shuffleButtonTitle: 'Shuffle Words',
    inputPlaceholder: 'Type der, die, or das...',
    exampleSentencesTitle: 'Example Sentences',
    nominativCase: 'Nominativ',
    akkusativCase: 'Akkusativ',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    email: 'Email',
    password: 'Password',
    displayName: 'Display Name',
    continueWithGoogle: 'Continue with Google',
    logout: 'Logout',
    account: 'Account',
    quickTest: 'Quick Test',
    startTest: 'Start Test',
    question: 'Question',
    correct: 'Correct',
    incorrect: 'Incorrect',
    score: 'Score',
    nextQuestion: 'Next Question',
    finishTest: 'Finish Test',
    totalWords: 'Total Words',
    accuracy: 'Accuracy',
    streak: 'Current Streak',
    testsCompleted: 'Tests Completed',
    noAccountSignUp: "Don't have an account? Sign up",
    alreadyHaveAccount: "Already have an account? Sign in",
    firstTimeSignUpInfo: 'ℹ️ First time? Use "Sign Up" to create an account, then "Sign In" to access it.',
  },
  tr: {
    nextWordButton: 'Sonraki Kelime',
    footerText: 'Almanca artikelleri eğlenerek ve kolayca öğrenin.',
    profileButton: '👤 Profil',
    signInButton: '🔒 Giriş Yap',
    quickTestButton: '⚡ Hızlı Test',
    appTitle: 'Almanca Artikel Alıştırması',
    selectButton: 'Seç',
    writeButton: 'Yaz',
    shuffleButtonTitle: 'Kelimeleri Karıştır',
    inputPlaceholder: 'der, die, ya da das yazın...',
    exampleSentencesTitle: 'Örnek Cümleler',
    nominativCase: 'Nominativ (Yalın Hal)',
    akkusativCase: 'Akkusativ (-i Hali)',
    signIn: 'Giriş Yap',
    signUp: 'Kayıt Ol',
    email: 'E-posta',
    password: 'Şifre',
    displayName: 'Görüntülenecek İsim',
    continueWithGoogle: 'Google ile Devam Et',
    logout: 'Çıkış Yap',
    account: 'Hesap',
    quickTest: 'Hızlı Test',
    startTest: 'Teste Başla',
    question: 'Soru',
    correct: 'Doğru',
    incorrect: 'Yanlış',
    score: 'Puan',
    nextQuestion: 'Sonraki Soru',
    finishTest: 'Testi Bitir',
    totalWords: 'Toplam Kelime',
    accuracy: 'Doğruluk Oranı',
    streak: 'Mevcut Seri',
    testsCompleted: 'Tamamlanan Test',
    noAccountSignUp: "Hesabınız yok mu? Kayıt olun",
    alreadyHaveAccount: "Zaten hesabınız var mı? Giriş yapın",
    firstTimeSignUpInfo: 'ℹ️ İlk kez mi? Hesap oluşturmak için "Kayıt Ol"u, daha sonra erişmek için "Giriş Yap"ı kullanın.',
  },
};
