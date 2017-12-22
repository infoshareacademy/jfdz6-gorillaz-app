import firebase from 'firebase'

import {customEvents} from '../events/data/custom-events'

const ADD = 'custom-events/ADD_EVENT'
const GET = 'custom-events/GET_EVENTS'
const REMOVE = 'custom-events/REMOVE_EVENT'

export const add = newEvent => ({
    type: ADD,
    newEvent
})

export const addEvent = newEvent => dispatch => {
    const userId = firebase.auth().currentUser.uid
    const newEventKey = firebase.database().ref(`users/${userId}/custom-events`).push().key

    firebase.database().ref(`/users/${userId}/custom-events/${newEventKey}`).set(newEvent)
    dispatch(add(newEvent))
}

export const get = () => ({
    type: GET
})

export const remove = eventId => ({
    type: REMOVE,
    eventId
})

const initialState = customEvents

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD:
            return (
                [
                    ...state,
                    {
                        ...action.newEvent,
                        id: Date.now()
                    }
                ]
            )
        case GET:
            return state
        case REMOVE:
            return state.filter(event => event.id !== action.eventId)
        default:
            return state
    }
}
