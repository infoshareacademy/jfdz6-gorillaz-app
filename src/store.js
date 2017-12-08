import { compose, createStore, combineReducers } from 'redux'
import persistState from 'redux-localstorage'
import { reducer as reduxFormReducer } from 'redux-form';

import contacts from './state/contacts'
import customEvents from './state/custom-events'
import nameDays from './state/name-days'
import otherHolidays from './state/other-holidays'
import publicMovableHolidays from './state/public-movable-holidays'
import publicNonMovableHolidays from './state/public-non-movable-holidays'

const reducer = combineReducers({
    form: reduxFormReducer,
    contacts,
    customEvents,
    nameDays,
    otherHolidays,
    publicMovableHolidays,
    publicNonMovableHolidays
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