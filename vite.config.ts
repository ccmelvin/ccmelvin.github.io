import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load .env file into process.env
dotenv.config();

const apiUrl = process.env.VITE_API_URL || 'http://localhost:3001';

console.log('API URL:', apiUrl);

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Proxy API requests to your Express backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
  }
});