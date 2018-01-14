import React from 'react';
import { connect } from 'react-redux';
import { signOut } from './state/auth';
import { Button } from 'react-bootstrap'

const SignOutButton = ({ shouldBeVisible, signOut}) => (
  shouldBeVisible &&
    <Button
      onClick={signOut}
      bsStyle="warning"
      bsSize="small"
    >
      Log Out
    </Button>
)

export default connect (
  state => ({
      shouldBeVisible: state.auth.data !== null
    }),
  dispatch => ({
      signOut: () => dispatch(signOut())
    })
  )

(SignOutButton);