import { ActionTypes } from "../Constants/action-types";

export const getProductReducer = (
  state = { products: [] },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        products: payload,
      };
    case ActionTypes.SET_PRODUCTS_FAIL:
      return { error: payload };
    default:
      return state;
  }
};

export const getSelectedProduct = (
  state = { product: {} },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        product: payload,
      };
    case ActionTypes.SELECTED_PRODUCT_FAIL:
      return {
        error: payload,
      };
    default:
      return state;
  }
};
