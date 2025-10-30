# 🔥 Firebase Setup Instructions

Follow these steps to add user authentication, progress tracking, and push notifications to your German Article Trainer.

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Name it `german-article-trainer`
4. Enable Google Analytics (optional)
5. Create project

## 2. Enable Authentication

1. In Firebase Console, go to **Authentication** → **Sign-in method**
2. Enable **Email/Password**
3. Enable **Google** (add your domain when prompted)

## 3. Create Firestore Database

1. Go to **Firestore Database**
2. Click "Create database"
3. Start in **test mode** (we'll secure it later)
4. Choose a location close to your users

## 4. Get Firebase Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll to "Your apps" section
3. Click **Web** icon (`</>`)
4. Register app name: `german-article-trainer`
5. Copy the configuration object

## 5. Set Environment Variables

1. Copy `.env.example` to `.env.local`
2. Fill in your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

## 6. Enable Cloud Messaging (Push Notifications)

1. In Firebase Console, go to **Cloud Messaging**
2. Generate a new key pair for Web Push certificates
3. Add your domain to authorized domains

## 7. Deploy Updated App

```bash
npm run build
git add .
git commit -m "Add Firebase authentication and progress tracking"
git push origin main
```

## 🎯 Features Now Available

### ✅ User Authentication
- Google Sign-in
- Email/Password registration
- User profiles with statistics

### ✅ Progress Tracking
- Word accuracy tracking
- Learning streaks
- Performance analytics
- Spaced repetition data

### ✅ Quick Tests
- Timed 60-second challenges
- Performance scoring
- Achievement system

### ✅ Push Notifications (Coming Soon)
- Daily learning reminders
- Achievement notifications
- Study streak alerts

## 📊 Database Structure

```
users/{userId}
├── profile (user info & settings)
├── stats (performance metrics)
├── progress/{wordId} (individual word progress)
└── tests/{testId} (test results)
```

## 🔒 Security Rules (Apply Later)

```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      match /progress/{wordId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
      
      match /tests/{testId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

## 💰 Free Tier Limits

- **Authentication**: 50K MAU (Monthly Active Users)
- **Firestore**: 1GB storage, 50K reads/day, 20K writes/day
- **Cloud Messaging**: Unlimited free messages

Perfect for thousands of daily active learners! 🎯