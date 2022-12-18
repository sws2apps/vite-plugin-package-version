import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import loadVersion from '@sws2apps/vite-plugin-package-version';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), loadVersion()],
  server: {
    port: 3000,
    strictPort: true,
  },
});
