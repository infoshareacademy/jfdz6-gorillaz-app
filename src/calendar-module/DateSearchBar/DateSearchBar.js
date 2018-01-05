import React from 'react'
import {connect} from 'react-redux'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import moment from 'moment'

import {setYear, setMonth, setDay, setPhrase} from '../../state/calendar'
import {years, months, getDays} from '../_helpers/date-data'
import DropdownList from '../DropdownList/DropdownList'

import {FlexContainer, FlexBox} from '../../styled-components/grid-components'

const dropdownConstants = {ALL: ''}

class DateSearchBar extends React.Component {
    handleYearChange = event => this.props.setYear(+event.currentTarget.value)

    handleMonthChange = event => {
        const {year, day: currentDay} = this.props.calendar
        const selectedMonth = +event.currentTarget.value
        const days = getDays(year, selectedMonth)
        const noSuchDay = currentDay && selectedMonth && !days.find(day => day.value === currentDay)

        this.props.setMonth(selectedMonth)
        noSuchDay && this.props.setDay(moment().year(year).month(selectedMonth - 1).endOf('month').date())
    }

    handleDayChange = event => this.props.setDay(+event.currentTarget.value)

    handlePhraseChange = event => this.props.setPhrase(event.currentTarget.value)

    render() {
        const {year, month, day} = this.props.calendar
        const selectedPhrase = this.props.calendar.phrase
        const days = getDays(year, month)

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
                            options={[{value: dropdownConstants.ALL, name: 'all'}, ...months]}
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
                            options={[{value: dropdownConstants.ALL, name: 'all'}, ...days]}
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

const mapStateToProps = state => ({calendar: state.calendar})

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
