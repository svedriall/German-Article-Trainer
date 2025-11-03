# 🇩🇪 German Article Trainer

An interactive web application designed to help users master German articles (der, die, das) through engaging practice exercises and advanced learning features.

[![Deploy to GitHub Pages](https://github.com/svedriall/German-Article-Trainer/actions/workflows/deploy.yml/badge.svg)](https://github.com/svedriall/German-Article-Trainer/actions/workflows/deploy.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)

## ✨ Features

### 🎯 **Core Learning System**
- **2,700+ German Words** with proper articles (der, die, das)
- **Interactive Practice Modes**: Select articles or type them manually
- **Bilingual Support**: German ↔ English and German ↔ Turkish
- **Real-time Pronunciation**: High-quality German TTS using ResponsiveVoice API
- **Smart Feedback**: Visual and audio feedback for correct/incorrect answers

### 🔥 **Advanced Features**
- **User Authentication**: Secure Google OAuth and email/password login
- **Progress Tracking**: Personal statistics and learning analytics
- **Quick Test Mode**: Timed challenges to test knowledge
- **Mobile Responsive**: Optimized for all device sizes
- **Dark Theme**: Modern, eye-friendly design
- **Offline Ready**: Works without internet connection

### 🎮 **Interactive Elements**
- **Voice Pronunciation**: Hear authentic German pronunciation for every word
- **Sentence Examples**: Context-based learning with example sentences
- **Visual Feedback**: Color-coded article system (der=blue, die=red, das=green)
- **Streak Tracking**: Monitor your learning consistency
- **Difficulty Adaptation**: Content adapts to your skill level

## 🚀 Live Demo

**🌐 [Try it live: German Article Trainer](https://svedriall.github.io/German-Article-Trainer/)**

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom color schemes
- **Authentication**: Firebase Auth (Google OAuth, Email/Password)
- **Database**: Firestore for user progress and analytics
- **Text-to-Speech**: ResponsiveVoice API for German pronunciation
- **Deployment**: GitHub Pages with automated CI/CD
- **Build Tools**: Vite, PostCSS, Autoprefixer

## 🔧 Local Development

### Prerequisites
- Node.js 16+ and npm
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/svedriall/German-Article-Trainer.git
cd German-Article-Trainer

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Environment Configuration

Create a `.env` file in the root directory:

```env
# Firebase Configuration (required for user auth and progress tracking)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# ResponsiveVoice TTS API Key (optional - will use fallback if not provided)
RESPONSIVE_VOICE_JS_KEY=your_responsivevoice_key
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run version  # Generate version information
```

## 🚀 Deployment

### Automated GitHub Pages Deployment

This project includes automated deployment to GitHub Pages:

1. **Fork or clone** this repository
2. **Update `package.json`** with your GitHub username:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/German-Article-Trainer/"
   ```
3. **Configure Repository Secrets** (Settings → Secrets and Variables → Actions):
   ```
   VITE_FIREBASE_API_KEY=your_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_project
   VITE_FIREBASE_STORAGE_BUCKET=your_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   RESPONSIVE_VOICE_JS_KEY=your_tts_key
   ```
4. **Enable GitHub Pages** (Settings → Pages → Source: GitHub Actions)
5. **Push to main branch** - deployment happens automatically!

## 🔒 Security & Privacy

### Data Protection
- **No Sensitive Data Storage**: API keys are never exposed in client code
- **Environment Variables**: All secrets are handled via build-time injection
- **User Privacy**: Only minimal user data is stored (display name, email, progress)
- **Secure Authentication**: Firebase Auth with industry-standard security

### API Key Security
- ResponsiveVoice API key is injected at build time, not runtime
- Firebase configuration uses public-safe keys (as recommended by Firebase)
- All sensitive data is properly gitignored

### Best Practices Implemented
- TypeScript for type safety
- ESLint configuration for code quality
- Automated security dependency updates
- HTTPS-only deployment
- Content Security Policy headers

## 📊 Learning Progress Features

- **Attempt Tracking**: Records every practice attempt
- **Accuracy Statistics**: Shows success rates over time
- **Streak Counters**: Tracks consecutive correct answers
- **Personalized Analytics**: Individual progress dashboards
- **Performance Insights**: Identifies areas for improvement

## 🌍 Internationalization

- **German ↔ English**: Full translation support
- **German ↔ Turkish**: Complete Turkish language interface
- **Pronunciation Guide**: Audio for every German word
- **Cultural Context**: Authentic German language examples

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests.

### Development Guidelines
- Follow TypeScript best practices
- Maintain test coverage
- Use conventional commit messages
- Update documentation for new features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **ResponsiveVoice** for high-quality German text-to-speech
- **Firebase** for robust backend services
- **Tailwind CSS** for modern, responsive design
- **Vite** for lightning-fast development experience

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: [GitHub Issues](https://github.com/svedriall/German-Article-Trainer/issues)
- **Feature Requests**: Open an issue with the "enhancement" label

---

**Happy learning! 🎓 Viel Erfolg beim Deutschlernen!**
