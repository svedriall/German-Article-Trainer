// This file generates version.ts with the correct build timestamp
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildDate = new Date().toISOString();
const version = '1.2.0';

const versionContent = `// Version information for German Article Trainer
// Generated at build time: ${buildDate}
export const VERSION = '${version}';
export const BUILD_DATE = '${buildDate}';
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
console.log(\`
🎯 German Article Trainer v\${VERSION}
📦 Build: \${BUILD_DATE}
✨ Latest Features:
\${FEATURES.map(f => \`  • \${f}\`).join('\\n')}
\`);
`;

const versionPath = join(dirname(__dirname), 'src', 'version.ts');
writeFileSync(versionPath, versionContent, 'utf8');
console.log(`✅ Generated version.ts with build date: ${buildDate}`);