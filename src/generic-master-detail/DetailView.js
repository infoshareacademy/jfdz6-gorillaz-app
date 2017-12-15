import React from 'react'
import {Button} from 'react-bootstrap'

export default class EventDetailView extends React.Component {
    state = {
        isBeingEdited: false
    }

    componentWillReceiveProps = () => {
        this.setState({
            isBeingEdited: false
        })
    }

    handleEditItemClick = () => (
        this.setState({
            isBeingEdited: true
        })
    )

    handleCancelClick = () => (
        this.setState({
            isBeingEdited: false
        })
    )

    render() {
        const {item, DetailedItem, EditItem} = this.props

        return (
            this.state.isBeingEdited ?
                <div>
                    <h2>Edit selected event</h2>
                    <EditItem item={item}>
                        <Button onClick={this.handleCancelClick}>Cancel</Button>
                    </EditItem>
                </div> :

                <div>
                    <DetailedItem item={item}>
                        <Button onClick={this.handleEditItemClick}>Edit</Button>
                    </DetailedItem>
                </div>
        )
    }
}