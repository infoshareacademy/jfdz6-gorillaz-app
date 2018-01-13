import React from 'react';
import { connect } from 'react-redux';
import { signOut } from './state/auth';

const SignOutButton = ({ shouldBeVisible, signOut}) => (
  shouldBeVisible &&
    <button
      onClick={signOut}
    >
    </button>
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