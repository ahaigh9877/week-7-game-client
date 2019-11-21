import React, { Component } from "react";
import "./Game.css";
import paper from "../../images/paper.png";
import rock from "../../images/rock.png";
import scissors from "../../images/scissors.png";
import questionMark from "../../images/question.png";

class Game extends Component {
  render() {
    return (
      <div id="gameWrapper">
        <div id="player1Score">Player1 score: </div>
        <div id="player2Score">Player2 score: </div>
        <div id="player1ChoiceImageWrapper">
          <img className="questionMark" src={questionMark} alt="choice 1" />
        </div>
        <div id="player2ChoiceImageWrapper">
          <img className="questionMark" src={questionMark} alt="choice 2" />
        </div>
        <h1 id="choiceHeading">Make your choice</h1>
        <div id="choicesWrapper">
          <button className="selectButton" onClick={this.props.choose("rock")}>
            <img className="choiceImg" src={paper} alt="choice 1" />
          </button>
          <button className="selectButton" onClick={this.props.choose("paper")}>
            <img className="choiceImg" src={rock} alt="choice 2" />
          </button>
          <button
            className="selectButton"
            onClick={this.props.choose("scissors")}
          >
            <img className="choiceImg" src={scissors} alt="choice 3" />
          </button>
        </div>
        <button id="chooseButton">CHOOSE!</button>
      </div>
    );
  }
}

export default Game;
