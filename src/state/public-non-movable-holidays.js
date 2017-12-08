import {pubilcNonMovableHolidays} from '../events/data/public-non-movable-holidays'

const GET = 'public-non-movable-holidays/GET_HOLIDAYS'

export const get = () => ({
    type: GET
})

const initialState = pubilcNonMovableHolidays

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET:
            return state
        default:
            return state
    }
}