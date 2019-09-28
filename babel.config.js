module.exports = function (api) {
  api.cache(false)
  return {
    "presets": [
      [
        "@babel/preset-env",
        {
          "modules": false,
          "targets": {
            "browsers": ["> 1%", "last 1 versions", "Android >= 4.4", "ios >= 8", "not ie <= 10"]
          },
          "useBuiltIns": "usage",
          "corejs": "3.1.4"
        }
      ]
    ],
    "plugins": [],
    exclude: file => {
      return /node_modules/.test(file) && !/testnpm/.test(file)
    },
    babelrcRoots: [
      // Keep the root as a root
      ".",
    
      // Also consider monorepo packages "root" and load their .babelrc files.
      "./node_modules/*"
    ],
    include: file => {
      console.log('包括的文件');
      if (/testnpm/.test(file) || /app/) {
        console.log(file)
      }
      return (/testnpm/.test(file) || /app/)
    }
  }
};