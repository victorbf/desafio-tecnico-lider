/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': '/resources/inertia',
      _: '/resources/ts',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup.ts',
    css: true,
  },
});
