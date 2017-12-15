import React from 'react'

import MasterDetail from '../generic-master-detail/MasterDetail'
import NewContact from './views/NewContact'
import PreviewContact from './views/PreviewContact'
import DetailedContact from './views/DetailedContact'
import EditContact from './views/EditContact'

const ContactsMasterDetail = props => {

    return (
        <MasterDetail
            NewItem={NewContact}
            PreviewItem={PreviewContact}
            DetailedItem={DetailedContact}
            EditItem={EditContact}
        />
    )
}

export default ContactsMasterDetail
