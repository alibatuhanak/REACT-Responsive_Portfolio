import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
	return (
		<div className="error">
			<div className="error__center">
				<img
					src="../assets/404.jpg"
					className="error__img"
					alt="404_ERROR"
				/>
			</div>
			<div className="content">
				<h1>404 - PAGE NOT FOUND</h1>
				<p>
					The page you are looking for might have been removed had its
					name changed or is temporarily unavailable.
				</p>
				<div className="button">
					<NavLink to="/" className="btn btn-light">
						Back Home
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Error;
