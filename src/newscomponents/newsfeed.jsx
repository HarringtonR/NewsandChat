import React, { Component } from 'react';

export default class NewsFeed extends Component {
  constructor(props){
   super(props)
    this.state = {
      room: 'newsFeed',
      url: ''
    }
  }

 createRoom(){
  this.setState({
    room: 'story',
    })
   }


   newsFeed(){
  this.setState({
    room: 'newsFeed'
  })
  }


  render() {
    if(this.state.room === 'newsFeed'){
    return (
      <div>
      <div className ='newstitle'>
         <h3>NewsFeed</h3>
        </div>
      <div className="NewsFeed">
        <div className='newsArticles'>
          <ul>
              {this.props.title.map((title, i)=>
                  <li
                  onClick ={() => this.createRoom(
                    this.setState({
                      url: title.url
                    }))}
                  className ='newsFeedTitles center'
                  key={i}
                  >
                    <h3 className ='articleTitles'>{title.title}</h3>
                    <p className ='articleDescriptions' >{title.description} </p>
                    </li>
                  )}
          </ul>
        </div>
      </div>
      </div>
    )
  } else if (this.state.room === 'story'){
    return (
       <div className="NewsFeed">
       <div className ='newstitle'>
         <h3>NewsFeed</h3>
        </div>
        <div className='newsArticles'>
          <div>
          <button   onClick ={() => this.newsFeed()}> Back</button>
             <iframe src={this.state.url} title ='newsSite'></iframe>
          </div>
        </div>
      </div>
     )
   }
 }
}



