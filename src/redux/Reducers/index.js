import { combineReducers } from "redux";

import { getProductReducer, getSelectedProduct } from "./productReducers";

const reducers = combineReducers({
  allProducts: getProductReducer,
  selectedProduct: getSelectedProduct,
  //   selectedProduct: selectProductReducer,
});
export default reducers;
