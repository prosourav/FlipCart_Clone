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

export const removeFromCart = (id)=> async(dispatch)=>{
  try{
    dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: id });
  }catch(error){
    return { type: ActionTypes.REMOVE_FROM_CART_FAIL, payload: error.response };
  }
};