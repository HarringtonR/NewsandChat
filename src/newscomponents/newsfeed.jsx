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
              {this.props.title.map((title, i)=>
                  <li
                  className ='newsFeedTitles'
                  key={i}
                  >
                    <h3 className ='articleTitles'>{title.title}</h3>
                    <p className ='articleDescriptions' >{title.description} </p>
                    </li>
                  )}
          </ul>
        </div>
      </div>
    );
  }
}



