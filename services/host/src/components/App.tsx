import { Link, Outlet } from "react-router";
import * as styles from "./App.module.scss"

export const App = () => {
	return (
		<div className={styles.tutu}>
			tutu
			<h1>platform = {__PLATFORM__}</h1>
			<Outlet />
			<br />
			<Link to={"/shop"}>To shop</Link>
			<br />
			<Link to={"/admin"}>To admin</Link>
		</div>
	)
};

