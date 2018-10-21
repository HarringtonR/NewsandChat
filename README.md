# Project Overview

## Project Schedule

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | In progress
|Day 4| Pseudocode / actual code | In progress
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| MVP | Incomplete
|Day 7| Present | Incomplete


## Project Description

News and Chat / NC will be a live stream of news and a live chat. On mobile they will run one on top of another. On a desktop they will be side by side.  The end goal be to link a story or news article to a specific chat in any way, be it by distance or a manual link. Using the google News API for news and Chatkit's API to power the chatroom.

- [ChatKit Api](https://pusher.com/chatkit)
- [Google News Api](https://newsapi.org/s/google-news-api)
- [Youtube tutorial used for logins and user online list](https://www.youtube.com/watch?v=6vcIW0CO07k&t=1024s)

## Wireframes

![alt text](https://imgur.com/9FfZ9El.jpg)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  
![alt text](https://imgur.com/TfD93YA.jpg)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Getting data from both News and Chat API's
- Render data on page and design layout
- Create login for chat
- Scrolling chat and news feed


#### PostMVP 

- Link news story to chat room
- Set news to stream
- Filter stories
- Filter by distance
- update news automatically

## React Architectural Design

![alt text](https://imgur.com/ZtUl7lQ.jpg)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App     | This will render the combined logic and branch off the main components. 
| Chat    | Chat will contain all logic for chat room |
| Message List | List of messages sent in chat |
| Message | Contains user Id and Message sent in chat |
| News    | Contains the google news api brains |
| News Form | Filter news if necessary |
| Header | This(if necessary) will contain the Nav |
| Footer | This(if necessary) will contain the Nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App/Logic | H | 7hrs| 10 | 15 |
| Chat API | H | 5hrs| 2 | 6 |
| Chat Build | H | 5hrs| 10 | 10|
| News API | H | 5hrs| 2 | 2 |
| MessageList| H | 2hrs| 5 |5 |
| News Feed| H | 2hrs| 3 | 3 |
| Chat Form | H | 5hrs| 3 | 5 |
| Server Build | H | 5hrs | 6 | 6|
| Total | H | 41hrs| N/A | 48 |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| onSubmit | Adding Chat to the screen and user name input | 
| onHover | Add borders to news stories | 
| onChange | For forms and messages | 
| componentDidMount | Used for both chat and news |


## Additional Libraries
- Chatkit

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  
-Getting both components to pull data/ mount when I wanted was tricky.  I had to grab data for the news first and then after the form for your name was filled out. Grab the chatkit api.

 componentDidMount(){
      const chatManager = new Chatkit.ChatManager({
        instanceLocator: this.props.instanceLocator,
        userId: this.props.username,
        tokenProvider: new Chatkit.TokenProvider({
          url: this.props.testToken
        })
      })


## Change Log
- Unable to link chats and had to change linking to a post MVP.

## Issues and Resolutions
- Token issues and user login issues -Not knowing I needed a server was a large delay. Server only required to handle additional users. Otherwise the rest can run on the chatkit api. -HUGH issue not using a log-in first. I was trying to mount a component with no user name and therefore chatkit would error out. I had to wait until a username was entered to start the chatkit.
- Making users unique cost me all of wednesday but have a functioning chatroom now. The issue was before I had both news and chat in my app componentDid mount.
This caused an issue when i wanted to create new users. I couldn't have a blank user when mounting and had to rebuild it with a form first. So when you entered your name. the chatroom would have a user asssigned instead of a blank name on mounting.
- Massive issues trying to setup multiple chatrooms. I hit my cutoff time of thursday night not being able to make multiple chat rooms and a FULLY functional chat. Chat still works but can't progress to linking them at this time.
- Focused on making it mobile at the end.

<!--#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
-->
