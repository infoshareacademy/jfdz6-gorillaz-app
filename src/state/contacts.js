export default (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.newContact]
        default:
            return state
    }
}