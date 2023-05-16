import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./HeroImg.css";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const HeroImg = () => {
	const { t } = useTranslation();

	return (
		<div className="hero">
			<div className="mask">
				<img src="../assets/intro_me.jpg" alt="intro-img" className="intro__img" />
			</div>
			<div className="content">
				<p>
					<Typewriter
						words={["REACT DEVELOPER", "UI/UX DEVELOPER", "TEAM LEADER", "VERY HELPFUL", "HARD WORKER", "FRONT-END DEVELOPER"]}
						loop={false}
						cursor
						cursorStyle="|"
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</p>
				<h1>Ali Batuhan Ak...</h1>
				<div className="buttons">
					<NavLink to="/project" className="btn">
						{t("Project.1")}
					</NavLink>
					<NavLink to="/contact" className="btn btn-light">
						{t("Contact.1")}
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;
