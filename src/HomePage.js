import React from 'react'

import './HomePage.css'
import {
  Container,
  FlexContainer,
  FlexBox
} from './styled-components/grid-components'

const Home = () => (
  <div>
    <Container>
      <h1 className="MainRouter__header">Features</h1>

      <FlexContainer>
        <FlexBox smFlex="1 0 0">
          Holidays
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          Name days
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          Custom events
        </FlexBox>
      </FlexContainer>


      <h1 className="MainRouter__header">About us</h1>

      <FlexContainer>
        <FlexBox smFlex="1 0 0">
          Wojtek
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          Piotr
        </FlexBox>
      </FlexContainer>

      <h1 className="MainRouter__header">Comming soon</h1>

      <FlexContainer>
        <FlexBox smFlex="1 0 0">
          Emails
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          Unordinary wishes
        </FlexBox>
      </FlexContainer>
    </Container>

    <FlexContainer>
      <FlexBox className="MainRouter__footer">
        All rights reserved. Gorillaz Group 2017-2018.
      </FlexBox>
    </FlexContainer>
  </div>
)

export default Home