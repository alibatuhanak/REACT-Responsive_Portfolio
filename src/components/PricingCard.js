import "./PricingCard.css";
import React from "react";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

const PricingCard = () => {
	const { t } = useTranslation();
	return (
		<div className="pricing">
			<h1 className="pricing__title">{t("Pricing.1")}</h1>
			<div className="card__container">
				<div className="card">
					<h4>- {t("Pricing.2")} -</h4>
					<span className="bar"></span>
					<p className="btc">$ 100</p>
					<p>- 3 {t("Pricing.3")} -</p>
					<p>- 3 {t("Pricing.4")} -</p>
					<p>- {t("Pricing.5")} -</p>
					<p>- {t("Pricing.6")} -</p>
					<NavLink to="/contact" className="btn">
						{t("Pricing.7")}
					</NavLink>
				</div>
				<div className="card">
					<h4>- {t("Pricing.2")} -</h4>
					<span className="bar"></span>
					<p className="btc">$ 200</p>
					<p>- 2 {t("Pricing.3")} -</p>
					<p>- 5 {t("Pricing.4")} -</p>
					<p>- {t("Pricing.5")} -</p>
					<p>- {t("Pricing.6")} -</p>
					<NavLink to="/contact" className="btn">
						{t("Pricing.7")}
					</NavLink>
				</div>
				<div className="card">
					<h4>- {t("Pricing.2")} -</h4>
					<span className="bar"></span>
					<p className="btc">$ 100</p>
					<p>- 3 {t("Pricing.3")} -</p>
					<p>- 3 {t("Pricing.4")} -</p>
					<p>- {t("Pricing.5")} -</p>
					<p>- {t("Pricing.6")} -</p>
					<NavLink to="/contact" className="btn">
						{t("Pricing.7")}
					</NavLink>
				</div>
				<div className="card">
					<h4>- Premium -</h4>
					<span className="bar"></span>
					<p className="btc">$ 200</p>
					<p>- 2 Days -</p>
					<p>- 5 Pages -</p>
					<p>- Featured -</p>
					<p>- Responsive Design -</p>
					<NavLink to="/contact" className="btn">
						PURCHASE NOW
					</NavLink>
				</div>
				<div className="card item__3">
					<h4>- Business -</h4>
					<span className="bar"></span>
					<p className="btc">$ 300</p>
					<p>- 5 Days -</p>
					<p>- 8 Pages -</p>
					<p>- Featured -</p>
					<p>- Responsive Design -</p>
					<NavLink to="/contact" className="btn">
						PURCHASE NOW
					</NavLink>
				</div>
				<div className="card item__4">
					<h4>- Amazing -</h4>
					<span className="bar"></span>
					<p className="btc">$ 500</p>
					<p>- 3 Days -</p>
					<p>- 15 Pages -</p>
					<p>- Featured -</p>
					<p>- Responsive Design -</p>
					<NavLink to="/contact" className="btn">
						PURCHASE NOW
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
