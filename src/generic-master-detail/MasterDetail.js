import React from 'react'
import {connect} from 'react-redux'

import {Container, Box} from '../styled-components/grid-components'
import MasterView from './MasterView'
import DetailView from './DetailView'

class MasterDetail extends React.Component {
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
        const {NewItem} = this.props

        return (
            <Container>
                <Box sm={5}>
                    <h2>Your custom events</h2>
                    <MasterView
                        events={this.props.events}
                        PreviewItem={this.props.PreviewItem}
                        onEventClick={this.handleEventClick}
                    />
                </Box>

                <Box sm={7}>
                    <h2>Add new event</h2>
                    <NewItem/>

                    {
                        this.state.selectedEvent ?
                            <DetailView
                                event={this.state.selectedEvent}
                                DetailedItem={this.props.DetailedItem}
                                EditItem={this.props.EditItem}
                            /> :
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
)(MasterDetail)