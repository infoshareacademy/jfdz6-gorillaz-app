import React from 'react'

import {years, months, getDaysForGivenMonth} from './date-data'
import DropdownList from './DropdownList'

export default class DateSearchBar extends React.Component {
    state = {
        year: null,
        month: null,
        day: null,
        currentDaysRange: getDaysForGivenMonth(1)
    }

    setDatePart = (part, event) => {
        this.setState({
            [part]: +event.currentTarget.value
        })
    }

    handleYearChange = event => (
        this.setDatePart('year', event)
    )

    handleMonthChange = event => {
        const currentDaysRange = getDaysForGivenMonth(event.currentTarget.value)

        this.setDatePart('month', event)
        this.setState({
            currentDaysRange
        })

        !currentDaysRange.find(day => day.value === this.state.day) && this.setState({day: null})
    }

    handleDayChange = event => (
        this.setDatePart('day', event)
    )

    render() {
        return (
            <div>
                <p>Search bar</p>

                Year:
                <DropdownList
                    onSelectChange={this.handleYearChange}
                    options={years}
                />

                Month:
                <DropdownList
                    onSelectChange={this.handleMonthChange}
                    options={months}
                />

                Day:
                <DropdownList
                    onSelectChange={this.handleDayChange}
                    options={this.state.currentDaysRange}
                />
            </div>
        )
    }
}