import React, { Component } from 'react';

export default class RoomList extends Component {
    render () {
        return (
            <div className="rooms-list">
                <ul>
                <h4>Your rooms:</h4>
                    {this.props.rooms.map(room => {
                        return (
                            <li key={room.id} className="room">
                                <a href="#"># {room.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
