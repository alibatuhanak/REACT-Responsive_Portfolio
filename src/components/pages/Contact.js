import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Form from "../Form";
import HeroImg2 from "../HeroImg2";
import { useTranslation } from "react-i18next";

const Contact = () => {
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
					<HeroImg2 heading={t("Contact.1")} text={t("Contact.2")} />
					<Form />
				</div>
			)}
		</>
	);
};

export default Contact;
