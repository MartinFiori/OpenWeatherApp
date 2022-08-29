import React from "react";
import s from "./Nav.module.css";
import Cloud from "../../svg/Cloud";

const Nav = () => {
	return (
		<nav className={s.nav}>
			<h1 className={s.title}>
				<Cloud className={s.cloud} />
				OpenWeatherApp.js
			</h1>
		</nav>
	);
};

export default Nav;
