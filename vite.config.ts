import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to replace environment variables in HTML
function htmlEnvReplace() {
  return {
    name: 'html-env-replace',
    transformIndexHtml(html: string) {
      return html.replace(
        /%(\w+)%/g,
        (match, envVar) => {
          const value = process.env[envVar];
          if (value !== undefined) {
            return value;
          }
          // Fallback values for specific variables
          if (envVar === 'RESPONSIVE_VOICE_JS_KEY') {
            return 'FREE_FOR_EDUCATIONAL_USE';
          }
          return match; // Keep original if no replacement found
        }
      );
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlEnvReplace()
  ],
  base: '/German-Article-Trainer/', // Correct path for GitHub Pages project site
  define: {
    __RESPONSIVE_VOICE_KEY__: JSON.stringify(process.env.RESPONSIVE_VOICE_JS_KEY || 'FREE_FOR_EDUCATIONAL_USE')
  }
})