import moment from 'moment'

import {parseEvents} from './custom-events'
import {parseHolidays} from './holidays'

const SET_DATE = 'calendar/SET_DATE'
const SET_YEAR = 'calendar/SET_YEAR'
const SET_MONTH = 'calendar/SET_MONTH'
const SET_DAY = 'calendar/SET_DAY'
const SET_PHRASE = 'calendar/SET_PHRASE'

export const setDate = date => (dispatch, getState) => {
    const date = moment(date)
    const year = date.year()

    dispatch({
        type: SET_DATE,
        year,
        month: date.month(),
        day: date.date()
    })

    if (year !== getState().calendar.year) {
        dispatch(parseEvents(year))
        dispatch(parseHolidays(year))
    }
}

export const setYear = year => (dispatch, getState) => {
    dispatch({
        type: SET_YEAR,
        year
    })

    if (year !== getState().calendar.year) {
        dispatch(parseEvents(year))
        dispatch(parseHolidays(year))
    }
}

export const setMonth = month => ({
    type: SET_MONTH,
    month
})

export const setDay = day => ({
    type: SET_DAY,
    day
})

export const setPhrase = phrase => ({
    type: SET_PHRASE,
    phrase
})

const todayDate = moment()

const initialState = {
    year: todayDate.year(),
    month: todayDate.month(),
    day: todayDate.date(),
    phrase: ''
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                year: action.year,
                month: action.month,
                day: action.day
            }
        case SET_YEAR:
            return {
                ...state,
                year: action.year,
            }
        case SET_MONTH:
            return {
                ...state,
                year: action.year,
            }
        case SET_DAY:
            return {
                ...state,
                year: action.year,
            }
        case SET_PHRASE:
            return {
                ...state,
                phrase: action.phrase
            }
        default:
            return state
    }
}