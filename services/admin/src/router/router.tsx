import { createBrowserRouter } from "react-router";
import { App } from "../components/App";
import { LazyAbout } from "@/components/views/About/About.lazy";
import { Suspense } from "react";
import { adminRoutesPath } from "@packages/shared"

export const routes = [
	{
		path: adminRoutesPath.main,
		Component: App,
		children: [
			{
				path: adminRoutesPath.about,
				element: <Suspense children={<LazyAbout />}/>
			}
		]
	}
]

export const router = createBrowserRouter(routes);

export default routes;