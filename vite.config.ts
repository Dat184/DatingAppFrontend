import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  // This ensures proper client-side routing to prevent 404 errors on mobile
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});