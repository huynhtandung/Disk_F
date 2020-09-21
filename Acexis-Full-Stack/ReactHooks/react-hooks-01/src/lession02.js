import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('Run')
		document.title = 'You click ' + count + ' time'
		return () => {
			console.log('Run2')
		}
	}, [count])
/*	useEffect(() => {
		console.log('Run 2')
	//	document.title = 'You click ' + count + ' time'
	})*/
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
