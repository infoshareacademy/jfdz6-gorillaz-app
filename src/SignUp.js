import React, {Component} from 'react'
import { coonnect } from 'react-redux'
import { signUp } from './state/auth'

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
    this.props.signUp(
      this.state.login,
      this.state.password
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.props.auth.data && this.props.auth.data.email}</p>
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
        <button>Sign up</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  signUp: (email, password) => dispatch(signUp(email,password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)