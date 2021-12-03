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
