import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	return (
		<div>
			<h1>Cart</h1>
			{cart.map((product) => (
				<p>{product.title}</p>
			))}
		</div>
	);
}
