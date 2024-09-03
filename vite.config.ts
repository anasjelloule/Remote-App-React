import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'reactRemote',
      filename: 'remoteEntry.js',
      exposes: {
        // './MyReactComponent': './src/main.tsx',
        './MyReactComponent': './src/components/MyReactComponent.tsx',
        // './store': './src/store'
      },
      shared: ['react', 'react-dom',"zustand","react-router-dom"],
      // shared:require('./package.json').dependecies
      // shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
  // preview: {
  //   port: 9000,
  // },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
    cors: true,
  },
  define: {
    // global: 'window',
    // Buffer: Buffer,
    // process: process,
  },
});
