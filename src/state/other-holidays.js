import {otherHolidays} from '../events/data/other-holidays'

const GET = 'other-holidays/GET_HOLIDAYS'

export const get = () => ({
    type: GET
})

const initialState = otherHolidays

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET:
            return state
        default:
            return state
    }
}