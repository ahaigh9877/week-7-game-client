import React, { Component } from "react";
import Game from "./Game";

class GameContainer extends Component {
  state = {
    player1: { name: "", points: null, choice: "" }
  };

  choose = choice => {
    switch (choice) {
      case 1: {
        return;
      }
      case 2: {
        return;
      }
      case 3: {
        return;
      }
      default: {
        break;
      }
    }
  };

  async componentDidMount() {}
  render() {
    return (
      <div>
        <Game choose={this.choose} />
      </div>
    );
  }
}

export default GameContainer;
