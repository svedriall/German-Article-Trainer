// Version information for German Article Trainer
export const VERSION = '1.2.0';
export const BUILD_DATE = new Date().toISOString();
export const FEATURES = [
  'Enhanced Authentication with Better Error Handling',
  'Real-time User Stats Display',
  'Improved Quick Test Modal',
  'Fixed Firebase Document Creation Issues',
  'User Profile Management',
  'Progress Tracking & Analytics'
];

export const getVersionInfo = () => ({
  version: VERSION,
  buildDate: BUILD_DATE,
  features: FEATURES
});

// Log version info on import
console.log(`
🎯 German Article Trainer v${VERSION}
📦 Build: ${BUILD_DATE}
✨ Latest Features:
${FEATURES.map(f => `  • ${f}`).join('\n')}
`);