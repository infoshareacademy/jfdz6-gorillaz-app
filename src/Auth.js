import React, { Component } from 'react'
import { connect } from 'react-redux'

import SignIn from './SignIn'
import SignUp from './SignUp'

class Auth extends Component {
  render(){
    return(
      <div>
        {
          this.props.auth.data === null ?
            <div>
              <div>
                <h1>MAKE A WISH COME TRUE!</h1>
                <p>Welcome on our website, where you can generate wishes for number of occasions, including the ones you are adding to your own calendar!</p>
                <p>There are plenty of options you may choice - sending personalized wishes to whoever you wish! Adding special occassions for special people! On the top of that, you may customize your own calendar! And much more!</p>
                <p>If you are interested in more details -  <strong>sign in</strong> or <strong>sign up</strong> in order to see what we can offer in our Wish Generator!</p>
                <p>With Best Wishes - <strong>Gorillaz Team</strong></p>
              </div>
              <SignIn/>
              <SignUp/>
            </div>:
            this.props.children
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps
)(Auth)