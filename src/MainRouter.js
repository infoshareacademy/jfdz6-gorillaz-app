import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap'
import {
    LinkContainer
} from 'react-router-bootstrap'

import Message from './message'

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
                </Nav>
            </Navbar>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/calendar" component={Calendar}/>
            <Message/>

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

const Contacts = () => (
    <div>
        <h2>Contacts list</h2>
    </div>
)

const Calendar = () => (
    <div>
        <h2>Calendar</h2>
    </div>
)

export default MainRouter