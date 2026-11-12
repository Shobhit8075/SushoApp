import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://sushoapp-1.onrender.com'


    },
  },
  plugins: [react()],
})
