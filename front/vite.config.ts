import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '',
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: path => path.replace('/api', ''),
      },
    },
  },
})
