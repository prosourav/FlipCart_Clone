import axios from "axios";
import { ActionTypes } from "../Constants/action-types";

const url = "http://localhost:8000";

export const setProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`);
    dispatch({ type: ActionTypes.SET_PRODUCTS, payload: data });
  } catch (error) {
    return { type: ActionTypes.SET_PRODUCTS_FAIL, payload: error.response };
  }
};

// return { type: ActionTypes.SET_PRODUCTS, payload: product };
