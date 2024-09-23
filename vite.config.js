export default {
  root: './',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        shop: './shop.html'
      }
    }
  }
}
