import React from 'react'

import homePageWojtekImage from './home-page-wojtek.jpeg'
import homePagePiotrImage from './home-page-piotr.jpg'
import homePageGithubImage from './home-page-social-github.png'
import homePageLinkedinImage from './home-page-social-linkedin.png'
import homePageHolidaysImage from './home-page-holidays.png'
import homePageNameDaysImage from './home-page-calendar.png'
import homePageCustomEventsImage from './home-page-present.png'
import homePageEmailImage from './home-page-email.png'
import homePageGreetingCardImage from './home-page-greeting-card.png'

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
          <img className="HomePage__image HomePage__image--feature" src={homePageHolidaysImage}/>
          <p className="HomePage__paragraph">You can find plenty of occasions in our calendar - Christmas holidays, Easter and many, many others!</p>
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          <img className="HomePage__image HomePage__image--feature" src={homePageNameDaysImage}/>
          <p className="HomePage__paragraph">Have you ever forgot about a name day of your relatives? Maybe even your wife's or husbands? That is not goint to happen in the future as long as you use our calendar, where you can find all name days!</p>
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          <img className="HomePage__image HomePage__image--feature" src={homePageCustomEventsImage}/>
          <p className="HomePage__paragraph">On the top of previous features - you can add your own occasions to the calendar. You can add the lists of your contacts and many other.</p>
        </FlexBox>
      </FlexContainer>


      <h1 className="HomePage__header">About us</h1>

      <FlexContainer>
        <FlexBox smFlex="1 0 0">
          <img className="HomePage__image HomePage__image--author" src={homePageWojtekImage}/>
          <p className="HomePage__paragraph">More information about Wojtek soon...</p>
          <FlexContainer justify="center">
            <FlexBox xsFlex="0 1 150px">
              <a target="_blank" href="https://github.com/wojtrawi"><img className="HomePage__image HomePage__image--social" src={homePageGithubImage}/></a>
            </FlexBox>
            <FlexBox xsFlex="0 1 150px">
              <a target="_blank" href="https://www.linkedin.com/in/wojciech-trawi%C5%84ski/"><img className="HomePage__image HomePage__image--social" src={homePageLinkedinImage}/></a>
            </FlexBox>
          </FlexContainer>
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          <img className="HomePage__image HomePage__image--author" src={homePagePiotrImage}/>
          <p className="HomePage__paragraph">Currently working as a Senior EMS Development Manager in the industry of Electronics</p>
          <FlexContainer justify="center">
            <FlexBox xsFlex="0 1 150px">
              <a target="_blank" href="https://github.com/piotrkramarz"><img className="HomePage__image HomePage__image--social" src={homePageGithubImage}/></a>
            </FlexBox>
            <FlexBox xsFlex="0 1 150px">
              <a target="_blank" href="https://www.linkedin.com/in/piotr-kramarz/"><img className="HomePage__image HomePage__image--social" src={homePageLinkedinImage}/></a>
            </FlexBox>
          </FlexContainer>
        </FlexBox>
      </FlexContainer>

      <h1 className="HomePage__header">Comming soon</h1>

      <FlexContainer>
        <FlexBox smFlex="1 0 0">
          <img className="HomePage__image HomePage__image--upcomming" src={homePageEmailImage}/>
          <p className="HomePage__paragraph">We are working on the awesome new feature so you could send an e-mail to your relative/colleague with special wishes!</p>
        </FlexBox>

        <FlexBox smFlex="1 0 0">
          <img className="HomePage__image HomePage__image--upcomming" src={homePageGreetingCardImage}/>
          <p className="HomePage__paragraph">Yet, another fancy feature! More details soon! Be patient!</p>
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