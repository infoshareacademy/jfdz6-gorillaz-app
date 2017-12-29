import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import { reducer as reduxFormReducer } from 'redux-form';
import firebase from 'firebase'

import auth from './state/auth'
import contacts from './state/contacts'
import customEvents from './state/custom-events'
import holidays from './state/holidays'

const config = {
  apiKey: "AIzaSyC4j75g_NETl374jKo_KDbETITmzcGxYMs",
  authDomain: "gorillaz-b1166.firebaseapp.com",
  databaseURL: "https://gorillaz-b1166.firebaseio.com",
  projectId: "gorillaz-b1166",
  storageBucket: "gorillaz-b1166.appspot.com",
  messagingSenderId: "699741243303"
};
firebase.initializeApp(config);

const reducer = combineReducers({
    form: reduxFormReducer,
    auth,
    contacts,
    customEvents,
    holidays
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    persistState(['auth'])
)

const store = createStore(
    reducer,
    enhancer
)

store.dispatch({ type: 'RESET'})

export default store