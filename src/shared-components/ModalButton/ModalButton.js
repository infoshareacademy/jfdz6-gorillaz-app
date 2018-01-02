import React from 'react'
import {
    Modal,
    Glyphicon
} from 'react-bootstrap'

import {RoundButton} from '../../styled-components/button-components'
import './ModalButton.css'

export default class ModalButton extends React.Component {
    state = {
        show: false
    }

    close = () => this.setState({show: false})

    open = () => this.setState({show: true})

    render() {
        const {
            buttonName,
            buttonProps,
            buttonGlyph,
            buttonClass,
            modalGlyph,
            modalTitle
        } = this.props

        return (
            <div className="ModalButton__wrapper">
                {
                    buttonProps ?
                        <RoundButton
                            {...buttonProps}
                            onClick={this.open}
                        >
                            {buttonGlyph && <Glyphicon glyph={buttonGlyph}/>}
                            {' '}
                            {buttonName}
                        </RoundButton> :
                        <button
                            className={buttonClass}
                            onClick={this.open}
                        >
                            {buttonName}
                        </button>
                }

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
