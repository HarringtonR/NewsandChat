import React, { Component } from 'react';
import './App.css';
import Title from './appcomponents/title.jsx'
import NewsFeed from './newscomponents/newsfeed.jsx'
import UsernameForm from './chatcomponents/usernameform.jsx'
import Chatroom from './chatcomponents/chatroom.jsx'

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        source: [],
        title: [],
        currentRoom: 'WhatIsYourUsernameRoom',
        currentUsername: '',
      }
  }
 onUsernameSubmitted(username){
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username}),
    })
    .then(response => {
      this.setState({
        currentUsername: username,
        currentRoom: 'Chatroom',
      })
      console.log('success')
    })
    .catch(error => {
      console.error('error', error)
    })
  }
//whats console.error(error)
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=27d48c41e26a4f7ba585bd78401b7181')
      .then( res => res.json())
      .then( data => {
        let articles = data.articles
        this.setState(prevState => ({
          source:articles[0].source.id,
          title: articles
         }))
       })
  }

  render() {
    if(this.state.currentRoom === 'WhatIsYourUsernameRoom'){
      return (
      <div className="App">
        <Title />
           <div className ='container'>
              <div className ='news'>
                <NewsFeed title = {this.state.title}/>
              </div>
              <div className ='formAlign'>
                <UsernameForm onSubmit ={(username) => this.onUsernameSubmitted(username)}/>
              </div>
          </div>
      </div>
    );
    } else if (this.state.currentRoom === 'Chatroom') {
      return (
            <div className="App">
             <Title />
               <div className ='container'>
                 <div className ='news'>
                   <NewsFeed title = {this.state.title}/>
                 </div>
                  <Chatroom
                  currentUsername= {this.state.currentUsername}
                  returnLogin = {(e) => this.returnLogin(e)}
                  />
              </div>
            </div>
           )
       }
   }
}

export default App;



