import React, { Component } from 'react';


export default class SendMessageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: ''
    }
  }

  handleChange(e){
    // console.log(e.target.value)
    this.setState({
      message: e.target.value
    })
  }

handleSubmit(e){
  e.preventDefault()
  this.props.sendMessage(this.state.message)
  this.setState({
    message: ''
  })
}
  render() {
    // console.log(this.state.message)
    return (
      <div className="MessageForm">
        <form
        onSubmit ={(e)=> this.handleSubmit(e)}
        className ='SendMessageForm'>
            <input
            value = {this.state.message}
            onChange ={(e) => this.handleChange(e)}
            className= 'inputs'
            placeholder ='Type your message here and hit ENTER' type='text'/>
        </form>
      </div>
    );
  }
}
