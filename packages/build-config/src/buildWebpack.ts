import webpack from 'webpack';
import { IBuildOpt } from "./types/types";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildDevserver } from "./buildDevserver";

export const buildWebpack = (options: IBuildOpt): webpack.Configuration => {

	const paths = options.paths

	const isDev = options.mode === "development"

	return {
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: isDev ? "[name].[contenthash].js" : "[name].js",
			clean: true
		},
		mode: options.mode,
		plugins: buildPlugins(options),

		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolve(options),

		devServer: isDev ? buildDevserver(options) : undefined,

		devtool: isDev ? 'source-map' : 'eval-cheap-source-map',
	}
};

