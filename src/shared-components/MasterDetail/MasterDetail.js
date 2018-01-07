import React from 'react'
import {Glyphicon} from 'react-bootstrap'

import MasterView from '../MasterView/MasterView'
import DetailView from '../DetailView/DetailView'

import {Container, FlexContainer, FlexBox} from '../../styled-components/grid-components'
import {NoDataContainer, NoDataInfo, Header} from '../../styled-components/typography-components'

class MasterDetail extends React.Component {
    state = {selectedItem: null}

    componentWillReceiveProps = () => this.setState({selectedItem: null})

    handleItemClick = event => {
        const target = event.currentTarget
        const selectedItemId = target.dataset.itemId
        const selectedItem = this.props.items.find(item => item.id === selectedItemId)

        this.setState({selectedItem})
    }

    render() {
        const {NewItem, name, items} = this.props

        return (
            <Container>
                <FlexContainer>
                    <FlexBox smFlex="5 0 0">
                        <Header>
                            <Glyphicon glyph="list-alt"/>Your {name}s
                        </Header>
                        {
                            items.length ?
                                <MasterView
                                    items={items}
                                    selectedItem={this.state.selectedItem}
                                    PreviewItem={this.props.PreviewItem}
                                    onItemClick={this.handleItemClick}
                                /> :
                                <NoDataContainer>
                                    <NoDataInfo>
                                        No {name} added so far
                                    </NoDataInfo>
                                </NoDataContainer>
                        }
                    </FlexBox>

                    <FlexBox smFlex="7 0 0">
                        {
                            this.state.selectedItem ?
                                <div>
                                    <Header>
                                        <Glyphicon glyph="wrench"/>{name} details
                                    </Header>

                                    <DetailView
                                        item={this.state.selectedItem}
                                        DetailedItem={this.props.DetailedItem}
                                        EditItem={this.props.EditItem}
                                        onDeleteItemClick={this.props.onDeleteItemClick}
                                    />
                                </div> :
                                <Header>
                                    <Glyphicon glyph="zoom-in"/>Select {name} from the&nbsp;list
                                </Header>
                        }
                        <Header>
                            <Glyphicon glyph="plus"/>Add new {name}
                        </Header>

                        <NewItem/>
                    </FlexBox>
                </FlexContainer>
            </Container>
        )
    }
}

export default MasterDetail
