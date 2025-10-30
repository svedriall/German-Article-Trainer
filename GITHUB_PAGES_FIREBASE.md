# 🚀 GitHub Pages + Firebase Setup (No Custom Domain Needed!)

## ✅ What You've Already Done
- ✅ Created Firebase project  
- ✅ Set up Firestore database
- ✅ Enabled authentication methods

## 🔧 Next Steps (5 minutes)

### **Step 1: Get Firebase Configuration**
1. Go to **Firebase Console** → **Project Settings** (gear icon)
2. Scroll to **"Your apps"** section  
3. If no web app exists:
   - Click **Web** icon (`</>`)
   - App name: `german-article-trainer`
   - **Don't** check "Firebase Hosting" (we're using GitHub Pages)
4. Copy the `firebaseConfig` object

### **Step 2: Configure Authorized Domains**
1. **Authentication** → **Settings** → **Authorized domains**
2. **Add:** `svedriall.github.io`
3. **Keep:** `localhost` (for testing)
4. **Remove:** any other domains

### **Step 3: Create Environment File**
1. **Copy** `.env.local.template` to `.env.local`
2. **Fill in** your Firebase values from Step 1

### **Step 4: Add to GitHub Secrets**
Since GitHub Pages can't use `.env.local`, we need GitHub Secrets:

1. Go to **GitHub** → **Your Repository** → **Settings** → **Secrets and variables** → **Actions**
2. **Add these secrets:**
   ```
   VITE_FIREBASE_API_KEY = your-api-key
   VITE_FIREBASE_AUTH_DOMAIN = your-project.firebaseapp.com  
   VITE_FIREBASE_PROJECT_ID = your-project-id
   VITE_FIREBASE_STORAGE_BUCKET = your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID = your-sender-id
   VITE_FIREBASE_APP_ID = your-app-id
   ```

## 🎯 **All Features Will Work:**
- ✅ **Google Sign-in** (works with GitHub Pages domain)
- ✅ **Email/Password** authentication  
- ✅ **User profiles** and progress tracking
- ✅ **Quick tests** with cloud sync
- ✅ **Real-time data** across devices

## 🧪 **Test Locally First:**
```bash
# 1. Create .env.local with your Firebase config
# 2. Test locally
npm run dev

# 3. If it works locally, commit and push
git add .env.local.template
git commit -m "Add Firebase configuration template"
git push origin main
```

## 📱 **No Domain Limitations:**
- GitHub Pages domain (`svedriall.github.io`) works perfectly
- All Firebase features supported
- No SSL certificate setup needed  
- No DNS configuration required
- Completely free forever!

Your users will sign in and their data will sync seamlessly! 🎉