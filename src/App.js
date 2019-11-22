import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import WelcomePage from "./components/WelcomePage/";
import SignupContainer from "./components/Signup/";
import LoginContainer from "./components/Login/";
import Lobby from "./components/Lobby/";
import Room from "./components/Room";
import Url from "./components/consts";

class App extends React.Component {
  stream = new EventSource(`${Url}/stream`);

  // stream = new EventSource(
  //   "https://evening-fortress-04185.herokuapp.com/stream"
  // );

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;

      const parsed = JSON.parse(data);

      this.props.dispatch(parsed);
    };
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={WelcomePage} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/room/:name" component={Room} />
      </div>
    );
  }
}

export default connect()(App);
