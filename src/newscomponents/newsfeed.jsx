import React, { Component } from 'react';

export default class NewsFeed extends Component {
  render() {
    return (
      <div className="NewsFeed">
       <div className ='newstitle'>
         <h3>NewsFeed</h3>
        </div>
        <div className='newsArticles'>
          <ul>
            <li className='articleSource'>{this.props.source}</li>
            <li className='articleTitle'>{this.props.title}</li>
          </ul>
        </div>
      </div>
    );
  }
}



