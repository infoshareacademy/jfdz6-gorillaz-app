import moment from 'moment'

import {parseEvents} from './custom-events'
import {parseHolidays} from './holidays'

const SET_DATE = 'calendar-module/SET_DATE'
const SET_YEAR = 'calendar-module/SET_YEAR'
const SET_MONTH = 'calendar-module/SET_MONTH'
const SET_DAY = 'calendar-module/SET_DAY'
const SET_PHRASE = 'calendar-module/SET_PHRASE'

export const setDate = newDate => (dispatch, getState) => {
    const date = moment(newDate)
    const year = date.year()

    if (year !== getState().calendar.year) {
        dispatch(parseEvents(year))
        dispatch(parseHolidays(year))
    }

    dispatch({
        type: SET_DATE,
        year,
        month: date.month() + 1,
        day: date.date()
    })
}

export const setYear = year => (dispatch, getState) => {
    if (year !== getState().calendar.year) {
        dispatch(parseEvents(year))
        dispatch(parseHolidays(year))
    }
console.log(getState().calendar.year)
    dispatch({
        type: SET_YEAR,
        year
    })
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
    month: todayDate.month() + 1,
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
                month: action.month,
            }
        case SET_DAY:
            return {
                ...state,
                day: action.day,
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