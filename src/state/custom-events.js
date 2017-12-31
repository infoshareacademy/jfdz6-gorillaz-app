import firebase from 'firebase'

import {getParsedEvents} from '../calendar-module/_helpers/parsers'

const GET_BEGIN = 'custom-events/GET_BEGIN'
const GET_SUCCESS = 'custom-events/GET_SUCCESS'
const ADD_FAIL = 'custom-events/ADD_FAIL'
const REMOVE_FAIL = 'custom-events/REMOVE_FAIL'
const PARSE = 'custom-events/PARSE'

export const addEvent = newEvent => (dispatch, getState) => {
    const userId = getState().auth.data.uid
    const newEventKey = firebase.database().ref(`users/${userId}/custom-events`).push().key

    firebase.database().ref(`/users/${userId}/custom-events/${newEventKey}`).set({
        ...newEvent,
        payload: newEvent.payload || 'no data'
    }).then(
        console.log('event has been added!')
    ).catch(error => dispatch({type: ADD_FAIL, error}))
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
        case PARSE:
            return {
                ...state,
                parsedData: getParsedEvents(state.data, action.year)
            }
        default:
            return state
    }
}
