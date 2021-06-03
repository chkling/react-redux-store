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
		<div id="main-products-section">
			<div>
				{products.map((product) => (
					<SingleProductPage key={product.title} product={product} />
				))}
			</div>
		</div>
	);
}
