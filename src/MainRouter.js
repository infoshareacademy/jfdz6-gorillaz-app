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
import Calendar from './calendar/Calendar'
import EventsMasterDetail from './events/EventsMasterDetail'
import ContactsMasterDetail from './contacts/ContactsMasterDetail'

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
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <Container>
        <FlexContainer>
            <FlexBox>
                Header
            </FlexBox>

            <FlexBox
                mdFlex="2 0 0"
                mdOrder="2"
            >
                Section
                This is an example how to use grid styled-components
            </FlexBox>

            <FlexBox
                smFlex="1 0 0"
                mdOrder="1"
            >
                Aside left
            </FlexBox>

            <FlexBox
                smFlex="1 0 0"
                mdOrder="3"
            >
                Aside right
            </FlexBox>

            <FlexBox mdOrder="4">
                Footer
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
