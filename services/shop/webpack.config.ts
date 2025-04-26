import path from "path"
import webpack from "webpack";
import { buildWebpack, IBuildOpt } from "@packages/build-config";
import packageJson from "./package.json"

export default (env: Omit<IBuildOpt, "path">): webpack.Configuration => {
	const isDev = env.mode === "development"

	env.port = env.port ? env.port : 2222;

	let config = buildWebpack({
		...env,
		paths: {
			src: path.resolve(__dirname, "src"),
			entry: path.resolve(__dirname, "src", "index.tsx"),
			output: path.resolve(__dirname, "build"),
			publicHtml: path.resolve(__dirname, "src", "public", "index.html"),
			public: path.resolve(__dirname, "src", "public")
		}
	})

	config.plugins.push(new webpack.container.ModuleFederationPlugin({
		name: 'shop',
		filename: 'remoteEntry.js',
		exposes: {
			'./Routes': './src/router/router.tsx',
		},
		shared: {
			...packageJson.dependencies,
			react: {
				eager: true,
				requiredVersion: packageJson.dependencies['react']
			},
			"react-dom": {
				eager: true,
				requiredVersion: packageJson.dependencies['react-dom']
			},
			"react-router": {
				eager: true,
				requiredVersion: packageJson.dependencies['react-router']
			}

			// maybe react-router needs be here
		}
	}))

	return config;
}