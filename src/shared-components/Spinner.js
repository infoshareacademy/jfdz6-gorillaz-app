import React from 'react'

import {
    FlexContainer,
    FlexBox,
} from '../styled-components/grid-components'
import {Spinner as SpinnerComponent} from '../styled-components/spinner'

const Spinner = (props) => (
    <FlexContainer justify="center">
        <FlexBox xsFlex={'0 0 ' + props.size || '125px'}>
            <SpinnerComponent/>
            <p>Getting data...</p>
        </FlexBox>
    </FlexContainer>
)

export default Spinner
