import { combineReducers } from "redux";

import { getProductReducer } from "./productReducers";

const reducers = combineReducers({
  allProducts: getProductReducer,
  //   selectedProduct: selectProductReducer,
});
export default reducers;
