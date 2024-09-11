import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/backend': {
        target:'http://127.0.0.1:4000',
        secure: false,
      },
    },
  },
  plugins: [react()],
})


