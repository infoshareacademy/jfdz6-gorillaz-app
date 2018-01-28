import firebase from 'firebase'
import {SubmissionError} from 'redux-form'

import {getParsedEvents} from '../calendar-module/_helpers/parsers'

const GET_BEGIN = 'custom-events/GET_BEGIN'
const GET_SUCCESS = 'custom-events/GET_SUCCESS'
const REMOVE_FAIL = 'custom-events/REMOVE_FAIL'
const PARSE = 'custom-events/PARSE'

export const addEvent = newEvent => (dispatch, getState) => {
    const userId = getState().auth.data.uid
    const newEventKey = firebase.database().ref(`users/${userId}/custom-events`).push().key

    return firebase.database().ref(`/users/${userId}/custom-events/${newEventKey}`).set({
        ...newEvent,
        payload: newEvent.payload || 'no data'
    })
        .then(() => console.log('event has been added!'))
        .catch(() => {throw new SubmissionError({_error: 'submission failed'})})
}
let customEventsRef = null
let listener = null
export const subscribeCustomEvents = () => (dispatch, getState) => {
    dispatch({type: GET_BEGIN})

    const userId = getState().auth.data.uid
    customEventsRef = firebase.database().ref(`users/${userId}/custom-events`)

    listener = customEventsRef.on('value', function (snapshot) {
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

export const unsubscribeCustomEvents = () => () => {
    customEventsRef.off('value', listener)
}

export const removeEvent = eventId => (dispatch, getState) => {
    const userId = getState().auth.data.uid

    firebase.database().ref(`/users/${userId}/custom-events/${eventId}`).remove()
        .then(
            console.log('event has been removed!')
        ).catch(error => dispatch({type: REMOVE_FAIL, error}))
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
        case REMOVE_FAIL:
            return {
                ...state,
                error: action.error
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
