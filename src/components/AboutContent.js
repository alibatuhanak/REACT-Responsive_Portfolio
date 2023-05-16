import "./AboutContent.css";

import React from "react";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

const AboutContent = () => {
	const { t } = useTranslation();
	return (
		<div className="about">
			<div className="left">
				<h1>{t("About.3")}</h1>
				<p>{t("About.4")}</p>
				<NavLink to="/contact">
					<button className="btn">{t("Contact.1")}</button>
				</NavLink>
			</div>
			<div className="right">
				<div className="img__container">
					<div className="img__stact top">
						<img
							src="../assets/react1.jpg"
							className="img"
							alt="true"
						/>
					</div>
					<div className="img__stact bottom">
						<img
							src="../assets/react2.webp"
							className="img"
							alt="true"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
