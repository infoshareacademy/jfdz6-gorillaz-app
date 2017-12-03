const ADD = 'contacts/ADD_CONTACT'

export const add = newContact => ({
    type: ADD,
    newContact
})

const initialState = []

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD:
            return [...state, action.newContact]
        default:
            return state
    }
}