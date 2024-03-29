const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CompressionPlugin = require('compression-webpack-plugin')
const { InjectManifest } = require("workbox-webpack-plugin");
const AggressiveMergingPlugin =require("webpack").optimize.AggressiveMergingPlugin;
module.exports = () => ({
	mode: "development",
	devtool: "eval-source-map",
	devServer: {
		port: 9000,
		compress: true,
		serveIndex: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /utils/, /webpack/,"/src/Server/"],
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
			{
				test: /\.(css)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(png|jpg|gif|jpe?g|svg|webp)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 5000,
							outputPath: "./assets/images",
						},
					},
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: "65-90",
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75,
							},
							svgo: {
								removeViewBox: false,
							},
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							outputPath: "./assets/fonts",
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new InjectManifest({
			swSrc: "./src/sw-dev.js",
			swDest: "sw.js"
		}),
	],
	optimization: {
		minimize: true,
		mangleWasmImports: true,
		removeEmptyChunks: true,
		mergeDuplicateChunks: true,
		minimizer:[
			new AggressiveMergingPlugin({
				minSize: 30000, // 字节，分割点。默认：30720
				maxSize: 50000, // 字节，每个文件最大字节。默认：51200
				chunkOverhead: 0, // 默认：0
				entryChunkMultiplicator: 1, // 默认：1
			})
		]
	}
});
