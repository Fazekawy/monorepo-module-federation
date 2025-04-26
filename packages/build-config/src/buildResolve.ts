import { ResolveOptions } from "webpack";
import { IBuildOpt } from "./types/types";

export const buildResolve = (options:IBuildOpt):ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js', '.scss'],
		alias: {
			"@": options.paths.src
		}
	}
};

