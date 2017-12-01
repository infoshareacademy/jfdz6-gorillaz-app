import { createStore, combineReducers } from 'redux';
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
});
const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);

export default store;