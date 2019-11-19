import React, { Component } from "react";
import { connect } from "react-redux";
import { newRoom } from "../../actions/rooms";
import Lobby from './Lobby'

class LobbyContainer extends Component {
  state = { name: ""};

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();

    this.props.newRoom(this.state.name);

    this.setState({
      name: "",
    });
  };
  render() {
    
    return (
      <Lobby
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        rooms={this.props.rooms}
      />
    );
  }
}

function mapStateToProps(state) {
  return { rooms: state.rooms };
}

const mapDispatchToProps = { newRoom };

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
