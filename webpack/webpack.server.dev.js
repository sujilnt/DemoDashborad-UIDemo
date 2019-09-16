const NodemonPlugin = require("nodemon-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const path = require("path");
const AggressiveMergingPlugin =require("webpack").optimize.AggressiveMergingPlugin;
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
	optimization: {
		minimize: true,
		mangleWasmImports: true,
		removeEmptyChunks: true,
		mergeDuplicateChunks: true,
		minimizer:[
			new TerserPlugin({
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: {
						drop_console: true,
					},
					mangle: true, // Note `mangle.properties` is `false` by default.
					module: false,
					output: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false,
					cache: true,
					parallel: true,
				},
			}),
			new AggressiveMergingPlugin({
				minSize: 30000, // 字节，分割点。默认：30720
				maxSize: 50000, // 字节，每个文件最大字节。默认：51200
				chunkOverhead: 0, // 默认：0
				entryChunkMultiplicator: 1, // 默认：1
			})
		]
	}
});
