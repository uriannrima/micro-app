import { Reducer } from "redux";

import { AppState } from "./types";

const rootReducer: Reducer = (state: AppState, action): AppState => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
  }

  return state;
};

export default rootReducer;
