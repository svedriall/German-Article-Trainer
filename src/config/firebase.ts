// Firebase configuration and initialization
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getMessaging, isSupported, Messaging } from 'firebase/messaging';
import { VERSION } from '../version';

// Get environment variables from Vite (more robust approach)
const env = (import.meta as any).env || {};

const apiKey = env.VITE_FIREBASE_API_KEY;
const authDomain = env.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = env.VITE_FIREBASE_PROJECT_ID;
const storageBucket = env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = env.VITE_FIREBASE_APP_ID;

// Check if Firebase is configured (API key should start with AIza for real Firebase projects)
const isFirebaseConfigured = apiKey && apiKey !== 'demo-key' && apiKey.startsWith('AIza');

// Display Firebase status with version info
console.log('🔥 Firebase Status:', {
  version: VERSION,
  isConfigured: isFirebaseConfigured,
  hasRequiredEnvVars: !!(apiKey && authDomain && projectId),
  environment: env.NODE_ENV || 'development',
  projectId: projectId ? projectId.substring(0, 8) + '...' : 'not set'
});

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let messaging: Messaging | null = null;

// Always initialize Firebase (use demo config if not properly configured)
const firebaseConfig = {
  apiKey: apiKey || 'demo-key',
  authDomain: authDomain || 'demo.firebaseapp.com',
  projectId: projectId || 'demo-project',
  storageBucket: storageBucket || 'demo-project.appspot.com',
  messagingSenderId: messagingSenderId || '123456789',
  appId: appId || '1:123456789:web:demo'
};

// Firebase config ready (not logging sensitive data)

try {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  
  // Only initialize Firestore if we have a real configuration
  if (isFirebaseConfigured) {
    db = getFirestore(app);
    
    // Initialize messaging (only if supported)
    isSupported().then((supported) => {
      if (supported && app) {
        messaging = getMessaging(app);
      }
    });
  }
  
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
}

// Export services (will be null if not configured)
export { auth, db, messaging };
export const isFirebaseEnabled = isFirebaseConfigured;
export default app;