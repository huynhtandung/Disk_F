import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
 
	useEffect(() => {
		console.log('Init ')
		return () => {
			console.log('Remove ')
		}
	}, [])

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
