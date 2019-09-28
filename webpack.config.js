const path = require('path')
module.exports = {
  entry: "./app.js",
  output: {
      filename:  '[name].js',
  },
  resolve: {
    modules: [path.resolve(__dirname, './node_modules')],
    alias: {
      "n": path.resolve(__dirname, './node_modules/testnpm'),
    }
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: [{
          loader: 'babel-loader',
          options: {
            rootMode: "upward",
            configFile: path.resolve(__dirname,'./babel.config.js')
          },
        // }],
        exclude: /node_modules\/(?!testnpm)/,
        include: file => {
          console.log('包括的文件');
          if (/testnpm/.test(file) || /app/) {
            console.log(file)
          }
          return (/testnpm/.test(file) || /app/)
        }
      },
    ]
  },
  plugins: [

  ]
}