import React from "react";

// import "./ReactModule.css";
import styles from "./ReactModule.module.css";

function ReactModule(props: { name: string }): React.ReactElement {
  const handleClick = (): void => {
    alert("Hello from React!");
  };

  return (
    <div className={styles.ReactModule}>
      Hello, {props.name} from React!
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ReactModule;
