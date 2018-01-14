import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap'
import {
  LinkContainer
} from 'react-router-bootstrap'

import {
  subscribeCustomEvents,
  unsubscribeCustomEvents
} from './state/custom-events'
import { getHolidays } from './state/holidays'
import {
  subscribeContacts,
  unsubscribeContacts
} from './state/contacts'
import SignUp from './SignUp'
import SignIn from './SignIn'
import SignOutButton from './SignOutButton'
import Calendar from './calendar-module/Calendar/Calendar'
import EventsMasterDetail from './events-crud-module/EventsMasterDetail/EventsMasterDetail'
import ContactsMasterDetail from './contacts-crud-module/ContactsMasterDetail/ContactsMasterDetail'
// import HomePage from './HomePage'

import {
  Container,
  FlexContainer,
  FlexBox
} from './styled-components/grid-components'
import './MainRouter.css'

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

class MainRouter extends React.Component {
  componentDidMount = () => {
    !this.props.holidays.data && this.props.getHolidays()
    this.props.subscribeCustomEvents()
    this.props.subscribeContacts()
  }

  componentWillUnmount = () => {
    this.props.unsubscribeCustomEvents()
    this.props.unsubscribeContacts()
  }

  render = () => (
    <Router>
      <div className="MainRouter__wrapper">
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">My calendar</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer exact to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>

              <LinkContainer to="/calendar">
                <NavItem>Calendar</NavItem>
              </LinkContainer>

              <LinkContainer to="/my-events">
                <NavItem>Events</NavItem>
              </LinkContainer>

              <LinkContainer to="/contacts">
                <NavItem>Contacts</NavItem>
              </LinkContainer>
              <NavItem>
                <SignOutButton/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Home}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/contacts" component={ContactsMasterDetail}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/my-events" component={EventsMasterDetail}/>
      </div>
    </Router>
  )
}

const mapStateToProps = state => ({
  holidays: state.holidays
})

const mapDispatchToProps = dispatch => ({
  subscribeCustomEvents: () => dispatch(subscribeCustomEvents()),
  unsubscribeCustomEvents: () => dispatch(unsubscribeCustomEvents()),
  getHolidays: () => dispatch(getHolidays()),
  subscribeContacts: () => dispatch(subscribeContacts()),
  unsubscribeContacts: () => dispatch(unsubscribeContacts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainRouter)
