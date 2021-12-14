import { ActionTypes } from "../Constants/action-types";

export const getCartItem = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, payload];
    case ActionTypes.ADD_TO_CART_FAIL:
      return { error: payload };
    case ActionTypes.REMOVE_FROM_CART:
      const Cart = state.filter((item) => {
        return item.id !== payload.cart.id;
      });
      return { Cart };
    default:
      return state;
  }
};
