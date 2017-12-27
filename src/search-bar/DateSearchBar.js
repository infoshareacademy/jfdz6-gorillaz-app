import React from 'react'
import {
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap'

import {years, months, getDaysForGivenMonth} from './date-data'
import DropdownList from './DropdownList'
import './DateSearchBar.css'

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
            <div className="DateSearchBar__wrapper">
                <div className="DateSearchBar__date-picker">
                    <div className="DateSearchBar__date-item">
                        <FormGroup>
                            <ControlLabel>Year</ControlLabel>
                            {' '}
                            <DropdownList
                                value={year}
                                onSelectChange={this.handleYearChange}
                                options={years}
                            />
                        </FormGroup>
                    </div>

                    <div className="DateSearchBar__date-item">
                        <FormGroup>
                            <ControlLabel>Month</ControlLabel>
                            {' '}
                            <DropdownList
                                value={month}
                                onSelectChange={this.handleMonthChange}
                                options={months}
                            />
                        </FormGroup>
                    </div>

                    <div className="DateSearchBar__date-item">
                        <FormGroup>
                            <ControlLabel>Day</ControlLabel>
                            {' '}
                            <DropdownList
                                value={day}
                                onSelectChange={this.handleDayChange}
                                options={currentDaysRange}
                            />
                        </FormGroup>
                    </div>
                </div>

                <div className="DateSearchBar__phrase-search">
                    <FormGroup>
                        <ControlLabel>Phrase</ControlLabel>
                        <FormControl
                            type="text"
                        />
                    </FormGroup>
                </div>
            </div>
        )
    }
}
