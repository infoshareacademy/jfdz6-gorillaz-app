import React from 'react'

import homePageWojtekImage from './auth-wojtek.jpeg'
import homePagePiotrImage from './auth-piotr.jpg'

import './HomePage.css'
import {
  Container,
  FlexContainer,
  FlexBox
} from './styled-components/grid-components'

const Home = () => (
  <div>
    <Container>
      <h1 className="HomePage__header">Features</h1>

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


      <h1 className="HomePage__header">About us</h1>

      <FlexContainer>
        <FlexBox smFlex="1 0 0">
          <img className="HomePage__image" src={homePageWojtekImage}/>
          Wojtek
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          <img className="HomePage__image" src={homePagePiotrImage}/>
          Piotr
        </FlexBox>
      </FlexContainer>

      <h1 className="HomePage__header">Comming soon</h1>

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
      <FlexBox className="HomePage__footer">
        All rights reserved. Gorillaz Group 2017-2018.
      </FlexBox>
    </FlexContainer>
  </div>
)

export default Home