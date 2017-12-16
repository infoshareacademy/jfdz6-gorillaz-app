import React from 'react'
import {connect} from 'react-redux'

import MasterDetail from '../generic-master-detail/MasterDetail'
import NewContact from './views/NewContact'
import PreviewContact from './views/PreviewContact'
import DetailedContact from './views/DetailedContact'
import EditContact from './views/EditContact'

const ContactsMasterDetail = props => {

    return (
        <MasterDetail
            items={props.items}
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

export default connect(
    mapStateToProps
)(ContactsMasterDetail)
