import React, { Component } from "react";
import { connect } from "react-redux";
import { newRoom } from "../../actions/rooms";
import Lobby from './Lobby'
import {getUsers} from '../../actions/users'

class LobbyContainer extends Component {
  state = { name: ""};
  componentDidMount() {
    this.props.getUsers();
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.newRoom(this.state.name);

    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <Lobby
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        rooms={this.props.rooms}
        users={this.props.users}
      />
    );
  }
}

function mapStateToProps(state) {
  return { rooms: state.rooms, users: state.users };
}

const mapDispatchToProps = { newRoom, getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
