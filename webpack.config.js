module.exports = {
  entry: "./js/scripts.js",
  devtool: "inline-source-map",
  output: {
    filename: "src/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [{ loader: "style-loader" },
              { 
                loader: "css-loader",
                options: {
                  sourceMap: true
                } 
              },
              { loader: "sass-loader" }
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}