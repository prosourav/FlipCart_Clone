import axios from "axios";
import { ActionTypes } from "../Constants/action-types";

const url = "http://localhost:8000";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/product/${id}`);
    dispatch({ type: ActionTypes.ADD_TO_CART, payload: data });
  } catch (error) {
    return { type: ActionTypes.ADD_TO_CART_FAIL, payload: error.response };
  }
};
