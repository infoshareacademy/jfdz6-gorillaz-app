import React from 'react'
import {Button, Glyphicon} from 'react-bootstrap'

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
                    <EditItem item={item}>
                        <Button
                            bsStyle="info"
                            onClick={this.handleCancelClick}
                        >
                            <Glyphicon glyph="remove-circle"/>
                            {' '}
                            Cancel
                        </Button>
                    </EditItem>
                </div> :

                <div>
                    <DetailedItem item={item}>
                        <Button
                            bsStyle="success"
                            onClick={this.handleEditItemClick}
                        >
                            <Glyphicon glyph="pencil"/>
                            {' '}
                            Edit
                        </Button>
                    </DetailedItem>
                </div>
        )
    }
}
