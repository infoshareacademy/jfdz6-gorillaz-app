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
import SignUp from './auth-module/SignUp'
import SignIn from './auth-module/SignIn'
import SignOutButton from './auth-module/SignOutButton'
import Calendar from './calendar-module/Calendar/Calendar'
import EventsMasterDetail from './events-crud-module/EventsMasterDetail/EventsMasterDetail'
import ContactsMasterDetail from './contacts-crud-module/ContactsMasterDetail/ContactsMasterDetail'
import Home from './home-page-module/HomePage'

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
      <div className="HomePage__wrapper">
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
