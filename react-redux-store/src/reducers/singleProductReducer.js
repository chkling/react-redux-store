import { GET_SINGLE_PRODUCT } from "../action-types/products-page-action-types";

const initialState = {};

const products = (state = initialState, action) => {
	switch (action.type) {
		case GET_SINGLE_PRODUCT:
			return (state = action.payload);
		default:
			return state;
	}
};

export default products;
