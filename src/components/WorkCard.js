import "./WorkCard.css";

import React from "react";

const WorkCard = props => {
	return (
		<div className="project__card">
			<img src={props.imgsrc} alt="img" />
			<h2 className="project__title">{props.title}</h2>
			<div className="pro__details">
				<p>{props.text}</p>
				<div className="pro__btns">
					<a href={props.view} className="btn">
						View
					</a>
					<a href="https://www.google.com" className="btn">
						Source
					</a>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
