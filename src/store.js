import { compose, createStore, combineReducers } from 'redux'
import persistState from 'redux-localstorage'
import { reducer as reduxFormReducer } from 'redux-form';

const contactsReducer = (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.newContact]
        default:
            return state
    }
}

const reducer = combineReducers({
    form: reduxFormReducer,
    contacts: contactsReducer
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