import React from 'react'
import {connect} from 'react-redux'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import moment from 'moment'

import {setYear, setMonth, setDay, setPhrase} from '../../state/calendar'
import * as dateHelpers from '../_helpers/date-data'
import DropdownList from '../DropdownList/DropdownList'

import {FlexContainer, FlexBox} from '../../styled-components/grid-components'

const dropdownConstants = {ALL: ''}
const dateConstants = {YEAR: 'year', MONTH: 'month', DAY: 'day'}

class DateSearchBar extends React.Component {
    handleYearChange = event => this.props.setYear(+event.currentTarget.value)

    handleMonthChange = event => {
        const {year, day: currentDay} = this.props.calendar
        const selectedMonth = +event.currentTarget.value
        const days = dateHelpers.getDays(year, selectedMonth)
        const noSuchDay = currentDay && selectedMonth && !days.find(day => day.value === currentDay)

        this.props.setMonth(selectedMonth)
        noSuchDay && this.props.setDay(moment().year(year).month(selectedMonth - 1).endOf('month').date())
    }

    handleDayChange = event => this.props.setDay(+event.currentTarget.value)

    handlePhraseChange = event => this.props.setPhrase(event.currentTarget.value)

    capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

    render() {
        const calendar = this.props.calendar
        const selectedPhrase = calendar.phrase
        const dateValues = {...dateHelpers, days: dateHelpers.getDays(calendar.year, calendar.month)}

        const dateControls = Object.values(dateConstants).map(control => (
                <FlexBox key={control} xsFlex={`1 0 ${control === dateConstants.MONTH ? 200 : 115}px`}>
                    <FormGroup>
                        <ControlLabel>{this.capitalize(control)}</ControlLabel>

                        <DropdownList
                            value={calendar[control]}
                            onSelectChange={this[`handle${this.capitalize(control)}Change`]}
                            options={control !== dateConstants.YEAR ? [
                                {value: dropdownConstants.ALL, name: 'all'},
                                ...dateValues[control + 's']
                            ] :
                                dateValues[control + 's']
                            }
                        />
                    </FormGroup>
                </FlexBox>
            )
        )

        return (
            <FlexContainer>
                {dateControls}

                <FlexBox key="phrase" xsFlex="2 0 200px">
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
