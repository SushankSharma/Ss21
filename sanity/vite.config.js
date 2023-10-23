// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['@sanity/vision'],
    },
  },
}
