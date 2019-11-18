import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import SignupContainer from "./components/SignupContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">Hello world</div>;
      <SignupContainer />
    </Provider>
  );
}

export default App;
