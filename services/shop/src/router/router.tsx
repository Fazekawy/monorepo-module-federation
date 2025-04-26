import { createBrowserRouter } from "react-router";
import { App } from "../components/App";
import { LazyShop } from "@/components/views/Shop/Shop.lazy";
import { Suspense } from "react";
import { shopRoutesPath } from "@packages/shared"

const routes = [
	{
		path: shopRoutesPath.main,
		Component: App,
		children: [
			{
				path: shopRoutesPath.products,
				element: <Suspense children={<LazyShop />}/>
			},
			{
				path: shopRoutesPath.about,
				element: <div className="">It's just shop service</div>
			}
		]
	}
];

export const router = createBrowserRouter(routes)

export default routes;