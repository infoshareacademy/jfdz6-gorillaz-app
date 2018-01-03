import React from 'react'

import {Glyphicon} from 'react-bootstrap'
import {Container, Box} from '../../styled-components/grid-components'
import MasterView from '../MasterView/MasterView'
import DetailView from '../DetailView/DetailView'

import {
    FlexContainer,
    FlexBox,
} from '../../styled-components/grid-components'
import {NoDataContainer, NoDataInfo} from '../../styled-components/typography-components'
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
                <FlexContainer>
                    <FlexBox smFlex="5 0 0">
                        <h3 className="MasterDetail__header">
                            <Glyphicon
                                glyph="list-alt"
                                className="MasterDetail__logo"
                            />
                            {' '}
                            Your {name}s
                        </h3>

                        {
                            this.props.items.length ?
                                <MasterView
                                    items={this.props.items}
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
                                    <h3 className="MasterDetail__header">
                                        <Glyphicon
                                            glyph="wrench"
                                            className="MasterDetail__logo"
                                        />
                                        {' '}
                                        {name} details
                                    </h3>
                                    <DetailView
                                        item={this.state.selectedItem}
                                        DetailedItem={this.props.DetailedItem}
                                        EditItem={this.props.EditItem}
                                    />
                                </div> :
                                <h3 className="MasterDetail__header">
                                    <Glyphicon
                                        glyph="zoom-in"
                                        className="MasterDetail__logo"
                                    />
                                    {' '}
                                    Select {name} from the&nbsp;list
                                </h3>
                        }

                        <h3 className="MasterDetail__header">
                            <Glyphicon
                                glyph="plus"
                                className="MasterDetail__logo"
                            />
                            {' '}
                            Add new {name}
                        </h3>

                        <NewItem/>
                    </FlexBox>
                </FlexContainer>
            </Container>
        )
    }
}

export default MasterDetail