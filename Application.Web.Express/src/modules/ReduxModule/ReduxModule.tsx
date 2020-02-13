import React from "react";
import { Provider, useDispatch, useSelector, shallowEqual } from "react-redux";

import createStore from "./store";

import styles from "./ReduxModule.module.css";
import { AppState } from "./store/types";

const store = createStore();

const useCounter = () => {
  const counter = useSelector<AppState, number>(
    state => state.counter,
    shallowEqual
  );

  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return { counter, increment, decrement };
};

function ReduxCard() {
  const { counter, increment, decrement } = useCounter();

  return (
    <div className={styles.App}>
      <h4 className={styles.Title}>Counter {counter}</h4>
      <div className={styles.Body}>
        <span>
          This is a simple React App with Redux rendered by Hypernova.
        </span>
      </div>
      <div className={styles.Buttons}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

function ReduxModule(): React.ReactElement {
  return (
    <Provider store={store}>
      <ReduxCard />
    </Provider>
  );
}

export default ReduxModule;
