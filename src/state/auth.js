import firebase from 'firebase'

const SET_USER = 'auth/SET_USER'
const ERROR = 'auth/ERROR'
const SIGN_OUT = 'auth/SIGN_OUT'

const initialState = {
  data: null,
  error: null
}

let unsuscribe = null
export const enableSync = () => dispatch => {
  dispatch(disableSync())
  unsuscribe = firebase.auth().onAuthStateChanged(
    user => {
      dispatch({ type: SET_USER, data: user})
    }
  )
}

export const disableSync = () => dispatch => {
  if (unsuscribe !== null) {
    unsuscribe()
  }
}

export const signUp = (email, password) => dispatch => {
  firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  ).catch(
    error => dispatch({ type: ERROR, error})
  )
}

export const signIn = (email, password) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(
    email,
    password
  ).catch(
    error => dispatch({ type: ERROR, error})
  )
}

export const signOut = () => dispatch => {
  firebase.auth().signOut().catch(
    error => dispatch({ type: ERROR, error })
  )
}

export default (state = initialState, action = {}) => {
  switch (action.type){
    case 'RESET':
      return {
        ...state,
        error: null
      }
    case SET_USER:
      return {
        ...state,
        data: action.data,
        error: null
      }
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    case SIGN_OUT:
      return initialState
    default:
      return state
  }
}