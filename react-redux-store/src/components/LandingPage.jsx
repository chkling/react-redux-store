import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<div id="main-landing">
			<div id="main-landing-section">
				<Link className="search-button" to="/Store" type="button">
					Explore
				</Link>
			</div>
		</div>
	);
}
