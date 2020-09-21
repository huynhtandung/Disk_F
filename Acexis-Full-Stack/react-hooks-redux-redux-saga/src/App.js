import React from "react";
import configStore from "./redux/index";
import { Provider } from "react-redux";
import ListPage from "./pages/ListPage";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <ListPage />
    </Provider>
  );
}

export default App;
