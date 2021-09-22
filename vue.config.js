module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/styles.scss";',
      },
    },
  },
}
