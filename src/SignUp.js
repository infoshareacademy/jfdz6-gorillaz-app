import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signUp} from './state/auth'
import {Grid, Row, Button, Form, FormGroup, ControlLabel, Col, FormControl} from 'react-bootstrap'

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
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Form onSubmit={this.handleSubmit} horizontal>
                            <p>{this.props.auth.data && this.props.auth.data.email}</p>
                            <p>{this.props.auth.error && this.props.auth.error.message}</p>
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
                                    <Button type="submit" bsStyle="danger" bsSize="large" block>
                                        Sign up
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

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    signUp: (email, password) => dispatch(signUp(email, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
