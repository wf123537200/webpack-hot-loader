module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.gif/,
        loader: "file-loader!url-loader?limit=10000&minetype=image/gif"
      },
      {
        test: /\.jpg/,
        loader: "file-loader!url-loader?limit=10000&minetype=image/jpg"
      },
      {
        test: /\.png/,
        loader: "file-loader!url-loader?limit=10000&minetype=image/png"
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      }
    ]
  }
}