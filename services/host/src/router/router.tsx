import { createBrowserRouter } from "react-router";
import { App } from "@/components/App";
//@ts-ignore
import shopRoutes from "shop/Routes"
//@ts-ignore
import adminRoutes from "admin/Routes"

export const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			...shopRoutes,
			...adminRoutes
		]
	}
])