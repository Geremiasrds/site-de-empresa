import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua "seu-usuario" e "seu-repo" abaixo
export default defineConfig({
  base: '/seu-repo/', // exemplo: '/site-refrigeracao/'
  plugins: [react()],
})
