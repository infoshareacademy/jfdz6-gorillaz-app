import React from 'react'
import {
    Form,
    FormGroup,
    ControlLabel,
} from 'react-bootstrap'

import {years, months, getDaysForGivenMonth} from './date-data'
import DropdownList from './DropdownList'

export default class DateSearchBar extends React.Component {
    handleYearChange = event => (
        this.props.onRangeChange('year', +event.currentTarget.value)
    )

    handleMonthChange = event => {
        const selectedMonthValue = +event.currentTarget.value
        const currentDaysRange = getDaysForGivenMonth(selectedMonthValue)
        const noSuchDay = selectedMonthValue ?
            !currentDaysRange.find(day => day.value === this.props.selectedDate.day) :
            false

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
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Year</ControlLabel>
                        {' '}
                        <DropdownList
                            value={year}
                            onSelectChange={this.handleYearChange}
                            options={years}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Month</ControlLabel>
                        {' '}
                        <DropdownList
                            value={month}
                            onSelectChange={this.handleMonthChange}
                            options={months}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Day</ControlLabel>
                        {' '}
                        <DropdownList
                            value={day}
                            onSelectChange={this.handleDayChange}
                            options={currentDaysRange}
                        />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
