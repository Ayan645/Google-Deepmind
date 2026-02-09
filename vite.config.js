import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        wardrobe: resolve(__dirname, 'wardrobe.html'),
        runway: resolve(__dirname, 'runway.html'),
        stylyz: resolve(__dirname, 'stylyz.html'),
      },
    },
  },
  server: {
    open: true,
  },
});
