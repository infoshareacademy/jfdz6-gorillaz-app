import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignIn } from './state/auth'

class signIn extends Component {
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
    this.props.SignIn(
      this.state.login,
      this.state.password
    )
  }

  render(){
    return (
      <form onSubmit={this.hadnleSubmit}>
        {
          this.props.auth.error && <p>{this.props.auth.error.message}</p>
        }
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

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  SignIn: (email, password) => dispatch(SignIn(email,password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signIn)