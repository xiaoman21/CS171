import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dashboard-dist',
    lib: {
      entry: './MediaDashboardSlide.tsx',
      name: 'MediaDashboardSlide',
      fileName: (format) => `media-dashboard.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  server: {
    port: 3000
  }
});

