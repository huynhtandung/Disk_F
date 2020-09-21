import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
	return (
		<div>
      <p>You click {count} times</p>
      <p>Status {status ? 'true' : 'false'}</p>
      <p>Status {todos[0].text}</p>
      <button onClick = {() => {
        setCount(count + 1); setStatus(!status); setTodos([{text : 'Hooks is hard'}])}}
      >Click Me!</button>
    </div>
	);
}

export default App;
