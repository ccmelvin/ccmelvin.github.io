import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load .env file into process.env
dotenv.config();

const apiUrl = process.env.VITE_API_URL || 'http://localhost:3001';  // Default fallback

console.log('API URL:', apiUrl);

// Vite config
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: apiUrl,
        changeOrigin: true,
      }
    }
  }
});
