import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
    Container,
    FlexContainer,
    FlexBox
} from './styled-components/grid-components'
import './Auth.css'

import SignIn from './SignIn'
import SignUp from './SignUp'

class Auth extends Component {
    render() {
        return (
            <Container>
                <FlexContainer>
                    <FlexBox>
                            {
                                this.props.auth.data === null ?
                                    <div>
                                            <h1 className="Auth__header">YOUR CUSTOMIZED CALENDAR!</h1>
                                            <p className="Auth__paragraph">Welcome on our website, where you can create your own fancy calendar including
                                                customized database of occasions and events! Simple as never before!</p>
                                            <p className="Auth__paragraph">If you are interested in more details, such as getting to know with all the calendar features - please do not hesitate to either <strong>sign in</strong> or
                                                <strong> sign up</strong> in order to see what we can offer in our <strong>CUSTOMIZED CALENDAR!</strong> Take a seat, fasten your seat belts and enjoy this uniqe experience.</p>
                                            <p className="Auth__footer">With Best Regards - <strong>Gorillaz Team</strong></p>
                                        <SignIn/>
                                        <SignUp/>
                                    </div> :
                                    this.props.children
                            }
                    </FlexBox>
                </FlexContainer>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps
)(Auth)