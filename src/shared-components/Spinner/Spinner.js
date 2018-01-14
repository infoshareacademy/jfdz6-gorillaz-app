import React from 'react'

import {FlexContainer, FlexBox} from '../../styled-components/grid-components'
import {Spinner as SpinnerComponent} from '../../styled-components/miscellaneous-components'

const Spinner = props => (
    <FlexContainer justify="center">
        <FlexBox xsFlex={'0 0 ' + props.size || '125px'}>
            <SpinnerComponent/>
            <h4>Getting data...</h4>
        </FlexBox>
    </FlexContainer>
)

export default Spinner
