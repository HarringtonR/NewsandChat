import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const instanceLocator = 'v1:us1:74fe2f44-4b4c-4051-b60c-cdc56480a7cc'
const testToken = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/74fe2f44-4b4c-4051-b60c-cdc56480a7cc/token'
const username ='rsl1223'
const roomId = 18615624

ReactDOM.render(<App
    instanceLocator = { instanceLocator }
    testToken = { testToken }
    username = { username }
    roomId = { roomId }
  />
  , document.getElementById('root'));



/*
Tokens
Instance locator v1:us1:74fe2f44-4b4c-4051-b60c-cdc56480a7cc

secret key ddf05e0b-76d4-43fa-9b05-34ed20accd68:Ihq+YgVoy6FEkHT7scxTKAA8teU2H2vHmbNmq47HmDk=

test token https://us1.pusherplatform.io/services/chatkit_token_provider/v1/74fe2f44-4b4c-4051-b60c-cdc56480a7cc/token

rsl1223 is username

main room id
 Main
ID: 18593814
*/
