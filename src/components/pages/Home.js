import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import HeroImg from "../HeroImg";

const Home = () => {
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
					<HeroImg />
				</div>
			)}
		</>
	);
};

export default Home;
