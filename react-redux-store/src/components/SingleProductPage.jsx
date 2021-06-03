import React from "react";
import { addToCart } from "../actions/cart-actions";
import { useDispatch } from "react-redux";

export default function SingleProductPage(props) {
	const dispatch = useDispatch();
	return (
		<div>
			<p>{props.product.title}</p>
			<img src={props.product.image} height="'200" width="200" alt="product" />
			<p>${props.product.price}</p>
			<p>{props.product.description}</p>
			<button onClick={() => addToCart(dispatch, props.product)}>
				Add to Cart
			</button>
		</div>
	);
}

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
