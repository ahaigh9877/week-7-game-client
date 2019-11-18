import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import SignupContainer from "./components/Signup/";
import LoginContainer from "./components/Login/";
import WelcomePage from "./components/WelcomePage/";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={WelcomePage} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
      </div>
    </Provider>
  );
}

export default App;
