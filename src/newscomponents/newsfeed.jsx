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
              {this.props.title.map(title =>
                  <li
                  className ='newsFeedTitles'
                  key={title.id}>
                    {title.title}
                    </li>
                  )}
          </ul>
        </div>
      </div>
    );
  }
}



