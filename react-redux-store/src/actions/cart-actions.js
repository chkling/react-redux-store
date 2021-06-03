import { ADD_TO_CART } from "../action-types/cart-action-type";

export const addToCart = (dispatch, product) => {
	return dispatch({
		type: ADD_TO_CART,
		payload: product,
	});
};
