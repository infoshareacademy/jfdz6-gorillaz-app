import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import { reducer as reduxFormReducer } from 'redux-form';

import contacts from './state/contacts'
import customEvents from './state/custom-events'
import holidays from './state/holidays'

const reducer = combineReducers({
    form: reduxFormReducer,
    contacts,
    customEvents,
    holidays
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    persistState([])
)

const store = createStore(
    reducer,
    enhancer
)

export default store