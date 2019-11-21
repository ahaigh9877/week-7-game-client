import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import superagent from 'superagent'

class GameContainer extends Component {
    state = {
      choice: "" 
    };

  choose = playerChoice => {
    console.log(playerChoice)
    this.setState({ choice: playerChoice})
  };
  setChoice = async () => {
    const choice = this.state.choice
    console.log('i was chosen')
    const { username, jwt } = this.props.loggedin;

    await superagent
      // .put(`https://evening-fortress-04185.herokuapp.com/join/${name}`)
      .put(`http://localhost:4000/game/${username}/${choice}`)
      .set({ authorization: `Bearer ${jwt}` })
      .send(choice)
    }
  
 
  render() {
    return (
      <div>
        <Game 
          choose={this.choose}
          rooms={this.props.rooms}
          loggedin={this.props.loggedin}
          match={this.props.match}
          setChoice={this.setChoice}
          />
      </div>
    );
  }
}


function mapStateToProps(reduxState) {
  return { loggedin: reduxState.loggedin, rooms: reduxState.rooms };
}

export default connect(mapStateToProps)(GameContainer);
