// Firebase configuration and initialization
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getMessaging, isSupported, Messaging } from 'firebase/messaging';

// Get environment variables (works in both dev and production)
const getEnvVar = (key: string): string | undefined => {
  if (typeof window !== 'undefined') {
    // Client-side - check if variables were injected during build
    return (window as any).__FIREBASE_CONFIG__?.[key];
  }
  // Build time - use Vite's import.meta.env
  return (import.meta as any).env?.[key];
};

// Check if Firebase is configured
const apiKey = getEnvVar('VITE_FIREBASE_API_KEY');
const isFirebaseConfigured = apiKey && apiKey !== 'demo-key' && apiKey.startsWith('AIza');

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let messaging: Messaging | null = null;

if (isFirebaseConfigured) {
  // Firebase is properly configured
  const firebaseConfig = {
    apiKey: getEnvVar('VITE_FIREBASE_API_KEY')!,
    authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN')!,
    projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID')!,
    storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET')!,
    messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID')!,
    appId: getEnvVar('VITE_FIREBASE_APP_ID')!
  };

  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);

  // Initialize messaging (only if supported)
  isSupported().then((supported) => {
    if (supported && app) {
      messaging = getMessaging(app);
    }
  });
}

// Export services (will be null if not configured)
export { auth, db, messaging };
export const isFirebaseEnabled = isFirebaseConfigured;
export default app;