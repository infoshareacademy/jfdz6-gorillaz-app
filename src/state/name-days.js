import {nameDays} from '../events/data/name-days'

const GET = 'name-days/GET_HOLIDAYS'

export const get = () => ({
    type: GET
})

const initialState = nameDays

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET:
            return state
        default:
            return state
    }
}