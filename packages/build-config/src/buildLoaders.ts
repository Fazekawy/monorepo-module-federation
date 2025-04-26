import { IBuildOpt } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ReactRefreshTypeScript from "react-refresh-typescript"

export const buildLoaders = ({ mode }:IBuildOpt) => {

	const isDev = mode === "development";

	const tsLoader = {
		test: /\.([cm]?ts|tsx)$/,
		use: [{
			loader: "ts-loader",
			options: {
				transpileOnly: true,
				getCustomTransformers: () => ({
					before: isDev ?? ReactRefreshTypeScript()
				})
			}
		}],
		exclude: /node_modules/,

	}

	const cssLoader = {
		loader: 'css-loader',
		options: {

			importLoaders: 1,
			modules: {
				localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
			}
		}
	}

	const sassLoaders = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			cssLoader,
			"sass-loader"
		],
	}

	const assetLoaders = {
			test: /\.png|.jpg|.gif/,
			type: 'asset/resource'
	}

	const svgrLoader = {
		test: /\.svg$/,
		issuer: /\.[jt]sx?$/,
		use: [{
			loader: '@svgr/webpack',
			options: {
				icon: true,

				svgoConfig: {
					plugins: [
						{
							name: 'convertColors',
							params: {
								currentColor: true
							}
						}
					]
				}
			}
		}],

	}

	return [
		tsLoader,
		sassLoaders,
		assetLoaders,
		svgrLoader
	]
};

