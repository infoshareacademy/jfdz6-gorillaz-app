import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'

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

import ContactsMasterDetail from './contacts/ContactsMasterDetail'
import Calendar from './calendar/Calendar'
import EventsMasterDetail from './events/EventsMasterDetail'
import {Container, Box} from './styled-components/grid-components'

const MainRouter = () => (
    <Router>
        <div>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">My calendar</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
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

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <Container>
        <Box
            sm={6}
            md={3}
            smPush={1}
        >
            Box1
        </Box>
        <Box
            sm={6}
            md={3}
        >
            Box2
        </Box>
        <Box
            sm={6}
            md={3}
        >
            Box3
        </Box>
        <Box
            sm={6}
            md={3}
        >
            Box4
        </Box>
    </Container>
)

export default MainRouter