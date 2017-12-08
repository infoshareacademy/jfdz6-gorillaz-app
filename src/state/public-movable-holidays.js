import {pubilcMovableHolidays} from '../events/data/public-movable-holidays'

const GET = 'public-movable-holidays/GET_HOLIDAYS'

export const get = () => ({
    type: GET
})

const initialState = pubilcMovableHolidays

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET:
            return state
        default:
            return state
    }
}