import React from "react";
import configStore from "./redux";
import { Provider } from "react-redux";
import ListPage from "./pages/ListPage";
import TestPage from "./pages/TestPage";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <TestPage />
    </Provider>
  );
}

export default App;
