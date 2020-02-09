import React from "react";

function MyComponent(props: { name: string }): React.ReactElement {
  const style = {
    backgroundColor: "blue",
    color: "white",
    padding: "1em"
  };

  const handleClick = (): void => {
    alert("Hello from React!");
  };

  return (
    <div style={style}>
      Hello, {props.name} from React!
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
