import React from "react";

import styles from "./ReactModule.module.css";

function ReactModule(props: { name: string }): React.ReactElement {
  const handleClick = (): void => {
    alert("Hello from React!");
  };

  return (
    <div className={styles.App}>
      <h4 className={styles.Title}>Hello, {props.name}!</h4>
      <div className={styles.Body}>
        <span>This is a simple React App rendered by Hypernova.</span>
      </div>
      <div className={styles.Buttons}>
        <button onClick={handleClick}>Alert Me</button>
      </div>
    </div>
  );
}

export default ReactModule;
