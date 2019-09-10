module.exports = () => ({
  mode: "production",
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: [/node_modules/, /webpack/,"/src/Client/"],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
});
