import React from "react";
import { addToCart } from "../actions/cart-actions";
import { useDispatch } from "react-redux";
import { getSingleProduct } from "../actions/single-products-actions";

export default function SingleProductPage(props) {
	const dispatch = useDispatch();
	return (
		<div className="product-card">
			<p>{props.product.title}</p>
			<img src={props.product.image} height="'200" width="200" alt="product" />
			<p>${props.product.price}</p>
			<p>{props.product.description}</p>
			<button onClick={() => getSingleProduct(dispatch, props.product)}>
				View Item
			</button>
			<button onClick={() => addToCart(dispatch, props.product)}>
				Quick Add to Cart
			</button>
		</div>
	);
}
