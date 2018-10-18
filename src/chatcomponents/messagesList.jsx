import React, { Component } from 'react';

export default class MessageList extends Component {
  render() {
    return (
      <ul className="MessageList">
      {this.props.messages.map((message, index) =>
          (
            <li key={index}>
             <div>
               <p className='sender'>{message.senderId}</p>
               </div>
               <p className='message'><span>{message.text}</span></p>
            </li>
          )
      )}
      </ul>
    );
  }
}
