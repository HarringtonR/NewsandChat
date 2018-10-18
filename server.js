const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('pusher-chatkit-server')
//cors is cross origin resource sharing
const app =express()

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:74fe2f44-4b4c-4051-b60c-cdc56480a7cc',
  key: 'ddf05e0b-76d4-43fa-9b05-34ed20accd68:Ihq+YgVoy6FEkHT7scxTKAA8teU2H2vHmbNmq47HmDk='
})


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const { username } = req.body
  chatkit
  .createUser({
    name: username,
    id: username
  })
  .then(() => res.sendStatus(201))
  .catch(error => {
    if(error.error_type === 'services/chatkit/user_already_exists') {
      res.sendStatus(200)
    } else {
      res.status(error.statusCode).json(error)
      //don't totally understand the errors
    }
  })
})

//This is authenticating the user but i don't know how. Got it from a youtube video.
app.post('/authenticate', (req, res) => {
 const authData = chatkit.authenticate({ userId: req.query.user_id })
 res.status(authData.status).send(authData.body)
})
//port that server is running on
const PORT =3001
app.listen(PORT, err => {
  if(err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
