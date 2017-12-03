import { compose, createStore, combineReducers } from 'redux'
import persistState from 'redux-localstorage'
import { reducer as reduxFormReducer } from 'redux-form';

import contacts from './state/contacts'

const reducer = combineReducers({
    form: reduxFormReducer,
    contacts
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    persistState([])
)

const store = createStore(
    reducer,
    enhancer
)

export default store