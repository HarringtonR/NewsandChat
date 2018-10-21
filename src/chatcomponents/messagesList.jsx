import React, { Component } from 'react';
import ReactDOM from 'react-dom'
export default class MessageList extends Component {

   componentDidUpdate() {
        const scroll = ReactDOM.findDOMNode(this)
        scroll.scrollTop = scroll.scrollHeight
    }

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
