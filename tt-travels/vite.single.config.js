import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    viteSingleFile(),
    VitePWA({ disable: true }),
  ],
  build: {
    outDir: 'dist-single',
    emptyOutDir: true,
  },
})
