import React from "react";
import { connect } from "react-redux";

class Room extends React.Component {
  render(){
    const { name } = this.props.match.params
    return <div>
      <h1>{name}</h1>
      <button>Join</button>
    </div>
  }
}

export default connect()(Room)