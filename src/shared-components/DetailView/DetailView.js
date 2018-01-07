import React from 'react'
import {Glyphicon} from 'react-bootstrap'

import DetailedItemToolbar from '../DetailedItemToolbar/DetailedItemToolbar'
import {RectButton} from '../../styled-components/button-components'

export default class EventDetailView extends React.Component {
    state = {isBeingEdited: false}

    componentWillReceiveProps = () => this.setState({isBeingEdited: false})

    handleEditItemClick = () => this.setState({isBeingEdited: true})

    handleCancelClick = () => this.setState({isBeingEdited: false})

    handleDeleteItemClick = () => this.props.onDeleteItemClick(this.props.item.id)

    render() {
        const {item, DetailedItem, EditItem} = this.props

        return (
            this.state.isBeingEdited ?
                <EditItem item={item}>
                    <RectButton
                        bgc={'#2196f3'}
                        onClick={this.handleCancelClick}
                    >
                        <Glyphicon glyph="remove-circle"/>
                        {' '}
                        Cancel
                    </RectButton>
                </EditItem> :
                <div>
                    <DetailedItem item={item}/>

                    <DetailedItemToolbar
                        onEditItemClick={this.handleEditItemClick}
                        onDeleteItemClick={this.handleDeleteItemClick}
                    />
                </div>
        )
    }
}
