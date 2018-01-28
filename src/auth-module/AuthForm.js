import React, { Component } from 'react'
import { Grid, Row, Button, Form, FormGroup, ControlLabel, Col, FormControl } from 'react-bootstrap'

class AuthForm extends Component {
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
    this.props.handleSubmit(
      this.state.login,
      this.state.password
    )
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col smOffset={0} xs={12} mdOffset={1} md={8} lgOffset={2} lg={6}>
            <Form onSubmit={this.handleSubmit} horizontal>
              {
                this.props.error && <p>{this.props.error.message}</p>
              }
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  Email:
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="email"
                    placeholder="Email"
                    name="login"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" bsStyle={this.props.btnType ? this.props.btnType : "primary"} bsSize="large" block>
                    {this.props.label}
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default AuthForm