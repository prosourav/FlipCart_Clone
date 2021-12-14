import { combineReducers } from "redux";
import { getCartItem } from "./cartReducers";

import { getProductReducer, getSelectedProduct } from "./productReducers";

const reducers = combineReducers({
  allProducts: getProductReducer,
  selectedProduct: getSelectedProduct,
  cartItem: getCartItem,
  //   selectedProduct: selectProductReducer,
});
export default reducers;
