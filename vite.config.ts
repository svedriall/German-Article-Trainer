import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/German-Article-Trainer/', // Correct path for GitHub Pages project site
  define: {
    __RESPONSIVE_VOICE_KEY__: JSON.stringify(process.env.RESPONSIVE_VOICE_JS_KEY || 'FREE_FOR_EDUCATIONAL_USE')
  }
})