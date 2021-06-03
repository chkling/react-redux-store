import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/products-page-actions";
import { useEffect } from "react";

export default function ProductsPage() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	// const productsList = products[0];

	useEffect(() => {
		getProducts(dispatch);
	}, []);

	// console.log(productsList);
	// console.log(typeof productsList);

	Object.entries(products).map((product) => {
		<p>{console.log(product)}</p>;
	});

	return (
		<div>
			<h1>Main Products Page</h1>
			{/* <div>
				{products[0].map((product) => (
					<p>{product}</p>
				))}
			</div> */}

			<button onClick={() => console.log(getProducts(dispatch))}>
				Product List
			</button>
		</div>

		// <div></div>
	);
}
