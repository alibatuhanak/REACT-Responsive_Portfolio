import React, { useEffect, useState } from "react";
import "animate.css";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
	const [backToTopButton, setBackToTopButton] = useState(false);

	useEffect(() => {
		// 👇️ scroll to top on page load
		window.addEventListener("scroll", () => {
			if (window.scrollY > 1000) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	}, []);
	//or
	// window.addEventListener("scroll", () => {
	// 	if (window.scrollY > 1000) {
	// 		setBackToTopButton(true);
	// 	} else {
	// 		setBackToTopButton(false);
	// 	}
	// });
	return (
		<div>
			{backToTopButton && (
				<button
					className="button-33 animate__animated animate__backInUp"
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth",
						});
					}}
					style={{
						position: "fixed",
						fontSize: "15px",
						bottom: "40px",
						right: "30px",
						backgroundColor: "#fff",
						textAlign: "center",
						borderRadius: "50%",

						cursor: "pointer",
						width: "60px",
						height: "60px",
						boxSizing: "border-box",
					}}
				>
					<FaArrowUp />
				</button>
			)}
		</div>
	);
}
