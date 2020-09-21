import React from "react";
/*import "../styles/App.css";
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";*/
import Text from "./components/Text/index";
import { Provider } from "react-redux";
import configStore from "./redux.js";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <Text />
    </Provider>
  );
}

export default App;
