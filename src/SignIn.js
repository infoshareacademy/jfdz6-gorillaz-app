import React, { Component } from 'react'
import firebase from 'firebase'

class SignUp extends Component {
  state = {
    login: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(
      this.state.login,
      this.state.password
    )
  }

  render(){
    return (
      <form onSubmit={this.hadnleSubmit}>
        Login:
        <input
          name="login"
          onChange={this.handleChange}
        />
        Password:
        <input
          name="password"
          type="password"
          onChange={this.handleChange}
        />
        <button>Sign in</button>
      </form>
    )
  }
}

export default SignUp