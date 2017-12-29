import React from 'react'
import {connect} from 'react-redux'

import {
    subscribeContacts,
    unsubscribeContacts
} from '../state/contacts'
import MasterDetail from '../generic-master-detail/MasterDetail'
import NewContact from './views/NewContact'
import PreviewContact from './views/PreviewContact'
import DetailedContact from './views/DetailedContact'
import EditContact from './views/EditContact'
import Spinner from '../shared-components/Spinner'

class ContactsMasterDetail extends React.Component {
    componentDidMount = () => {
        this.props.subscribeContacts()
    }

    componentWillUnmount = () => {
        this.props.unsubscribeContacts()
    }

    render = () => (
        <MasterDetail
            items={this.props.items}
            name={'contact'}
            NewItem={NewContact}
            PreviewItem={PreviewContact}
            DetailedItem={DetailedContact}
            EditItem={EditContact}
        />
    )
}

const mapStateToProps = state => ({
    items: state.contacts
})

const mapDispatchToProps = dispatch => ({
    subscribeContacts: () => dispatch(subscribeContacts()),
    unsubscribeContacts: () => dispatch(unsubscribeContacts())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsMasterDetail)
