import { ActionTypes } from "../Constants/action-types";

export const getCartItem = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const exist = state.find(item=>{
       return item.id === payload.id
      });
      if(exist){
        return state;
      }
      return [...state, payload];
    case ActionTypes.ADD_TO_CART_FAIL:
      return { error: payload };
    case ActionTypes.REMOVE_FROM_CART:
     
      const Cart = state.filter((item) => {
        return item.id !== payload;
      });
      return  Cart;
    default:
      return state;
  }
};
