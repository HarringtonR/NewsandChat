import React, { Component } from 'react';
import Message from './message.jsx';

export default class MessageList extends Component {
  render() {
    return (
      <ul className="MessageList">
      {this.props.messages.map((message, index) => {
        return (
          <Message key = {index} username = {message.senderId} text = {message.text}/>
          )
      })}
      </ul>
    );
  }
}
