import React from "react";
import { Link } from "react-router-dom";
import s from "./BackToMenu.module.css";

const BackToMenu = ({ text, cssProps }) => {
	return (
		<Link to={"/"} className={`${s[cssProps]}`}>
			{text}
		</Link>
	);
};

export default BackToMenu;
