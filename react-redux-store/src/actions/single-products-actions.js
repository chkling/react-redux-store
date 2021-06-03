import { GET_SINGLE_PRODUCT } from "../action-types/single-products-action-types";

export const getSingleProduct = async (dispatch, productDetails) => {
	return dispatch({
		type: GET_SINGLE_PRODUCT,
		payload: productDetails,
	});
};
