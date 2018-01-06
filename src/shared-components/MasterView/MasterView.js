import React from 'react'

import {ListButton} from '../../styled-components/button-components'
import './MasterView.css'

const MasterView = props => {
    const {items, PreviewItem, onItemClick} = props

    return (
        <div className="MasterView__wrapper">
            {
                items.map(item => (
                        <ListButton
                            key={item.id}
                            onClick={onItemClick}
                            data-item-id={item.id}
                        >
                            <PreviewItem item={item}/>
                        </ListButton>
                    )
                )
            }
        </div>
    )
}

export default MasterView
