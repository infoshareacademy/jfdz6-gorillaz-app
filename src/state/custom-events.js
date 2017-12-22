import firebase from 'firebase'

const ADD = 'custom-events/ADD_EVENT'
const GET_SUCCESS = 'custom-events/GET_EVENTS_SUCCESS'
const REMOVE = 'custom-events/REMOVE_EVENT'

export const add = newEvent => ({
    type: ADD,
    newEvent
})

export const addEvent = newEvent => dispatch => {
    const userId = firebase.auth().currentUser.uid
    const newEventKey = firebase.database().ref(`users/${userId}/custom-events`).push().key

    firebase.database().ref(`/users/${userId}/custom-events/${newEventKey}`).set(
        newEvent
    ).then(
        dispatch(getCustomEvents())
    )
}

export const getCustomEvents = () => dispatch => {
    const userId = firebase.auth().currentUser.uid
    const customEventsRef = firebase.database().ref(`users/${userId}/custom-events`)

    customEventsRef.once('value').then(function (snapshot) {
        const arrayedCustomEvents = snapshot.val() ?
            Object.keys(snapshot.val()).reduce((arrayedEvents, event) => {
                    arrayedEvents.push(
                        {
                            id: event,
                            ...snapshot.val()[event]
                        }
                    )
                    return arrayedEvents
                },
                []
            ) :
            []

        dispatch({type: GET_SUCCESS, arrayedCustomEvents})
    })
}

export const remove = eventId => ({
    type: REMOVE,
    eventId
})

const initialState = []

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
        case GET_SUCCESS:
            return action.arrayedCustomEvents
        case REMOVE:
            return state.filter(event => event.id !== action.eventId)
        default:
            return state
    }
}
