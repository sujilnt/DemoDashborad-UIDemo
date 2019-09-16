const NodemonPlugin = require("nodemon-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const path = require("path");
module.exports = () => ({
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: [/node_modules/, /webpack/,"/src/Client/"],
				use: [
					"babel-loader",
					{
						loader: "eslint-loader",
						options: {
							emitWarning: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new NodemonPlugin({
			watch: path.resolve("./ServerBundle"),
			script: "./ServerBundle/server.bundle.js",
			verbose: true,
		}),
		new InjectManifest({
			swSrc: "./src/src-sw.js",
			swDest: "sw.js",
		}),
	],
});
