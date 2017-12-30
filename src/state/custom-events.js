import firebase from 'firebase'

import {getParsedEvents} from '../calendar/parsers'

const GET_BEGIN = 'custom-events/GET_BEGIN'
const GET_SUCCESS = 'custom-events/GET_SUCCESS'
const GET_FAIL = 'custom-events/GET_FAIL'
const PARSE = 'custom-events/PARSE'

export const addEvent = newEvent => dispatch => {
    const userId = firebase.auth().currentUser.uid
    const newEventKey = firebase.database().ref(`users/${userId}/custom-events`).push().key

    firebase.database().ref(`/users/${userId}/custom-events/${newEventKey}`).set({
        ...newEvent,
        payload: newEvent.payload || 'no data'
    })
}

export const subscribeCustomEvents = () => (dispatch, getState) => {
    dispatch({type: GET_BEGIN})

    const userId = getState().auth.data.uid
    const customEventsRef = firebase.database().ref(`users/${userId}/custom-events`)

    customEventsRef.on('value', function (snapshot) {
        const data = snapshot.val() ?
            Object.keys(snapshot.val()).reduce((arrayedEvents, eventId) => {
                    arrayedEvents.push({
                        ...snapshot.val()[eventId],
                        id: eventId
                    })

                    return arrayedEvents
                },
                []) :
            []

        dispatch({
            type: GET_SUCCESS,
            data,
            parsedData: getParsedEvents(data, getState().calendar.year)
        })
    })
}

export const unsubscribeCustomEvents = () => (dispatch, getState) => {
    const userId = getState().auth.data.uid
    const customEventsRef = firebase.database().ref(`users/${userId}/custom-events`)

    customEventsRef.off()
}

export const removeEvent = eventId => dispatch => {
    const userId = firebase.auth().currentUser.uid

    firebase.database().ref(`/users/${userId}/custom-events/${eventId}`).remove()
}

export const parseEvents = year => ({
    type: PARSE,
    year
})

const initialState = {
    data: null,
    parsedData: [],
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
                parsedData: action.parsedData,
                getting: false
            }
        case PARSE:
            return {
                ...state,
                parsedData: getParsedEvents(state.data, action.year)
            }
        default:
            return state
    }
}
