import { combineReducers } from "redux";
import cart from "../components/Cart";
import products from "./productsReducer";

const rootReducer = combineReducers({
	products,
	cart,
});

export default rootReducer;
