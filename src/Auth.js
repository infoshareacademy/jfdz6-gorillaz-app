import React, { component } from 'react'
import { connect } from 'react-redux'

import SignIn from './SignIn'

class Auth extends Component {
  render(){
    return(
      <div>
        {
          this.props.auth.data === null ?
            <SignIn/>:
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