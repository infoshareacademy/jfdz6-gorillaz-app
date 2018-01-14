import React from 'react'
import {Modal, Glyphicon} from 'react-bootstrap'

import * as StyledButtons from '../../styled-components/button-components'
import './ModalButton.css'

class ModalButton extends React.Component {
    state = {show: false}

    close = () => this.setState({show: false})

    open = () => this.setState({show: true})

    render() {
        const {
            buttonName,
            buttonProps,
            buttonGlyph,
            buttonType,
            modalGlyph,
            modalTitle
        } = this.props
        const ButtonType = buttonType && StyledButtons[buttonType] || StyledButtons['RoundButton']

        return (
            <div className="ModalButton__wrapper">
                <ButtonType
                    {...buttonProps}
                    onClick={this.open}
                >
                    {buttonGlyph && <Glyphicon glyph={buttonGlyph}/>}
                    {' '}
                    {buttonName}
                </ButtonType>

                <Modal
                    show={this.state.show}
                    onHide={this.close}
                    backdrop={'static'}
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title bsClass="ModalButton__title">
                            {
                                modalGlyph &&
                            <Glyphicon
                                glyph={modalGlyph}
                                className="ModalButton__logo"
                            />
                            }
                            {' '}
                            {modalTitle}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ModalButton