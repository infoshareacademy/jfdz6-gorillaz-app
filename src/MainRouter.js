import React from 'react'
import {connect} from 'react-redux'
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
import {getHolidays}from './state/holidays'
import {
    subscribeContacts,
    unsubscribeContacts
} from './state/contacts'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Calendar from './calendar-module/Calendar/Calendar'
import EventsMasterDetail from './events-crud-module/EventsMasterDetail/EventsMasterDetail'
import ContactsMasterDetail from './contacts-crud-module/ContactsMasterDetail/ContactsMasterDetail'

import {
    Container,
    FlexContainer,
    FlexBox
} from './styled-components/grid-components'
import './MainRouter.css'

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
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer exact to="/">
                                <NavItem>Home</NavItem>
                            </LinkContainer>

                            <LinkContainer to="/about">
                                <NavItem>About us</NavItem>
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
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Route exact path="/" component={Home}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={ContactsMasterDetail}/>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/my-events" component={EventsMasterDetail}/>
            </div>
        </Router>
    )
}

const Home = () => (
    <Container>
        <FlexContainer>
            <FlexBox>
                <div>
                    <h1 className="MainRouter__header">Purpose of the application</h1>
                    <p className="MainRouter__paragraph">
                        Application description
                    </p>
                </div>
            </FlexBox>
            <FlexBox>
                <div>
                    <h1 className="MainRouter__header">Functionalities</h1>
                    <p className="MainRouter__paragraph">
                        List of the functionalities
                    </p>
                </div>
            </FlexBox>
        </FlexContainer>
    </Container>
)

const About = () => (
    <Container>
        <FlexContainer>
            <FlexBox>
                <h1 className="MainRouter__header">ABOUT US</h1>
            </FlexBox>

            <FlexBox
                mdFlex="2 0 0"
                mdOrder="2"
            >
                <p className="MainRouter__paragraph">
                    Authors of the calendar application
                </p>
            </FlexBox>

            <FlexBox
                smFlex="1 0 0"
                mdOrder="1"
            >
                <p className="MainRouter__paragraph">
                    Wojciech Trawiński
                </p>
            </FlexBox>

            <FlexBox
                smFlex="1 0 0"
                mdOrder="3"
            >
                <p className="MainRouter__paragraph">
                    Piotr Kramarz
                </p></FlexBox>

            <FlexBox className="MainRouter__footer" mdOrder="4">
                All rights reserved. Gorillaz Group 2017-2018.
            </FlexBox>
        </FlexContainer>
    </Container>
)

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
