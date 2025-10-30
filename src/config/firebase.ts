// Firebase configuration and initialization
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getMessaging, isSupported, Messaging } from 'firebase/messaging';

// Get environment variables from Vite
const apiKey = (import.meta as any).env?.VITE_FIREBASE_API_KEY;
const authDomain = (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID;
const storageBucket = (import.meta as any).env?.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = (import.meta as any).env?.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = (import.meta as any).env?.VITE_FIREBASE_APP_ID;

// Check if Firebase is configured (API key should start with AIza for real Firebase projects)
const isFirebaseConfigured = apiKey && apiKey !== 'demo-key' && apiKey.startsWith('AIza');

console.log('Firebase configuration check:', {
  hasApiKey: !!apiKey,
  apiKeyStart: apiKey?.substring(0, 10),
  isConfigured: isFirebaseConfigured
});

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let messaging: Messaging | null = null;

if (isFirebaseConfigured) {
  // Firebase is properly configured
  const firebaseConfig = {
    apiKey: apiKey!,
    authDomain: authDomain!,
    projectId: projectId!,
    storageBucket: storageBucket!,
    messagingSenderId: messagingSenderId!,
    appId: appId!
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