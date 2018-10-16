import React, { Component } from 'react';


export default class RoomList extends Component {
  render() {
    return (
      <div className="RoomList">
        <h4 className ='roomtitle'>RoomList</h4>
        <div className ='list'>
          <ul>
            <li>Group1</li>
            <li>Group2</li>
            <li>Group3</li>
            <li>Group4</li>
          </ul>
        </div>
      </div>
    );
  }
}
