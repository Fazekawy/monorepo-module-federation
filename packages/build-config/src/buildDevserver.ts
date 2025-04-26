import type { Configuration as ConfigurationDevServer } from 'webpack-dev-server';
import { IBuildOpt } from "./types/types";

export const buildDevserver = (options:IBuildOpt): ConfigurationDevServer => {

	return {
		port: options.port ? options.port : 5000,
		open: true,
		historyApiFallback: true,
		hot: true
	}
};

