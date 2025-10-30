// This file generates version.ts with the correct build timestamp and Git info
import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get Git information
let gitCommitHash = 'unknown';
let gitCommitDate = 'unknown';
let gitBranch = 'unknown';

try {
  gitCommitHash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
  gitCommitDate = execSync('git log -1 --format=%ci', { encoding: 'utf8' }).trim();
  gitBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
} catch (error) {
  console.warn('⚠️ Could not retrieve Git information:', error.message);
}

const buildDate = new Date().toISOString();
const baseVersion = '1.2.0';
const version = `${baseVersion}-${gitCommitHash}`;

const versionContent = `// Version information for German Article Trainer
// Generated at build time: ${buildDate}
// Git commit: ${gitCommitHash} (${gitBranch})
// Commit date: ${gitCommitDate}
export const VERSION = '${version}';
export const BASE_VERSION = '${baseVersion}';
export const BUILD_DATE = '${buildDate}';
export const GIT_COMMIT_HASH = '${gitCommitHash}';
export const GIT_COMMIT_DATE = '${gitCommitDate}';
export const GIT_BRANCH = '${gitBranch}';
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
console.log(\`
🎯 German Article Trainer v\${VERSION}
📦 Build: \${BUILD_DATE}
🔧 Git: \${GIT_COMMIT_HASH} on \${GIT_BRANCH}
📅 Commit: \${GIT_COMMIT_DATE}
✨ Latest Features:
\${FEATURES.map(f => \`  • \${f}\`).join('\\n')}
\`);
`;

const versionPath = join(dirname(__dirname), 'src', 'version.ts');
writeFileSync(versionPath, versionContent, 'utf8');
console.log(`✅ Generated version.ts:`);
console.log(`   📦 Build: ${buildDate}`);
console.log(`   🔧 Git: ${gitCommitHash} on ${gitBranch}`);
console.log(`   📅 Commit: ${gitCommitDate}`);