// Version information for German Article Trainer
// Generated at build time: 2025-10-30T16:05:52.951Z
// Git commit: c2990bc (main)
// Commit date: 2025-10-30 16:58:44 +0100
export const VERSION = '1.2.0-c2990bc';
export const BASE_VERSION = '1.2.0';
export const BUILD_DATE = '2025-10-30T16:05:52.951Z';
export const GIT_COMMIT_HASH = 'c2990bc';
export const GIT_COMMIT_DATE = '2025-10-30 16:58:44 +0100';
export const GIT_BRANCH = 'main';
export const FEATURES = [
  'Enhanced Authentication with Better Error Handling',
  'Real-time User Stats Display',
  'Improved Quick Test Modal',
  'Fixed Firebase Document Creation Issues',
  'User Profile Management',
  'Progress Tracking & Analytics',
  'Persistent Language Selection (Turkish + English)',
  'Mobile Responsive Design',
  'RADICAL FIX: Removed useCallback functions to resolve React #310'
];

export const getVersionInfo = () => ({
  version: VERSION,
  baseVersion: BASE_VERSION,
  buildDate: BUILD_DATE,
  gitCommitHash: GIT_COMMIT_HASH,
  gitCommitDate: GIT_COMMIT_DATE,
  gitBranch: GIT_BRANCH,
  features: FEATURES
});

// Log version info on import
console.log(`
🎯 German Article Trainer v${VERSION}
📦 Build: ${BUILD_DATE}
🔧 Git: ${GIT_COMMIT_HASH} on ${GIT_BRANCH}
📅 Commit: ${GIT_COMMIT_DATE}
✨ Latest Features:
${FEATURES.map(f => `  • ${f}`).join('\n')}
`);
