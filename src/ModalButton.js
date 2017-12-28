import React from 'react'
import {Modal, Button, Glyphicon} from 'react-bootstrap'

import {RoundButton} from './styled-components/button-components'
import './ModalButton.css'

export default class ModalButton extends React.Component {
    state = {
        show: false
    }

    close = () => this.setState({show: false})

    open = () => this.setState({show: true})

    render() {
        const {buttonName, buttonProps, glyph, className, modalHeader} = this.props

        return (
            <div className="ModalButton__wrapper">
                {
                    buttonProps ?
                        <RoundButton
                            {...buttonProps}
                            onClick={this.open}
                        >
                            {glyph && <Glyphicon glyph={glyph}/>}
                            {' '}
                            {buttonName}
                        </RoundButton> :
                        <button
                            className={className}
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
                        <Modal.Title>
                            {modalHeader}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

