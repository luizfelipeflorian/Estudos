import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        deckCards: resolve(__dirname, 'deck-cards.html'),
        productsList: resolve(__dirname, 'products.html'),
      }
    }
  }
})