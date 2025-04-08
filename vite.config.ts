
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      '2b22b371-5e48-433a-bd69-e43357682e4c.lovableproject.com',
      'heyarka.github.io'
    ],
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/ArkaPortfolio.github.io/', // Updated base path to match GitHub Pages repository name
}));
