import {customEvents} from '../events/data/custom-events'

const GET = 'custom-events/GET_EVENTS'

export const get = () => ({
    type: GET
})

const initialState = customEvents

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET:
            return state
        default:
            return state
    }
}