import firebase from 'firebase'

import {getParsedEvents} from '../calendar/parsers'

const GET_SUCCESS = 'custom-events/GET_SUCCESS'
const PARSE = 'custom-events/PARSE'

export const addEvent = newEvent => dispatch => {
    const userId = firebase.auth().currentUser.uid
    const newEventKey = firebase.database().ref(`users/${userId}/custom-events`).push().key

    firebase.database().ref(`/users/${userId}/custom-events/${newEventKey}`).set(newEvent)
}

export const subscribeCustomEvents = () => dispatch => {
    const userId = firebase.auth().currentUser.uid
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
            parsedData: getParsedEvents(data, (new Date()).getFullYear())
        })
    })
}

export const unsubscribeCustomEvents = () => dispatch => {
    const userId = firebase.auth().currentUser.uid
    const customEventsRef = firebase.database().ref(`users/${userId}/custom-events`)

    customEventsRef.off()
}

export const updateEvent = (newEvent, eventId) => dispatch => {
    const userId = firebase.auth().currentUser.uid
    const newEventKey = firebase.database().ref(`users/${userId}/custom-events`).push().key

    firebase.database().ref(`/users/${userId}/custom-events/${newEventKey}`).set(newEvent).then(
        dispatch(removeEvent(eventId))
    )
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
    parsedData: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_SUCCESS:
            return {
                ...state,
                data: action.data,
                parsedData: action.parsedData,
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
