import firebase from 'firebase'

const GET_BEGIN = 'contacts/GET_BEGIN'
const GET_SUCCESS = 'contacts/GET_SUCCESS'
const ADD_FAIL = 'contacts/ADD_FAIL'
const REMOVE_FAIL = 'contacts/REMOVE_FAIL'

export const addContact = newContact => (dispatch, getState) => {
    const userId = getState().auth.data.uid
    const newContactKey = firebase.database().ref(`users/${userId}/contacts`).push().key

    firebase.database().ref(`/users/${userId}/contacts/${newContactKey}`).set({
        ...newContact,
        notes: newContact.notes || 'no data'
    }).then(
        console.log('contact has been added!')
    ).catch(error => dispatch({type: ADD_FAIL, error}))
}

export const subscribeContacts = () => (dispatch, getState) => {
    dispatch({type: GET_BEGIN})

    const userId = getState().auth.data.uid
    const contactsRef = firebase.database().ref(`users/${userId}/contacts`)

    contactsRef.on('value', function (snapshot) {
        const data = snapshot.val() ?
            Object.keys(snapshot.val()).reduce((arrayedContacts, contactId) => {
                    arrayedContacts.push({
                        ...snapshot.val()[contactId],
                        id: contactId
                    })

                    return arrayedContacts
                },
                []) :
            []

        dispatch({
            type: GET_SUCCESS,
            data
        })
    })
}

export const unsubscribeContacts = () => (dispatch, getState) => {
    const userId = getState().auth.data.uid
    const contactsRef = firebase.database().ref(`users/${userId}/contacts`)

    contactsRef.off()
}

export const removeContact = contactId => (dispatch, getState) => {
    const userId = getState().auth.data.uid

    firebase.database().ref(`/users/${userId}/contacts/${contactId}`).remove()
        .then(
            console.log('contact has been removed!')
        ).catch(error => dispatch({type: REMOVE_FAIL, error}))
}

const initialState = {
    data: [],
    getting: false,
    error: null
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_BEGIN:
            return {
                ...state,
                getting: true,
                error: null
            }
        case GET_SUCCESS:
            return {
                ...state,
                data: action.data,
                getting: false
            }
        case ADD_FAIL:
            return {
                ...state,
                error: action.error
            }
        case REMOVE_FAIL:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
