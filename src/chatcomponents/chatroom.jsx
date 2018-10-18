import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './messagesList.jsx'
import SendMessageForm from './sendMessageForm.jsx'

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
          url: `http://localhost:3001/authenticate`
        }),
      })

      chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        console.log(currentUser)
          return currentUser.subscribeToRoom({
            roomId: 18843156,
            messageLimit: 50,
            hooks: {
              onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
           },
          })
        })
        .then(currentRoom => {
          this.setState({currentRoom})
        })
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

