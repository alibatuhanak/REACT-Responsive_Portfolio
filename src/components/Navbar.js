import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const [color, setColor] = useState(false);
	const changeColor = () => {
		window.scrollY >= 90 ? setColor(true) : setColor(false);
	};
	window.addEventListener("scroll", changeColor);

	const [open, setOpen] = useState(false);

	const { t, i18n } = useTranslation();

	function clickLanguage(lang) {
		i18n.changeLanguage(lang);
	}
	return (
		<div className={color ? "navbar navbar__bg" : "navbar"}>
			<NavLink to="/" className="navbar__logo">
				<h1 className="navbar__logo-h1">batu.</h1>
			</NavLink>
			<div className="nav__lang-item">
				<div
					onClick={() => {
						setOpen(!open);
					}}
					className="lang__menu"
				>
					<div className="selected__lang">
						<FaGlobe
							size={20}
							style={{ color: "#fff", marginTop: "2px" }}
						/>
					</div>
					{open ? (
						<ul className="lang__content">
							<li onClick={() => clickLanguage("en")}>English</li>
							<li onClick={() => clickLanguage("tr")}>Turkish</li>
							<li onClick={() => clickLanguage("de")}>Deutsch</li>
							<li onClick={() => clickLanguage("ru")}>Русский</li>
						</ul>
					) : null}
				</div>
			</div>
			<ul className={click ? "nav__menu active" : "nav__menu"}>
				<li className="nav-item">
					<NavLink
						className={({ isActive }) =>
							"nav-link" + (isActive ? " activated" : "")
						}
						onClick={handleClick}
						to="/"
						end
					>
						{t("Home.1")}
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						className={({ isActive }) =>
							"nav-link" + (isActive ? " activated" : "")
						}
						onClick={handleClick}
						to="/project"
					>
						{t("Project.1")}
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						className={({ isActive }) =>
							"nav-link" + (isActive ? " activated" : "")
						}
						onClick={handleClick}
						to="/about"
					>
						{t("About.1")}
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						className={({ isActive }) =>
							"nav-link" + (isActive ? " activated" : "")
						}
						onClick={handleClick}
						to="/contact"
					>
						{t("Contact.1")}
					</NavLink>
				</li>
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click ? (
					<FaTimes size={20} style={{ color: "#fff" }} />
				) : (
					<FaBars size={20} style={{ color: "#fff" }} />
				)}
			</div>
		</div>
	);
};

export default Navbar;
