import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: { open: true },          // optional
  build:  { outDir: 'build' },      // keep CRA’s output folder name
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',         // keep if you already inject vars
        quietDeps: true             // <-- silence deprecation noise
      }
    }
  }
});
