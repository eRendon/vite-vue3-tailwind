import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
      ? '/vite-vue3-tailwind/'
      : '/',
  define: {
    'process.env': {}
  },
  plugins: [
      vue(),
    VitePWA({
      mode: 'development',
      srcDir: 'src',
      filename: 'sw.ts',
      base: '/',
      strategies: 'injectManifest',
      includeAssets: ['/favicon.svg'], // <== don't remove slash, for testing purposes
      manifest: {
        name: 'Vue 3 Template',
        short_name: 'Vue 3',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png', // <== don't remove slash, for testing purposes
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', // <== don't remove slash, for testing purposes
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', // <== don't remove slash, for testing purposes
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@/assets',
        replacement: path.resolve(__dirname, './src/assets')
      },
      {
        find: '@/components',
        replacement: path.resolve(__dirname, './src/components')
      },
      {
        find: '@/interface',
        replacement: path.resolve(__dirname, './src/interface')
      },
      {
        find: '@/layout',
        replacement: path.resolve(__dirname, './src/layout')
      },
      {
        find: '@/plugins',
        replacement: path.resolve(__dirname, './src/plugins')
      },
      {
        find: '@/store',
        replacement: path.resolve(__dirname, './src/store')
      },
      {
        find: '@/views',
        replacement: path.resolve(__dirname, './src/views')
      },
      {
        find: '@/router',
        replacement: path.resolve(__dirname, './src/router')
      },
      {
        find: '@/server',
        replacement: path.resolve(__dirname, './src/server')
      },
      {
        find: '@/',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  optimizeDeps: {
    include: ['lodash']
  }
})
