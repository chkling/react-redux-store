import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cart-actions";

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	addToCart(dispatch);
	// }, []);

	return (
		<div id="cart-container">
			<h1>Cart</h1>
			{cart.map((product) => (
				<div>
					<p>
						{product.title}: ${product.price}
					</p>
				</div>
			))}
		</div>
	);
}
