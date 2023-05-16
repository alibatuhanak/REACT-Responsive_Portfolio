import React, { useState, useEffect } from "react";
import AboutContent from "../AboutContent";
import HeroImg2 from "../HeroImg2";
import PulseLoader from "react-spinners/PulseLoader";

import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1100);
	}, []);
	return (
		<>
			{loading ? (
				<div className="loader__container">
					<PulseLoader color="#fff" loading={loading} size={30} />
				</div>
			) : (
				<div>
					<HeroImg2 heading={t("About.1")} text={t("About.2")} />
					<AboutContent />
				</div>
			)}
			)
		</>
	);
};

export default About;
