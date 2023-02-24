import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig(() => ({
  plugins: [
    vuePlugin()
  ], 
  build: {
    minify: false,
  },
  // optimizeDeps: {
  //   exclude: ['@vitejs/test-example-external-component'],
  // },
}))
