export interface IBuildPath {
	entry: string,
	output: string,
	publicHtml: string,
	src: string,
	public: string
}

export interface IBuildOpt {
	mode: "development" | "production",
	port: number,
	paths: IBuildPath,
	analyzer?: boolean,
	platform: "mobile" | "desktop",

	ADMIN_REMOTE_URL?: string,
	SHOP_REMOTE_URL?: string
}