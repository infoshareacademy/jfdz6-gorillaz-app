import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Container,
    FlexContainer,
    FlexBox
} from './styled-components/grid-components'
import './MainRouter.css'

import SignIn from './SignIn'
import SignUp from './SignUp'

class Auth extends Component {
  render(){
    return(
      <Container>
          <FlexBox>
      <div>
        {
          this.props.auth.data === null ?
            <div>
              <div>
                <h1>CUSTOMIZE YOUR CALENDAR!</h1>
                <p>Welcome on our website, where you can create your own calendar including customized base of occasions and events!</p>
                <p>If you are interested in more details -  <strong>sign in</strong> or <strong>sign up</strong> in order to see what we can offer in our Wish Generator!</p>
                <p>With Best Wishes - <strong>Gorillaz Team</strong></p>
              </div>
              <SignIn/>
              <SignUp/>
            </div>:
            this.props.children
        }
      </div>
          </FlexBox>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps
)(Auth)