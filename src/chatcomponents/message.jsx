import React from 'react';


export default function Message(props) {
    return (
          <li>
            <div className='sender'>{props.username}</div>
            <div className='message'><span>{props.text}</span></div>
          </li>
    );
}
