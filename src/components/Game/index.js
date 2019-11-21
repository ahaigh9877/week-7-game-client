import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";

class GameContainer extends Component {
  //   state = {
  //     player1: { name: "", points: null, choice: "" }
  //   };

  choose = playerChoice => {
    console.log("choice: ", playerChoice);
    //return this.setState({ choice: playerChoice });
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        <Game choose={this.choose} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { jwt: reduxState.loggedin.jwt, rooms: reduxState.rooms };
}

export default connect(mapStateToProps)(GameContainer);
