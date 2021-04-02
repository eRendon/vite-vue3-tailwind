import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [vue()],
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
})
