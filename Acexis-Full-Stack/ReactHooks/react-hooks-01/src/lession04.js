import React, { useState, useEffect, useContext } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const value = useContext("v");

  useEffect(() => {
    console.log("Init " + value);
    return () => {
      console.log("Remove ");
    };
  });

  return (
    <div>
      <p>You click {count} times</p>
      <button
        onClick={() => {
          count !== 6 && setCount(count + 1);
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;
