import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bears-corner-website/', // 👈 match your repo name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
