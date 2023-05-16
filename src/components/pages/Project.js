import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import HeroImg2 from "../HeroImg2";
import PricingCard from "../PricingCard";
import Work from "../Work";

import { useTranslation } from "react-i18next";

const Project = () => {
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
					<HeroImg2 heading={t("Project.1")} text={t("Project.2")} />
					<Work />
					<PricingCard />
				</div>
			)}
		</>
	);
};

export default Project;
