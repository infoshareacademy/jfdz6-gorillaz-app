import React from 'react'
import {connect} from 'react-redux'

import {Container, Box} from '../../styled-components/grid-components'
import EventsMasterView from './EventsMasterView'
import NewEvent from '../views/NewEvent'
import EventDetailView from './EventDetailView'

class EventsMasterDetail extends React.Component {
    state = {
        selectedEvent: null
    }

    componentWillReceiveProps = () => {
        this.setState({
            selectedEvent: null
        })
    }

    handleEventClick = event => {
        const target = event.currentTarget
        const selectedEventId = +target.dataset.eventId
        const selectedEvent = this.props.events.find(event => event.id === selectedEventId)

        this.setState({
            selectedEvent
        })
    }

    render() {
        return (
            <Container>
                <Box sm={5}>
                    <h2>Your custom events</h2>
                    <EventsMasterView
                        events={this.props.events}
                        onEventClick={this.handleEventClick}
                    />
                </Box>

                <Box sm={7}>
                    <h2>Add new event</h2>
                    <NewEvent/>

                    {
                        this.state.selectedEvent ?
                            <EventDetailView event={this.state.selectedEvent}/> :
                            <h2>Select event from the list</h2>
                    }
                </Box>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    events: state.customEvents
})

export default connect(
    mapStateToProps
)(EventsMasterDetail)