// Version information for German Article Trainer
// Generated at build time: 2025-10-30T14:33:09.803Z
export const VERSION = '1.2.0';
export const BUILD_DATE = '2025-10-30T14:33:09.803Z';
export const FEATURES = [
  'Enhanced Authentication with Better Error Handling',
  'Real-time User Stats Display',
  'Improved Quick Test Modal',
  'Fixed Firebase Document Creation Issues',
  'User Profile Management',
  'Progress Tracking & Analytics',
  'Persistent Language Selection (Turkish + English)',
  'Mobile Responsive Design'
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
