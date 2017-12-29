import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {
    subscribeCustomEvents,
    unsubscribeCustomEvents,
    parseEvents
} from '../state/custom-events'
import {
    getHolidays,
    parseHolidays
}from "../state/holidays"
import {getCalendarConfig} from './calendar-config'
import NewEventButton from '../events/views/NewEventButton'
import DateSearchBar from '../search-bar/DateSearchBar'
import EventsDashboard from '../events/EventsDashboard'

import {
    Container,
    FlexContainer,
    FlexBox,
} from '../styled-components/grid-components'
import Spinner from '../shared-components/Spinner'
import './Calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

class Calendar extends React.Component {
    state = {
        currentYear: (new Date()).getFullYear(),
        selectedDate: {
            year: '',
            month: '',
            day: ''
        }
    }

    componentDidMount = () => {
        !this.props.holidays.data && this.props.getHolidays()
        this.props.subscribeCustomEvents()
    }

    componentWillUnmount = () => {
        this.props.unsubscribeCustomEvents()
    }

    getCalendarConfig = getCalendarConfig.bind(this)

    handleNavigate = currentDate => {
        const currentYear = (new Date(currentDate)).getFullYear()

        if (this.state.currentYear !== currentYear) {
            this.props.parseEvents(currentYear)
            this.props.parseHolidays(currentYear)

            this.setState({
                currentYear,
                selectedDate: {
                    year: currentDate.getFullYear(),
                    month: (currentDate.getMonth() + 1),
                    day: currentDate.getDate()
                }
            })
        } else {
            this.setState({
                selectedDate: {
                    year: currentDate.getFullYear(),
                    month: (currentDate.getMonth() + 1),
                    day: currentDate.getDate()
                }
            })
        }
    }

    handleSelectSlot = ({start}) => this.setState({
        selectedDate: {
            year: start.getFullYear(),
            month: start.getMonth() + 1,
            day: start.getDate()
        }
    })

    handleSelectEvent = event => this.handleSelectSlot(event)

    handleRangeChange = (part, value, noSuchDay) => {
        if (part === 'year' && this.state.currentYear !== value) {
            this.props.parseEvents(value)
            this.props.parseHolidays(value)

            this.setState({
                currentYear: value,
            })
        }

        noSuchDay ?
            this.setState({
                selectedDate: {
                    ...this.state.selectedDate,
                    [part]: value,
                    day: ''
                }
            }) :
            this.setState({
                selectedDate: {
                    ...this.state.selectedDate,
                    [part]: value
                }
            })
    }


    render() {
        const isDataRetrieved = !this.props.holidays.getting && !this.props.customEvents.getting

        return (
            <Container>
                {
                    isDataRetrieved ?
                        <div>
                            <FlexContainer justify="center">
                                <FlexBox xsFlex="0 1 900px">
                                    <div className="Calendar__wrapper">
                                        <BigCalendar {...this.getCalendarConfig()}/>
                                        <NewEventButton selectedDate={this.state.selectedDate}/>
                                    </div>
                                </FlexBox>
                            </FlexContainer>

                            <FlexContainer justify="center">
                                <FlexBox xsFlex="0 1 900px">
                                    <DateSearchBar
                                        selectedDate={this.state.selectedDate}
                                        onRangeChange={this.handleRangeChange}
                                    />
                                </FlexBox>
                            </FlexContainer>

                            <FlexContainer>
                                <FlexBox>
                                    <EventsDashboard
                                        selectedDate={this.state.selectedDate}
                                    />
                                </FlexBox>
                            </FlexContainer>
                        </div> :
                        <Spinner/>
                }
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    customEvents: state.customEvents,
    holidays: state.holidays
})

const mapDispatchToProps = dispatch => ({
    parseEvents: year => dispatch(parseEvents(year)),
    subscribeCustomEvents: () => dispatch(subscribeCustomEvents()),
    unsubscribeCustomEvents: () => dispatch(unsubscribeCustomEvents()),
    getHolidays: () => dispatch(getHolidays()),
    parseHolidays: year => dispatch(parseHolidays(year))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)