import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class ModalButton extends React.Component {
    state = {
        show: false
    }

    close = () => this.setState({ show: false })

    open = () => this.setState({ show: true })

    render() {
        const {buttonName, modalHeader} = this.props

        return (
            <div>
                <Button onClick={this.open}>{buttonName}</Button>
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

