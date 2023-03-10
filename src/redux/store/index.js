import { legacy_createStore as createStore } from "redux";
import movieReducer from "../reducer/movieReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
export const store = createStore(
  movieReducer,
  // applyMiddleware(thunk)
  composeWithDevTools(applyMiddleware(thunk))
);
