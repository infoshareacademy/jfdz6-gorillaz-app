const ADD = 'contacts/ADD_CONTACT'
const REMOVE = 'contacts/REMOVE_CONTACT'

export const add = newContact => ({
    type: ADD,
    newContact
})

export const remove = contactId => ({
    type: REMOVE,
    contactId
})

const initialState = []

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD:
            return [...state, action.newContact]
        case REMOVE:
            return (state.filter(
                    contact => contact.id !== action.contactId
                )
            )
        default:
            return state
    }
}