import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div id="navbar">
			<h1>Grab Bag Garage</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/About">About Us</Link>
				<Link to="/Store">Shop Now</Link>
				<Link to="/Checkout">My Cart</Link>
			</nav>
		</div>
	);
}
