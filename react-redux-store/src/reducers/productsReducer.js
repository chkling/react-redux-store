import { GET_PRODUCTS } from "../action-types/products-page-action-types";

const initialState = [];

const products = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return (state = action.payload);
		default:
			return state;
	}
};

export default products;
