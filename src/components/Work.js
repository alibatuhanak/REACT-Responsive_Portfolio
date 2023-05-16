import "./WorkCard.css";

import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import { useTranslation } from "react-i18next";

const Work = () => {
	const { t } = useTranslation();

	const data = WorkCardData.map((item, key) => {
		return (
			<WorkCard
				key={key}
				imgsrc={item.imgsrc}
				title={item.title}
				text={item.text}
				view={item.view}
			/>
		);
	});

	return (
		<div className="work__container">
			<h1 className="project__heading">{t("Project.1")}</h1>
			<div className="project__container">{data}</div>
		</div>
	);
};

export default Work;
