import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './messagesList.jsx'
import SendMessageForm from './sendMessageForm.jsx'
import WhosOnline from './whosonline.jsx'

export default class Chatroom extends Component {
  constructor(props){
    super(props)
    this.state ={
      messages: [],
      currentRoom: {},
      currentUser: {}
    }
  }

  componentDidMount(){
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:74fe2f44-4b4c-4051-b60c-cdc56480a7cc',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: `/authenticate`
      }),
    })

    chatManager
    .connect()
    .then(currentUser => {
      this.setState({
        currentUser: currentUser
         })
        return currentUser.subscribeToRoom({
          roomId: 19373347,
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
   })
  }


  render() {
    const  location = window.location
    return (
      <div className = 'chatbox'>
        <div className ='chatTitle'>
           <h3 className='chatroom'>Chatroom</h3>
           <button onClick ={() => location.reload()}> Return to Login </button>
        </div>
        <div className='main'>
          <div className = 'messageBox'>
            <MessageList
              messages= {this.state.messages}
              currentName = {this.props.username}
            />
            <SendMessageForm
              onSubmit ={(text) => this.sendMessage(text)}
            />
          </div>
          <div className ='roomlist'>
            <WhosOnline users ={this.state.currentRoom.users} />
          </div>
        </div>
      </div>
    );
  }
}

