import React from 'react'

import {Glyphicon} from 'react-bootstrap'
import {Container, Box} from '../styled-components/grid-components'
import MasterView from './MasterView'
import DetailView from './DetailView'
import './MasterDetail.css'

class MasterDetail extends React.Component {
    state = {
        selectedItem: null
    }

    componentWillReceiveProps = () => {
        this.setState({
            selectedItem: null
        })
    }

    handleItemClick = event => {
        const target = event.currentTarget
        const selectedItemId = target.dataset.itemId
        const selectedItem = this.props.items.find(item => item.id === selectedItemId)

        this.setState({
            selectedItem
        })
    }

    render() {
        const {NewItem, name} = this.props

        return (
            <Container>
                <Box sm={5}>
                    <h3 className="MasterDetail__header">
                        <Glyphicon
                            glyph="list-alt"
                            className="MasterDetail__logo"
                        />
                        {' '}
                        Your {name}s
                    </h3>

                    <MasterView
                        items={this.props.items}
                        PreviewItem={this.props.PreviewItem}
                        onItemClick={this.handleItemClick}
                    />
                </Box>

                <Box sm={7}>
                    <h3 className="MasterDetail__header">
                        <Glyphicon
                            glyph="plus"
                            className="MasterDetail__logo"
                        />
                        {' '}
                        Add new {name}
                    </h3>

                    <NewItem/>

                    {
                        this.state.selectedItem ?
                            <DetailView
                                item={this.state.selectedItem}
                                DetailedItem={this.props.DetailedItem}
                                EditItem={this.props.EditItem}
                            /> :
                            <h2>Select {name} from the list</h2>
                    }
                </Box>
            </Container>
        )
    }
}

export default MasterDetail