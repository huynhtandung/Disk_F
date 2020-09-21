import React, { useState, useCallback } from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";
import Context from "./components/UseContext";
import ReactMemo from "./components/ReactMemo";
import Reducer from "./components/UseReducer";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("React memo component is not rendered");
    setCount(count + 1);
  };
  const memoFuc = useCallback(() => {}, []);
  return (
    <div className="App">
      {/*<Clock />
      <ColorBox />
      <TodoList />
      <Context />
      <ReactMemo name="dhuynh" func={memoFuc} />
      <div>{count}</div>
      <button onClick={() => handleClick()}>Increase</button>*/}
      <Reducer initialCount={10} />
    </div>
  );
}

export default App;
