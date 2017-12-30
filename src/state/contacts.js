import firebase from 'firebase'

const GET_SUCCESS = 'contacts/GET_SUCCESS'

export const addContact = newContact => dispatch => {
    const userId = firebase.auth().currentUser.uid
    const newContactKey = firebase.database().ref(`users/${userId}/contacts`).push().key

    firebase.database().ref(`/users/${userId}/contacts/${newContactKey}`).set({
        ...newContact,
        notes: newContact.notes || 'no data'
    })
}

export const subscribeContacts = () => (dispatch, getState) => {
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

export const removeContact = contactId => dispatch => {
    const userId = firebase.auth().currentUser.uid

    firebase.database().ref(`/users/${userId}/contacts/${contactId}`).remove()
}

const initialState = []

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_SUCCESS:
            return action.data
        default:
            return state
    }
}
