import { Link, Outlet } from "react-router";
import { shopRoutesPath } from "@packages/shared";
import * as styles from "./App.module.scss";

export const App = () => {
	return (
		<div className={styles.tutu}>
			platform = {__PLATFORM__}

			<h1>It's shop service</h1>
			<Outlet />

			<Link to={shopRoutesPath.products}>To products</Link>
			<br />
			<Link to={shopRoutesPath.about}>To about</Link>
		</div>
	)
};

