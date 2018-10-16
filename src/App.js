import React, { Component } from 'react';
import './App.css';
import MessagesList from './chatcomponents/messagesList.jsx'
import SendMessageForm from './chatcomponents/sendMessageForm.jsx'
import Title from './appcomponents/title.jsx'
import RoomList from './chatcomponents/roomlist.jsx'
import Chatkit from '@pusher/chatkit'
import NewsFeed from './newscomponents/newsfeed.jsx'
// import NewRoomForm from './components/NewRoomForm'

class App extends Component {
  constructor(){
      super()
      this.state = {
        messages: [],
        source: [],
        title: []
      }
      this.sendMessage = this.sendMessage.bind(this)
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
            this.currentUser.subscribeToRoom({
              roomId:18615624,
              hooks: {
                onNewMessage: message => {
                  this.setState({
                    messages : [...this.state.messages, message]
                  })
                }
              }
            })
          })
//news api
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=27d48c41e26a4f7ba585bd78401b7181')
        .then( res => res.json())
        .then( data => {
          let articles = data.articles
          this.setState(prevState => ({
            source:articles[0].source.id,
            title: articles
           }))
         })
        console.log(this.state.title)
       }



    sendMessage(text){
      this.currentUser.sendMessage({
        text,
        roomId:18615624
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
                <NewsFeed title = {this.state.title} />
              </div>
              <div className ='main'>
                 <div className ='roomlist'>
                   <RoomList />
                  </div>
                 <div className = 'messageBox'>
                   <MessagesList messages={this.state.messages}/>
                 </div>
              </div>
          </div>
            <SendMessageForm sendMessage = {(text) => this.sendMessage(text)}/>
      </div>
    );
  }
}

export default App;



