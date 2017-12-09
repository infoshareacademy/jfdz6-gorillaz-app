import React from 'react'
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

import Contacts from './Contacts'
import Calendar from './calendar/Calendar'
import EventsMasterDetail from './my-events/EventsMasterDetail'

const MainRouter = () => (
    <Router>
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Wishes generator</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer exact to="/">
                        <NavItem>Home</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/about">
                        <NavItem>About us</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/contacts">
                        <NavItem>Contacts</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/calendar">
                        <NavItem>Calendar</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/my-events">
                        <NavItem>My events</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
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
    <div>
        <h2>About</h2>
    </div>
)

export default MainRouter