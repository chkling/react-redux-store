import { combineReducers } from "redux";
import cart from "./cartReducer";
import products from "./productsReducer";
import singleProduct from "./singleProductReducer";

const rootReducer = combineReducers({
	products,
	cart,
	singleProduct,
});

export default rootReducer;
