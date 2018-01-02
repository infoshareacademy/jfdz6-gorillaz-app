import React from 'react'
import {connect} from 'react-redux'

import MasterDetail from '../../shared-components/MasterDetail/MasterDetail'
import NewContact from '../NewContact/NewContact'
import PreviewContact from '../PreviewContact/PreviewContact'
import DetailedContact from '../DetailedContact/DetailedContact'
import EditContact from '../EditContact/EditContact'

import Spinner from '../../shared-components/Spinner/Spinner'

class ContactsMasterDetail extends React.Component {
    render() {
        const isDataRetrieved = !this.props.contacts.getting

        return (
            isDataRetrieved ?
                <MasterDetail
                    items={this.props.contacts.data || []}
                    name={'contact'}
                    NewItem={NewContact}
                    PreviewItem={PreviewContact}
                    DetailedItem={DetailedContact}
                    EditItem={EditContact}
                /> :
                <Spinner/>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts
})

export default connect(
    mapStateToProps
)(ContactsMasterDetail)
