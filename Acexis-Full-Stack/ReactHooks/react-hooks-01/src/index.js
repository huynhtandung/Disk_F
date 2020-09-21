import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lession04 from './lession04';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Lession04 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
