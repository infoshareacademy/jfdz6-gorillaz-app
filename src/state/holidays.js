const GET_BEGIN = 'holidays/GET_BEGIN'
const GET_SUCCESS = 'holidays/GET_SUCCESS'
const GET_FAIL = 'holidays/GET_FAIL'

export const getHolidays = () => dispatch => {
    dispatch({type: GET_BEGIN})
    fetch(
        'http://jfdz6-gorillaz-app.getsandbox.com/holidays'
    ).then(
        response => response.json()
    ).then(
        data => dispatch({type: GET_SUCCESS, data})
    ).catch(
        error => dispatch({type: GET_FAIL, error})
    )
}

const initialState = {
    data: null,
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
                getting: false
            }
        case GET_FAIL:
            return {
                ...state,
                getting: false,
                error: action.error
            }
        default:
            return state
    }
}