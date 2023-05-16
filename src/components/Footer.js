import React from "react";
import "./Footer.css";
import {
	FaHome,
	FaPhone,
	FaMailBulk,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<div className="footer">
			<div className="footer__container">
				<div className="left">
					<div className="location">
						<FaHome
							size={20}
							style={{ color: "#fff", marginRight: "2rem" }}
						/>
						<div>
							<h4>Halic University</h4>
							<h4>Istanbul</h4>
						</div>
					</div>
					<div className="phone">
						<h4>
							<FaPhone
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							1-2323-343-23
						</h4>
					</div>
					<div className="email">
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							example@example.com
						</h4>
					</div>
				</div>
				<div className="right">
					<h4>{t("Company.1")}</h4>
					<p>{t("Company.2")}</p>
					<div className="social">
						<a
							href="https://www.facebook.com"
							style={{ marginRight: "20px" }}
						>
							<FaFacebook size={30} style={{ color: "#fff" }} />
						</a>
						<a
							href="https://www.twitter.com"
							style={{ marginRight: "20px" }}
						>
							<FaTwitter size={30} style={{ color: "#fff" }} />
						</a>
						<a
							href="https://www.linkedin.com"
							style={{ marginRight: "20px" }}
						>
							<FaLinkedin size={30} style={{ color: "#fff" }} />
						</a>
					</div>
				</div>
			</div>
			<div align="center" style={{ marginTop: "10vh", color: "#fff" }}>
				© 2022 Batu / All rights Reserved
			</div>
		</div>
	);
};

export default Footer;
