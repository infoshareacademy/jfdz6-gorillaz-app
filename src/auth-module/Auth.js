import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
    Container,
    FlexContainer,
    FlexBox
} from '../styled-components/grid-components'
import './Auth.css'

import SignIn from './SignIn'
import SignUp from './SignUp'
import authImage from './auth-image.png'
import authStartImage from './auth-start-image.png'

class Auth extends Component {
    render() {
        return (
            <div>
                {
                    this.props.auth.data === null ?
                        <Container>
                            <h1 className="Auth__header">Welcome at your <br/> customized calendar!</h1>
                            <FlexContainer>

                                <FlexBox smFlex="2 0 0">
                                    <p className="Auth__paragraph">
                                        <strong>Dear User</strong>,
                                    </p>
                                    <p className="Auth__paragraph">
                                        Welcome on our website, where you can create your own fancy calendar
                                        including
                                        customized database of occasions and events! Simple as never before!</p>
                                    <p className="Auth__paragraph">
                                        If you are interested in more details, such as getting to know with all
                                        the calendar features - please do not hesitate to either <strong>sign
                                        in</strong> or
                                        <strong> sign up</strong> in order to see what we can offer in our <strong>CUSTOMIZED
                                        CALENDAR!</strong> Take a seat, fasten your seat belts and enjoy this uniqe
                                        experience.</p>
                                    <p className="Auth__footer">With Best Regards - <strong>Gorillaz Team</strong></p>
                                </FlexBox>
                                <FlexBox smFlex="1 0 0">
                                    <img className="Auth__image" src={authImage}/>
                                </FlexBox>
                            </FlexContainer>
                                <FlexContainer>
                                <FlexBox>
                                    <SignIn/>
                                    <SignUp/>
                                    <img className="Auth__start__image" src={authStartImage}/>
                                </FlexBox>
                            </FlexContainer>
                        </Container>

                        :
                        this.props.children
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps
)(Auth)