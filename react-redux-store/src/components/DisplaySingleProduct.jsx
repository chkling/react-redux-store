import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cart-actions";
import { getSingleProduct } from "../actions/single-products-actions";

export default function DisplaySingleProduct(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		getSingleProduct(dispatch);
	}, []);

	return (
		<div>
			<p>{props.product.title}</p>
			<img src={props.product.image} height="'200" width="200" alt="product" />
			<p>${props.product.price}</p>
			<p>{props.product.description}</p>
			<button>Go Back</button>
			<button onClick={() => addToCart(dispatch, props.product)}>
				Add to Cart
			</button>
		</div>
	);
}
