import { ADD_TO_CART } from "../action-types/cart-action-type";

export const addToCart = async (dispatch, product) => {
	return dispatch({
		type: ADD_TO_CART,
		payload: product,
	});
};
