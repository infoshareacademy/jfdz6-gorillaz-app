import React from 'react'

import {years, months, getDaysForGivenMonth} from './date-data'
import DropdownList from './DropdownList'

export default class DateSearchBar extends React.Component {
    handleYearChange = event => (
        this.props.onRangeChange('year', +event.currentTarget.value)
    )

    handleMonthChange = event => {
        const selectedMonthValue = +event.currentTarget.value
        const currentDaysRange = getDaysForGivenMonth(selectedMonthValue)
        const noSuchDay = !currentDaysRange.find(day => day.value === this.props.selectedDate.day)

        this.props.onRangeChange('month', selectedMonthValue, noSuchDay)
    }

    handleDayChange = event => (
        this.props.onRangeChange('day', +event.currentTarget.value)
    )

    render() {
        const {year, month, day} = this.props.selectedDate
        const currentDaysRange = getDaysForGivenMonth(month || 1)

        return (
            <div>
                <p>Search bar</p>

                Year:
                <DropdownList
                    value={year}
                    onSelectChange={this.handleYearChange}
                    options={years}
                />

                Month:
                <DropdownList
                    value={month}
                    onSelectChange={this.handleMonthChange}
                    options={months}
                />

                Day:
                <DropdownList
                    value={day}
                    onSelectChange={this.handleDayChange}
                    options={currentDaysRange}
                />
            </div>
        )
    }
}
