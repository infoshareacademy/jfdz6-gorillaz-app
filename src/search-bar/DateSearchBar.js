import React from 'react'

import {years, months, getDaysForGivenMonth} from './date-data'
import DropdownList from './DropdownList'

export default class DateSearchBar extends React.Component {
    state = {
        year: '',
        month: '',
        day: '',
        currentDaysRange: getDaysForGivenMonth(1)
    }

    componentWillReceiveProps = newProps => {
        if(newProps.selectedDate) {
            const currentDaysRange = getDaysForGivenMonth(+newProps.selectedDate.getMonth() + 1)

            this.setState({
                year: +newProps.selectedDate.getFullYear(),
                month: +newProps.selectedDate.getMonth() + 1,
                day: +newProps.selectedDate.getDate(),
                currentDaysRange
            })
        }
    }

    setDatePart = (part, event) => {
        this.setState({
            [part]: +event.currentTarget.value
        })
        this.props.onRangeChange({...this.state, [part]: +event.currentTarget.value})
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

        !currentDaysRange.find(day => day.value === this.state.day) && this.setState({day: ''})
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
                    value={this.state.year}
                    onSelectChange={this.handleYearChange}
                    options={years}
                />

                Month:
                <DropdownList
                    value={this.state.month}
                    onSelectChange={this.handleMonthChange}
                    options={months}
                />

                Day:
                <DropdownList
                    value={this.state.day}
                    onSelectChange={this.handleDayChange}
                    options={this.state.currentDaysRange}
                />
            </div>
        )
    }
}