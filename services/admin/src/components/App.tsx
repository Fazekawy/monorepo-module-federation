import { Link, Outlet } from "react-router";
import { adminRoutesPath } from "@packages/shared";
import * as styles from "./App.module.scss";

export const App = () => {
	return (
		<div className={styles.tutu}>
			platform = {__PLATFORM__}

			<Link to={adminRoutesPath.main}><h1>It's admin page</h1></Link>
			<Outlet />

			<Link to={adminRoutesPath.about}>To about</Link>
		</div>
	)
};

