import React, { useEffect } from "react";
import "./index.css";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Error from "./components/pages/Error";
import ScrollToTop from "./components/ScrollToTop";

function useScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
}

function App() {
	useScrollToTop();
	return (
		<div className="container">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Project />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<ScrollToTop />
			<Footer />
		</div>
	);
}

export default App;
