import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import movieReducer from "../reducer/movieReducer";
export const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
