import React from "react";

function MyComponent(props: { name: string }): React.ReactElement {
  const style = {
    backgroundColor: "red",
    color: "white",
    padding: '1em'
  };

  return <div style={style}>Hello, {props.name} from React!</div>;
}

export default MyComponent;
