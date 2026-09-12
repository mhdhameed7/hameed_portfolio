import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.glb'],
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
            if (id.includes('framer-motion') || id.includes('motion') || id.includes('gsap')) return 'motion-vendor';
            if (id.includes('@react-three')) return 'r3f-vendor';
            if (id.includes('three')) return 'three-core';
            if (id.includes('@splinetool')) return 'spline-vendor';
            if (id.includes('react-icons') || id.includes('lucide-react') || id.includes('clsx') || id.includes('tailwind-merge')) return 'ui-vendor';
            if (id.includes('meshline')) return 'mesh-vendor';
            return 'vendor';
          }
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Optimize minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log di production
        drop_debugger: true,
      },
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'three',
    ],
    exclude: [
      '@splinetool/runtime', // Exclude heavy runtime
    ],
  },
})
