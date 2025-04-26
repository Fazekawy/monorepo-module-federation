import HtmlWebpackPlugin from "html-webpack-plugin";
import { IBuildOpt } from "./types/types";
import webpack, { Configuration, DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import path from "path";

export const buildPlugins = ({ mode, paths, analyzer, platform }: IBuildOpt): Configuration['plugins'] => {

	const isDev = mode === "development";
	const isProd = mode === "production";

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: paths.publicHtml,
			favicon: path.resolve(paths.public, 'favicon.ico'),
			publicPath: '/'
		}),
		new DefinePlugin({
			__PLATFORM__: JSON.stringify(platform ?? "desktop")
		})
	]

	if (isDev) {
		plugins.push(new webpack.ProgressPlugin());
		// plugins.push(new ForkTsCheckerWebpackPlugin());
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	if (isProd) {
		plugins.push(new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css'
		}));
		plugins.push(new CopyPlugin({
			patterns: [
				{ from: path.resolve(paths.public, "locales"), to: path.resolve(paths.output, "locales") },
			],
		}));
	}

	if (analyzer) plugins.push(new BundleAnalyzerPlugin())

	return plugins
};

