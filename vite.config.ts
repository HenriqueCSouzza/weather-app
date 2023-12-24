import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import ViteSvgPlugin from 'vite-plugin-svg'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ViteSvgPlugin(),
    VitePWA({
      injectRegister: null,

      registerType: 'autoUpdate',
      manifest: {
        name: 'Clima App',
        short_name: 'Clima App',
        description: 'Aplicativo de previsão de tempo',
        theme_color: '#f0b5ce',
        start_url: '/',
        background_color: '#f0b5ce',
        display: 'standalone',
        icons: [
          {
            src: '/sunMoon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/sunMoon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTest.ts']
  }
})
