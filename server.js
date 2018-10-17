const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('pusher-chatkit-server')

const app =express()

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:f57e51da-5b46-4422-ad29-9a16450cabc9',
  key: '065b96b2-fd3e-46c0-ad27-46939f4d1e94:pihTx977YvivIhQQczZWl74O8Az8xfhlbB2er+jKFiM=',
})


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const {username} = req.body
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
    }
  })
})

const PORT =3001
app.listen(PORT, err => {
  if(err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
