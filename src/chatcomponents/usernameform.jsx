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
      <div>
        <form onSubmit ={(e) => this.onSubmit(e)}>
          <input type='text' placeholder='what is your username?' onChange={(e) => this.onChange(e)}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}
