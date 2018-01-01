import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignIn } from './state/auth'
import { Grid, Row, Button, Form, FormGroup, ControlLabel, Col, FormControl } from 'react-bootstrap'

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

  // render() {
  //   return (
  //     <Grid>
  //       <Row className="show-grid">
  //         <Col xs={12} md={8}>
  //           <Form onSubmit={this.handleSubmit} horizontal>
  //             {this.props.auth.error && <p>{this.props.auth.error.message}</p>}
  //             <FormGroup controlId="formHorizontalEmail">
  //               <Col componentClass={ControlLabel} sm={2}>
  //                 Email
  //               </Col>
  //               <Col sm={10}>
  //                 <FormControl
  //                   type="email"
  //                   placeholder="Email"
  //                   onChange={this.handleChange}
  //                 />
  //               </Col>
  //             </FormGroup>
  //             <FormGroup controlId="formHorizontalPassword">
  //               <Col componentClass={ControlLabel} sm={2}>
  //                 Password
  //               </Col>
  //               <Col sm={10}>
  //                 <FormControl
  //                   type="password"
  //                   placeholder="Password"
  //                   onChange={this.handleChange}
  //                 />
  //               </Col>
  //             </FormGroup>
  //             <FormGroup>
  //               <Col smOffset={2} sm={10}>
  //                 <Button type="submit">
  //                   Sign in
  //                 </Button>
  //               </Col>
  //             </FormGroup>
  //           </Form>
  //         </Col>
  //       </Row>
  //     </Grid>
  //
  //   )
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <Button type="submit" bsStyle="primary">Sign in</Button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  SignIn: (email, password) => dispatch(SignIn(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signIn)