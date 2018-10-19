import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './messagesList.jsx'
import SendMessageForm from './sendMessageForm.jsx'
import WhosOnline from './whosonline.jsx'
import RoomList from './roomlist.jsx'

export default class Chatroom extends Component {
  constructor(props){
    super(props)
    this.state ={
      messages: [],
      currentRoom: {},
      currentUser: {},
      joinableRooms: [],
      joinedRooms: []
    }
  }

  componentDidMount(){
        const chatManager = new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:74fe2f44-4b4c-4051-b60c-cdc56480a7cc',
        userId: this.props.currentUsername,
        tokenProvider: new Chatkit.TokenProvider({
          url: `http://localhost:3001/authenticate`
        }),
      })

      chatManager
      .connect()
      .then(currentUser => {
        this.setState({
          currentUser: currentUser
           })

        this.state.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.state.currentUser.rooms
                })
            })
          return currentUser.subscribeToRoom({
            roomId: 18930144,
            messageLimit: 50,
            hooks: {
              onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
            //these are chatkit functions that are pre
            onUserCameOnline:() => this.forceUpdate(),
            onUserWentOffline:() => this.forceUpdate(),
            onUserJoined:() => this.forceUpdate()
           },
          })
        })
        .then(currentRoom => {
          this.setState({currentRoom})
        })
        //dont understand these catch errors
        .catch(error => console.log(error))
  }

      sendMessage(text){
      this.state.currentUser.sendMessage({
        roomId: this.state.currentRoom.id,
        text
       }
     )
   }

  render() {
    return (
      <div className='main'>
         <div className ='roomlist'>
           <WhosOnline users ={this.state.currentRoom.users} />
           <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
         </div>
         <div className = 'messageBox'>
           <MessageList
             messages= {this.state.messages}
             currentName = {this.props.username}
           />
            <SendMessageForm
             onSubmit ={(text) => this.sendMessage(text)}
            />
         </div>
     </div>
    );
  }
}

