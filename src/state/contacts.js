import {contacts} from '../contacts/data/contacts'

const ADD = 'contacts/ADD_CONTACT'
const GET = 'contacts/GET_CONTACT'
const REMOVE = 'contacts/REMOVE_CONTACT'

export const add = newContact => ({
    type: ADD,
    newContact
})

export const get = () => ({
    type: GET
})

export const remove = contactId => ({
    type: REMOVE,
    contactId
})

const initialState = contacts

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD:
            return (
                [
                    ...state,
                    {
                        ...action.newContact,
                        id: Date.now()
                    }
                ]
            )
        case GET:
            return state
        case REMOVE:
            return state.filter(contact => contact.id !== action.contactId)
        default:
            return state
    }
}