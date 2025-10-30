#!/usr/bin/env node
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function build() {
  console.log('🔄 Starting build process...\n');

  try {
    // Step 1: Generate version
    console.log('📦 Generating version information...');
    await execAsync('node scripts/generate-version.js');
    console.log('✅ Version generated!\n');

    // Step 2: TypeScript compilation
    console.log('🔧 Running TypeScript compilation...');
    await execAsync('npx tsc');
    console.log('✅ TypeScript compiled!\n');

    // Step 3: Vite build
    console.log('⚡ Running Vite build...');
    const { stdout, stderr } = await execAsync('npx vite build');
    console.log(stdout);
    if (stderr && !stderr.includes('Some chunks are larger')) {
      console.error(stderr);
    }

    console.log('🎉 Build completed successfully!');

  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

build();