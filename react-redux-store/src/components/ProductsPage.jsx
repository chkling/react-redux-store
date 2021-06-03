import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/products-page-actions";
import SingleProductPage from "./SingleProductPage";

export default function ProductsPage() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);

	useEffect(() => {
		getProducts(dispatch);
	}, []);

	return (
		<div>
			<h1>Main Products Page</h1>
			<div>
				{products.map((product) => (
					<SingleProductPage product={product} />
				))}
			</div>
		</div>
	);
}
