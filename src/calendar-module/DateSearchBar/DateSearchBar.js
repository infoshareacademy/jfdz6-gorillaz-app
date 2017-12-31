import React from 'react'
import {connect} from 'react-redux'
import {
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap'

import {years, months, getDaysForGivenMonth} from '../_helpers/date-data'
import DropdownList from '../DropdownList/DropdownList'

import {
    setYear,
    setMonth,
    setDay,
    setPhrase
} from '../../state/calendar'

import {
    FlexContainer,
    FlexBox,
} from '../../styled-components/grid-components'

class DateSearchBar extends React.Component {
    handleYearChange = event => (
        this.props.setYear(+event.currentTarget.value)
    )

    handleMonthChange = event => {
        const selectedMonthValue = +event.currentTarget.value
        const currentDaysRange = getDaysForGivenMonth(selectedMonthValue)
        const noSuchDay = selectedMonthValue ?
            !currentDaysRange.find(day => day.value === this.props.calendar.day) :
            false

        this.props.setMonth(selectedMonthValue)
        noSuchDay && this.props.setDay('')
    }

    handleDayChange = event => (
        this.props.setDay(+event.currentTarget.value)
    )

    handlePhraseChange = event => this.props.setPhrase(event.currentTarget.value)

    render() {
        const {year, month, day} = this.props.calendar
        const selectedPhrase = this.props.calendar.phrase
        const currentDaysRange = getDaysForGivenMonth(month || 1)

        return (
            <FlexContainer>

                <FlexBox xsFlex="1 0 115px">
                    <FormGroup>
                        <ControlLabel>Year</ControlLabel>
                        {' '}
                        <DropdownList
                            value={year}
                            onSelectChange={this.handleYearChange}
                            options={years}
                        />
                    </FormGroup>
                </FlexBox>

                <FlexBox xsFlex="1 0 200px">
                    <FormGroup>
                        <ControlLabel>Month</ControlLabel>
                        {' '}
                        <DropdownList
                            value={month}
                            onSelectChange={this.handleMonthChange}
                            options={months}
                        />
                    </FormGroup>
                </FlexBox>

                <FlexBox xsFlex="1 0 115px">
                    <FormGroup>
                        <ControlLabel>Day</ControlLabel>
                        {' '}
                        <DropdownList
                            value={day}
                            onSelectChange={this.handleDayChange}
                            options={currentDaysRange}
                        />
                    </FormGroup>
                </FlexBox>


                <FlexBox xsFlex="2 0 200px">
                    <FormGroup>
                        <ControlLabel>Phrase</ControlLabel>
                        <FormControl
                            type="text"
                            value={selectedPhrase}
                            onChange={this.handlePhraseChange}
                        />
                    </FormGroup>
                </FlexBox>
            </FlexContainer>
        )
    }
}

const mapStateToProps = state => ({
    calendar: state.calendar
})

const mapDispatchToProps = dispatch => ({
    setYear: year => dispatch(setYear(year)),
    setMonth: month => dispatch(setMonth(month)),
    setDay: day => dispatch(setDay(day)),
    setPhrase: phrase => dispatch(setPhrase(phrase)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateSearchBar)
