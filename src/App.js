import React, { Component } from 'react';
import './App.css';
import MessagesList from './chatcomponents/messagesList.jsx'
import SendMessageForm from './chatcomponents/sendMessageForm.jsx'
import Title from './appcomponents/title.jsx'
import RoomList from './chatcomponents/roomlist.jsx'
import Chatkit from '@pusher/chatkit'
import NewsFeed from './newscomponents/newsfeed.jsx'
import UsernameForm from './chatcomponents/usernameform.jsx'
// import NewRoomForm from './components/NewRoomForm'

class App extends Component {
  constructor(){
      super()
      this.state = {
        currentUsername: '',
        roomId: undefined,
        messages: [],
        source: [],
        title: [],
        joinableRooms: [],
        joinedRooms: []
      }
      this.sendMessage = this.sendMessage.bind(this)
      this.subscribeToRoom = this.subscribeToRoom.bind(this)
      this.getRooms = this.getRooms.bind(this)
    }

    onUsernameSubmitted(username){
      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username}),
      })
      .then(response => {
        this.setState({
          currentUsername: username
        })
        console.log('success')
      })
      .catch(error => {
        console.error(error)
      })
    }

    componentDidMount(){
      const chatManager = new Chatkit.ChatManager({
        instanceLocator: this.props.instanceLocator,
        userId: this.props.username,
        tokenProvider: new Chatkit.TokenProvider({
          url: this.props.testToken
        })
      })

//what is the deal with all the this user stuff?  Broadcasting messages
    chatManager.connect()
         .then(currentUser => {
            this.currentUser = currentUser
            this.getRooms()
          })
//news api
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=27d48c41e26a4f7ba585bd78401b7181')
        .then( res => res.json())
        .then( data => {
          let articles = data.articles
          this.setState(prevState => ({
            source:articles[0].source.id,
            title: articles
            // description: articles
           }))
         })
        // console.log(this.state.title)
       }

      getRooms(){
         this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
              this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
              })
            })
      }
     subscribeToRoom(roomId){
      this.setState({
        messages: []
      })
      this.currentUser.subscribeToRoom({
              roomId:roomId,
              hooks: {
                onNewMessage: message => {
                  this.setState({
                    messages : [...this.state.messages, message]
                  })
                }
              }
            })
      .then(room => {
        this.setState({
        roomId: room.id
      })
      this.getRooms()
     })
}
    sendMessage(text){
      this.currentUser.sendMessage({
        text,
        roomId: this.state.roomId
       }
     )
   }

  render() {
    // console.log('this.state.messages:', this.state.messages)
    return (
      <div className="App">
        <Title />
           <div className ='container'>
              <div className ='news'>
                <NewsFeed title = {this.state.title}/>
              </div>
              <div className ='main'>
                 <div className ='roomlist'>
                   <RoomList
                   subscribeToRoom = {this.subscribeToRoom}
                   rooms ={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                   />
                  </div>
                 <div className = 'messageBox'>
                   <MessagesList messages={this.state.messages}/>
                 </div>
              </div>
          </div>
            <SendMessageForm sendMessage = {(text) => this.sendMessage(text)}/>
            <UsernameForm onSubmit ={(username) => this.onUsernameSubmitted(username)}/>
      </div>
    );
  }
}

export default App;



