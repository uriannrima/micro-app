import { createStore, Reducer } from "redux";

import { AppState } from "./types";
import rootReducer from "./reducer";

export default function(
  reducer: Reducer = rootReducer,
  initialState: AppState = { counter: 0 }
) {
  return createStore(reducer, initialState);
}
