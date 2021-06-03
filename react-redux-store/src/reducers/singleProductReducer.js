import { GET_SINGLE_PRODUCT } from "../action-types/single-products-action-types";

const initialState = {};

const singleProduct = (state = initialState, action) => {
	switch (action.type) {
		case GET_SINGLE_PRODUCT:
			return (state = action.payload);
		default:
			return state;
	}
};

export default singleProduct;
