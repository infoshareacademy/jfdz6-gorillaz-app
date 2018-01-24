import firebase from 'firebase'
import {SubmissionError} from 'redux-form'

import {mapObjectToArrayData} from './_helpers'

const GET_BEGIN = 'contacts/GET_BEGIN'
const GET_SUCCESS = 'contacts/GET_SUCCESS'
const REMOVE_FAIL = 'contacts/REMOVE_FAIL'

export const addContact = newContact => (dispatch, getState) => {
    const userId = getState().auth.data.uid
    const newContactKey = firebase.database().ref(`users/${userId}/contacts`).push().key

    return firebase.database().ref(`/users/${userId}/contacts/${newContactKey}`).set({
        ...newContact,
        notes: newContact.notes || 'no data'
    })
        .then(() => console.log('contact has been added!'))
        .catch(() => {
            throw new SubmissionError({_error: 'submission failed'})
        })
}

let contactsRef = null
let listener = null

export const subscribeContacts = () => (dispatch, getState) => {
    dispatch({type: GET_BEGIN})

    const userId = getState().auth.data.uid
    contactsRef = firebase.database().ref(`users/${userId}/contacts`)

    listener = contactsRef.on('value', function (snapshot) {
        const objectData = snapshot.val()
        const data = objectData ? mapObjectToArrayData(objectData) : []

        dispatch({
            type: GET_SUCCESS,
            data
        })
    })
}

export const unsubscribeContacts = () => () => {
    contactsRef.off('value', listener)
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
        case REMOVE_FAIL:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
