import React, { Component } from 'react';

export default class UsernameForm extends Component {
  constructor(props){
  super(props)
  this.state = {
    username: ''
  }
}

onChange(e){
  this.setState({
    username: e.target.value
  })

}

onSubmit(e){
  e.preventDefault()
  this.props.onSubmit(this.state.username)
}

  render() {
    return (
      <div  className ='usernameForm'>
        <form onSubmit ={(e) => this.onSubmit(e)}>
          <input
          className = 'inputNameForm'
          type='text'
          placeholder='Enter name to join chat....'
          onChange={(e) => this.onChange(e)}
          />
          <input
          className = 'inputNameSubmit'
          type='submit'/>
        </form>
      </div>
    );
  }
}
