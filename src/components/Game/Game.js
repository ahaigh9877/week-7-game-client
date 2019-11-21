import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  render() {
    return (
      <div id="gameWrapper">
        <div id="player1Score">Player1 score: </div>
        <div id="player2Score">Player2 score: </div>
        <div id="player1ChoiceImageWrapper">
          <img src="./mandril3.jpg" alt="choice 1" />
        </div>
        <div id="player2ChoiceImageWrapper">
          <img src="" alt="choice 2" />
        </div>
        <h1 id="choiceHeading">Make your choice</h1>
        <div id="choicesWrapper">
          <img
            onclick={this.props.choose(1)}
            src="./mandril3.jpg"
            alt="choice 1"
          />
          <img onclick={this.props.choose(2)} src="" alt="choice 2" />
          <img onclick={this.props.choose(3)} src="" alt="choice 3" />
        </div>
        <button id="choiceButton">CHOOSE!</button>
      </div>
    );
  }
}

export default Game;
