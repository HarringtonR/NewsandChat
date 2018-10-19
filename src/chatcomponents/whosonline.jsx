import React, { Component } from 'react';


export default class WhosOnline extends Component {
  render() {
    if(this.props.users) {
    return (
      <div>
      <h4>Users Online</h4>
      <ul>
      {this.props.users.map((user, index) => {
        return <li key={index}>{user.name } ({user.presence.state})</li>
      })}
     </ul>
     </div>
    );
  } else {
    return <p> Loading... </p>
    }
  }
}
