import React from 'react'

import homePageWojtekImage from './home-page-wojtek.jpeg'
import homePagePiotrImage from './home-page-piotr.jpg'
import homePageGithubImage from './home-page-social-github.png'
import homePageLinkedinImage from './home-page-social-linkedin.png'

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
          <FlexContainer justify="center">
            <FlexBox xsFlex="0 1 150px">
              <img className="HomePage__social-media-image" src={homePageGithubImage}/>
            </FlexBox>
            <FlexBox xsFlex="0 1 150px">
              <img className="HomePage__social-media-image" src={homePageLinkedinImage}/>
            </FlexBox>
          </FlexContainer>
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          <img className="HomePage__image" src={homePagePiotrImage}/>
          <FlexContainer justify="center">
            <FlexBox xsFlex="0 1 150px">
              <img className="HomePage__social-media-image" src={homePageGithubImage}/>
            </FlexBox>
            <FlexBox xsFlex="0 1 150px">
              <img className="HomePage__social-media-image" src={homePageLinkedinImage}/>
            </FlexBox>
          </FlexContainer>
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