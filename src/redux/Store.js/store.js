import thunk from "redux-thunk";
import reducers from "../Reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

const middleware = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
