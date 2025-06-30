import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',   // base path for GitHub Pages
  server: { open: true },          // optional
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',         // keep if you already inject vars
        quietDeps: true             // <-- silence deprecation noise
      }
    }
  }
});
